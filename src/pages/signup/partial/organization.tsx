import { Checkbox, Form } from 'antd';
import { Button } from 'components/button';
import { ErrorModal } from 'components/error-modal';
import { API } from 'config/api/apiUrls';
import get from 'lodash/get';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import FileUploader from '../../../components/file-uploader/index';
import { Input } from '../../../components/input';
import { Loader } from '../../../components/loader';
import { SignupContext } from '../../../context/signUp';

export const StyledButton = styled(Button)<{ type: any }>`
  border-radius: 4px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  margin: 0 0 0 16px;
  line-height: 20px;
  @media (min-width: 1024px) and (max-width: 1365px) {
    width: 100%;
  }
`;
export interface IOrganizationDetails {
  taxPayerNumber: string;
  statisticalForm: any;
  isChecked: boolean;
  attachment_keys?: string;
}
export const Organization = (props: any) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>('optional');
  const [isChecked, setIsChecked] = useState(false);
  const [taxPayerNumber, setTaxPayerNumber] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');
  const [customKeys, setCustomKeys] = useState('');
  const contextData: any = useContext(SignupContext);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (contextData.organizationFormValues) {
      form.setFieldsValue({
        taxPayerNumber: contextData.organizationFormValues.taxPayerNumber,
      });
      form.setFieldsValue({
        isChecked: contextData.organizationFormValues.isChecked,
      });
      setIsChecked(contextData.organizationFormValues.isChecked);
    }
  }, []);

  const handleContinueClick = () => {
    let organizationDetails: IOrganizationDetails = {
      taxPayerNumber: form.getFieldValue('taxPayerNumber'),
      statisticalForm: file,
      isChecked: isChecked,
      attachment_keys: customKeys,
    };
    props.handleContinueClick(organizationDetails);
  };

  const onCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const getSignedURLKey = (signedUrlKey: any) => {
    customKeys === ''
      ? setCustomKeys(signedUrlKey)
      : setCustomKeys(customKeys + ',' + signedUrlKey);
  };

  const addFileName = (file) => {
    setFile(file);
    setFileName(file.name);
  };

  const fetchTinDetails = async () => {
    const res = await fetch(API.tax_detail + '?taxid=' + form.getFieldValue('taxPayerNumber'));
    if (res.status === 200) {
      return res.json();
    } else {
      form.setFieldsValue({
        taxPayerNumber: '',
      });

      setErrorMessage(t('Please input valid tin'));
    }
  };

  const { refetch } = useQuery('validateTin', fetchTinDetails, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const validateTin = () => {
    if (
      form.getFieldValue('taxPayerNumber') &&
      form.getFieldValue('taxPayerNumber').length === 10
    ) {
      refetch();
    }
  };

  return (
    <>
      <ErrorModal
        visible={!!errorMessage}
        message={errorMessage}
        okText={t('Ok')}
        onOk={() => {
          setErrorMessage('');
        }}
      />
      <Form form={form} layout="vertical" initialValues={{ requiredMark }}>
        <Form.Item
          label="Taxpayer Identification Number (TIN)"
          name="taxPayerNumber"
          rules={[
            { message: t('Please enter your TID.') },
            {
              pattern: /^[\d]{10,10}$/,
              message: t('TIN number is invalid.'),
            },
          ]}
          shouldUpdate
        >
          <Input
            style={{ marginBottom: '10px' }}
            autoFocus={true}
            data-testid="inputId"
            id="taxPayerNumber"
            name="taxPayerNumber"
            type="number"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder={t('Enter your Tax ID(TIN)')}
            value={taxPayerNumber}
            onChange={(e) => form.setFieldsValue({ taxPayerNumber: e.target.value })}
            onBlur={validateTin}
          />
        </Form.Item>
        <Form.Item label="Statisitcal form" name="requiredMark">
          {loading ? (
            <Loader tip={t('File is uploading')} />
          ) : (
            <FileUploader
              addFileName={addFileName}
              fileName={fileName}
              translate={t}
              loader={setLoading}
              sendSignedURLKey={getSignedURLKey}
            />
          )}
          <div>
            <p className="float-left sm-text">Files supported: PDF, XSLS, Image</p>
            <p className="float-right sm-text">Maximum size: 5MB</p>
          </div>
        </Form.Item>
        <Form.Item label="Qualification">
          <p className="sm-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
          </p>
        </Form.Item>
        <Form.Item name="isChecked" valuePropName="checked">
          <Checkbox className="mb-20 sm-text" onChange={onCheckboxChange}>
            {t('I confirm that wheat is 15% or more of my total acreage.')}
          </Checkbox>
        </Form.Item>
        <Form.Item shouldUpdate>
          <StyledButton
            style={{ marginBottom: '24px' }}
            data-testid="send"
            className="btn-green"
            type="btnGreen"
            htmlType="submit"
            disabled={
              !form.getFieldValue('isChecked') ||
              !(
                form.getFieldValue('taxPayerNumber') &&
                form.getFieldValue('taxPayerNumber').toString().length === 10
              ) ||
              fileName === ''
            }
            onClick={() => handleContinueClick()}
          >
            {t('Continue')}
          </StyledButton>
        </Form.Item>
      </Form>
    </>
  );
};
