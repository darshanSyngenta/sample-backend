import { Col, Form, Input, Row } from 'antd';
import cancelIcon from 'assets/images/cancel-icon.svg';
import editIcon from 'assets/images/edit-icon.svg';
import { Button, CancelButton } from 'components/button';
import get from 'lodash/get';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import FileUploader from '../../../components/file-uploader/index';
import { Loader } from '../../../components/loader';
import { AgrobonusContext } from '../../../context/AgroBonusProgramContext';
import '../style.less';

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

const RPPButtonSection = styled.div`
  display: flex;
`;

export interface ITINDeatils {
  TIN: string;
  OGRNCODE: string;
  legalEntityName: string;
  fullLegalEntityName: string;
  Position: string;
  directorName: string;
  fullLegalName: string;
  legalEntityAddress: string;
  legalEntityPhoneNumber: string;
  email: string;
  statisticalForm: any;
}

export const TINDetails = (props: any) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>('optional');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const contextData: any = useContext(AgrobonusContext);

  useEffect(() => {
    tinFormInitialValues();
  }, []);

  const addFileName = (file) => {
    setFile(file);
    setFileName(file.name);
  };

  const tinFormInitialValues = () => {
    if (contextData.tinDetails) {
      form.setFieldsValue({
        TIN: contextData.tinDetails.TIN,
      });
      form.setFieldsValue({
        OGRNCODE: contextData.tinDetails.OGRNCODE,
      });
      form.setFieldsValue({
        legalEntityName: contextData.tinDetails.legalEntityName,
      });
      form.setFieldsValue({
        fullLegalEntityName: contextData.tinDetails.fullLegalEntityName,
      });
      form.setFieldsValue({
        Position: contextData.tinDetails.Position,
      });
      form.setFieldsValue({
        directorName: contextData.tinDetails.directorName,
      });
      form.setFieldsValue({
        fullLegalName: contextData.tinDetails.fullLegalName,
      });
      form.setFieldsValue({
        legalEntityAddress: contextData.tinDetails.legalEntityAddress,
      });
      form.setFieldsValue({
        legalEntityPhoneNumber: contextData.tinDetails.legalEntityPhoneNumber,
      });
      form.setFieldsValue({
        email: contextData.tinDetails.email,
      });
    }
  };

  const tinFormUpdatedValues = () => {
    const tinFormValues: ITINDeatils = {
      TIN: form.getFieldValue('TIN'),
      legalEntityName: form.getFieldValue('legalEntityName'),
      fullLegalEntityName: form.getFieldValue('fullLegalEntityName'),
      Position: form.getFieldValue('Position'),
      directorName: form.getFieldValue('directorName'),
      fullLegalName: form.getFieldValue('fullLegalName'),
      legalEntityAddress: form.getFieldValue('legalEntityAddress'),
      legalEntityPhoneNumber: form.getFieldValue('legalEntityPhoneNumber'),
      email: form.getFieldValue('email'),
      OGRNCODE: form.getFieldValue('OGRNCODE'),
      statisticalForm: file,
    };
    return tinFormValues;
  };

  const handleNextClick = () => {
    props.handleContinueClick(tinFormUpdatedValues());
  };

  const handlePreviousClick = () => {
    props.handlePreviousClick();
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };
  const enableSaveButton = (form): boolean => {
    return !isEdit || form.getFieldsError().filter(({ errors }) => errors.length).length
      ? true
      : false;
  };
  const handleSaveClick = () => {
    setIsEdit(false);
    props.handleTINSaveClick(tinFormUpdatedValues());
  };
  const handleCancelClick = () => {
    setIsEdit(false);
    tinFormInitialValues();
  };
  const enableContinueButton = (form): boolean => {
    return !form.getFieldValue('legalEntityName') ||
      !form.getFieldValue('fullLegalEntityName') ||
      !form.getFieldValue('email') ||
      !form.getFieldValue('legalEntityAddress') ||
      !form.getFieldValue('legalEntityPhoneNumber') ||
      !form.getFieldValue('directorName') ||
      !form.getFieldValue('Position') ||
      form.getFieldsError().filter(({ errors }) => errors.length).length
      ? true
      : false;
  };
  return (
    <>
      <Row justify="center" className="d-flex">
        <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
          {!isEdit ? (
            <div className="text-right">
              {' '}
              {t('Edit')}
              <span className="productIcon edit" onClick={handleEditClick}>
                <img src={editIcon} alt="edit" />
              </span>
            </div>
          ) : (
            <div className="text-right">
              {' '}
              {t('Cancel')}
              <span className="productIcon cancel" onClick={handleCancelClick}>
                <img src={cancelIcon} alt="cancel" />
              </span>
            </div>
          )}
          <Form form={form} layout="vertical" initialValues={{ requiredMark }}>
            <Form.Item name="TIN" label={t('TIN')}>
              <Input
                className="product-input"
                disabled={true}
                data-testid="inputId"
                id="TIN"
                name="TIN"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter TIN number')}
                readOnly
              />
            </Form.Item>
            <p className="text-right">{t('Below information as received from globas database')}</p>
            <Form.Item name="ogrnCode" label={t('OGRN Code')}>
              <Input
                className="product-input"
                data-testid="inputId"
                id="OGRN Code"
                disabled={true}
                name="OGRN Code"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your OGRN code')}
              />
            </Form.Item>
            <Form.Item
              name="legalEntityName"
              label={t('Legal Entity Name')}
              rules={[
                { required: true },
                { message: t('Please enter legal entity name.') },
                { min: 5, message: t('Legal entity name must be at least 5 characters long') },
                {
                  max: 100,
                  message: t('Legal entity name cannot be longer than 100 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="legalEntityName"
                disabled={!isEdit}
                name="legalEntityName"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your legal entity name')}
              />
            </Form.Item>
            <Form.Item
              name="fullLegalEntityName"
              label={t('Full Legal Entity Name')}
              rules={[
                { required: true },
                { message: t('Please enter full legal entity name.') },
                { min: 5, message: t('Full legal entity name must be at least 5 characters long') },
                {
                  max: 100,
                  message: t('Full legal entity name cannot be longer than 100 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="fullLegalEntityName"
                disabled={!isEdit}
                name="fullLegalEntityName"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your full legal entity name')}
              />
            </Form.Item>
            <Form.Item
              name="Position"
              label={t('Position')}
              rules={[
                { required: true },
                { message: t('Please enter position name.') },
                { min: 5, message: t('Position must be at least 5 characters long') },
                {
                  max: 35,
                  message: t('Position cannot be longer than 35 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="Position"
                disabled={!isEdit}
                name="Position"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your position')}
              />
            </Form.Item>
            <Form.Item
              name="directorName"
              label={t('Director Name (Signing Authority)')}
              rules={[
                { required: true },
                { message: t('Please enter director name') },
                { min: 5, message: t('Director name must be at least 5 characters long') },
                {
                  max: 50,
                  message: t('Director name cannot be longer than 50 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="directorName"
                name="directorName"
                disabled={!isEdit}
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your director name')}
              />
            </Form.Item>
            <Form.Item
              name="legalEntityAddress"
              label={t('Legal Entity Address')}
              rules={[
                { required: true },
                { message: t('Please enter legal entity address') },
                { min: 5, message: t('Legal entity address must be at least 5 characters long') },
                {
                  max: 150,
                  message: t('Legal entity address cannot be longer than 150 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="legalEntityAddress"
                disabled={!isEdit}
                name="legalEntityAddress"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your legal entity address')}
              />
            </Form.Item>
            <Form.Item
              name="legalEntityPhoneNumber"
              label={t('Legal Entity Phone Number')}
              rules={[
                { required: true },
                { message: t('Please enter phone number') },
                { min: 5, message: t('Phone number must be at least 5 characters long') },
                {
                  max: 25,
                  message: t('Phone number cannot be longer than 25 characters.'),
                },
              ]}
            >
              <Input
                minLength={5}
                maxLength={25}
                style={{ marginBottom: 15 }}
                data-testid="inputId"
                disabled={!isEdit}
                id="legalEntityPhoneNumber"
                name="legalEntityPhoneNumber"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your phone number')}
                onKeyPress={(event) => {
                  if (
                    (event.charCode === 32 || event.charCode < 48 || event.charCode > 57) &&
                    event.charCode !== 8
                  ) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label={t('Legal Entity Email')}
              rules={[
                { required: true },
                {
                  type: 'email',
                  message: t('Please enter a valid email address.'),
                },
                {
                  message: t('Please input your E-mail!'),
                },
                { min: 5, message: t('Email must be at least 5 characters long') },
                {
                  max: 100,
                  message: t('Email cannot be longer than 100 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="email"
                name="email"
                disabled={!isEdit}
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter your email')}
              />
            </Form.Item>
            {isEdit ? (
              <Form.Item>
                {loading ? (
                  <Loader tip={t('File is uploading')} />
                ) : (
                  <FileUploader
                    addFileName={addFileName}
                    fileName={fileName}
                    translate={t}
                    loader={setLoading}
                  />
                )}{' '}
                <p>{t('*Upload documentary evidences for edited info')}</p>
                <p>{t('Upto 5 files supported; Format: PDF, XSLS, .jpeg/ jpg,tif')}</p>
                <p>{t('Maximum size (All files): 5MB')}</p>
              </Form.Item>
            ) : (
              ''
            )}

            <Form.Item shouldUpdate>
              {() => (
                <RPPButtonSection className="sm-d-block tin-form-btn">
                  <CancelButton
                    className="product-btn"
                    type="default"
                    data-testid="previous"
                    onClick={() => handlePreviousClick()}
                  >
                    {t('Previous')}
                  </CancelButton>
                  <StyledButton
                    className="product-btn"
                    type="primary"
                    htmlType="submit"
                    data-testid="continue"
                    onClick={() => handleNextClick()}
                    disabled={enableContinueButton(form)}
                  >
                    {t('Continue')}
                  </StyledButton>
                  <StyledButton
                    className="product-btn"
                    data-testid="continue"
                    type="primary"
                    disabled={enableSaveButton(form)}
                    onClick={() => handleSaveClick()}
                  >
                    {t('Save')}
                  </StyledButton>
                </RPPButtonSection>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
