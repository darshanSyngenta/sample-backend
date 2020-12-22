import { Col, Form, Input, Row } from 'antd';
import { Button, CancelButton } from 'components/button';
import { history, RoutePaths } from 'core/history';
import get from 'lodash/get';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
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

export interface IBankDeatils {
  bankName: string;
  bankAccountNumber: string;
  bankAccount: string;
  bankIdentifierCode: string;
}
export const BankingDetails = (props: any) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>('optional');
  const [isAgrobonusUser, setIsAgrobonusUser] = useState(false);
  const contextData: any = useContext(AgrobonusContext);

  useEffect(() => {
    if (contextData.bankDetails) {
      form.setFieldsValue({
        bankName: contextData.bankDetails.bankName,
      });
      form.setFieldsValue({
        bankAccountNumber: contextData.bankDetails.bankAccountNumber,
      });
      form.setFieldsValue({
        bankAccount: contextData.bankDetails.bankAccount,
      });
      form.setFieldsValue({
        bankIdentifierCode: contextData.bankDetails.bankIdentifierCode,
      });
    }
    if (location.pathname.includes('agrobonus-program')) {
      setIsAgrobonusUser(true);
    }
  }, []);

  const handleNextClick = () => {
    let bankDetails: IBankDeatils = {
      bankName: form.getFieldValue('bankName'),
      bankAccountNumber: form.getFieldValue('bankAccountNumber'),
      bankAccount: form.getFieldValue('bankAccount'),
      bankIdentifierCode: form.getFieldValue('bankIdentifierCode'),
    };
    props.handleContinueClick(bankDetails);
  };

  const handlePreviousClick = () => {
    if (isAgrobonusUser) {
      props.handlePreviousClick();
    } else {
      history.push(RoutePaths.PRODUCTS_PAGE());
    }
  };

  const enableSubmitButton = (form): boolean => {
    return !form.getFieldValue('bankName') ||
      !form.getFieldValue('bankAccount') ||
      !form.getFieldValue('bankAccountNumber') ||
      !form.getFieldValue('bankIdentifierCode') ||
      form.getFieldsError().filter(({ errors }) => errors.length).length
      ? true
      : false;
  };
  const onFinish = (values) => {
    handleNextClick();
  };

  return (
    <>
      <Row justify="center" className="d-flex">
        <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
          <Form
            form={form}
            name="control-hooks"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ requiredMark }}
          >
            <p className="text-center bold-text lg-size-text">
              {t('Your bank details are required to make a payout')}
            </p>
            <Form.Item
              name="bankName"
              label={t('Bank Name')}
              rules={[
                { required: true },
                { message: t('Please enter Bank Name') },
                {
                  min: 5,
                  message: t('Bank Name must be at least 5 characters long'),
                },
                {
                  max: 50,
                  message: t('Bank Name cannot be longer than 50 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                autoFocus={true}
                data-testid="inputId"
                id="bankName"
                name="bankName"
                onChange={(e) => form.setFieldsValue({ bankName: e.target.value })}
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter bank name')}
              />
            </Form.Item>

            <Form.Item
              name="bankAccountNumber"
              label={t('Bank Account Number')}
              rules={[
                { required: true },
                { message: t('Please enter Bank Account Number') },
                {
                  min: 5,
                  message: t('Bank Account Number must be at least 5 characters long'),
                },
                {
                  max: 20,
                  message: t('Bank Account Number cannot be longer than 20 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="bankAccountNumber"
                name="bankAccountNumber"
                autoCorrect="off"
                onChange={(e) => form.setFieldsValue({ bankAccountNumber: e.target.value })}
                autoCapitalize="off"
                placeholder={t('Enter account number')}
              />
            </Form.Item>
            <Form.Item
              name="bankAccount"
              label={t('Account In Central Bank')}
              rules={[
                { required: true },
                { message: t('Please enter Account In Central Bank') },
                {
                  min: 5,
                  message: t('Account In Central Bank must be at least 5 characters long'),
                },
                {
                  max: 50,
                  message: t('Account In Central Bank cannot be longer than 50 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="bankAccount"
                name="bankAccount"
                autoCorrect="off"
                onChange={(e) => form.setFieldsValue({ backAccount: e.target.value })}
                autoCapitalize="off"
                placeholder={t('Enter account')}
              />
            </Form.Item>

            <Form.Item
              name="bankIdentifierCode"
              label="Bank Identifier Code (BIC)"
              rules={[
                { required: true },
                { message: t('Please enter Bank Identifier Code (BIC)') },
                {
                  min: 8,
                  message: t('Bank Identifier Code (BIC) must be at least 8 characters long'),
                },
                {
                  max: 12,
                  message: t('Bank Identifier Code (BIC) cannot be longer than 12 characters.'),
                },
              ]}
            >
              <Input
                className="product-input"
                data-testid="inputId"
                id="bankIdentifierCode"
                name="bankIdentifierCode"
                onChange={(e) => form.setFieldsValue({ bankIdentifierCode: e.target.value })}
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={t('Enter BIC')}
              />
            </Form.Item>

            <Form.Item shouldUpdate>
              {() => (
                <RPPButtonSection className="sm-d-block bank-form-btn">
                  <CancelButton
                    className="product-btn"
                    type="default"
                    data-testid="previous"
                    onClick={() => handlePreviousClick()}
                  >
                    {t('Previous')}
                  </CancelButton>
                  <StyledButton
                    data-testid="continue"
                    className="btn-green product-btn"
                    type="primary"
                    htmlType="submit"
                    // onClick={() => handleNextClick()}
                    disabled={enableSubmitButton(form)}
                  >
                    {t('Confirm & Continue')}
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
