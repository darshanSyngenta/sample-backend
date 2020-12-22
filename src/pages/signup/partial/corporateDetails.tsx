import { Form } from 'antd';
import { Button, CancelButton } from 'components/button';
import { InputPasswordProgress } from 'components/input-password-progress';
import { PhoneInputBox } from 'components/phone-input-box';
import get from 'lodash/get';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Input } from '../../../components/input';
import { SignupContext } from '../../../context/signUp';
const MAX_PASSWORD_PROGRESS_LIMIT = 100;

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
export interface ICorporateDetails {
  userName: string;
  email: any;
  mobileNumber?: string;
  password: string;
}
export const CorporateDetails = (props: any) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<boolean | 'optional'>('optional');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const contextData: any = useContext(SignupContext);

  useEffect(() => {
    if (contextData.corporateFormValues) {
      form.setFieldsValue({
        userName: contextData.corporateFormValues.userName,
      });
      form.setFieldsValue({
        email: contextData.corporateFormValues.email,
      });
      form.setFieldsValue({
        mobileNumber: contextData.corporateFormValues.mobileNumber,
      });
    }
  }, []);

  const handleContinueClick = () => {
    let corporateDetails: ICorporateDetails = {
      userName: form.getFieldValue('userName'),
      email: form.getFieldValue('email'),
      mobileNumber: form.getFieldValue('mobileNumber'),
      password: form.getFieldValue('password'),
    };
    props.handleContinueClick(corporateDetails);
  };

  const handlePreviousClick = () => {
    props.handlePreviousClick();
  };

  return (
    <>
      <Form form={form} layout="vertical" initialValues={{ requiredMark }}>
        <Form.Item
          name="userName"
          label="Your name"
          rules={[
            { required: true },
            { message: t('Please enter your name.') },
            {
              max: 50,
              message: t('User name cannot be longer than 50 characters.'),
            },
          ]}
        >
          <Input
            style={{ marginBottom: '10px' }}
            autoFocus={true}
            data-testid="inputId"
            id="userName"
            name="userName"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder={t('Enter your name')}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true },
            {
              type: 'email',
              message: t('Please enter a valid email address.'),
            },
            {
              message: t('Please input your E-mail!'),
            },
          ]}
          label="Your email"
        >
          <Input
            style={{ marginBottom: 15 }}
            data-testid="inputId"
            id="email"
            name="email"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder={t('Enter your email')}
          />
        </Form.Item>
        <Form.Item label="Mobile number" name={['mobileNumber']}>
          <PhoneInputBox
            data-testid="inputId"
            // @ts-ignore
            name="mobileNumber"
          />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true }]}>
          <InputPasswordProgress
            label="Password"
            data-testid="inputId"
            // @ts-ignore
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={(pass, progress) => {
              setIsPasswordValid(progress >= MAX_PASSWORD_PROGRESS_LIMIT);
            }}
            onKeyPress={(e: any) => e.charCode === 32 && e.preventDefault()}
            tabIndex={2}
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <RPPButtonSection>
              <CancelButton
                style={{ marginTop: 24, marginBottom: 24 }}
                type="default"
                data-testid="previous"
                onClick={() => handlePreviousClick()}
              >
                {t('Previous')}
              </CancelButton>
              <StyledButton
                style={{ marginTop: 24, marginBottom: 24 }}
                data-testid="continue"
                className="btn-green"
                type="btnGreen"
                htmlType="submit"
                disabled={
                  !(
                    form.getFieldError('userName')[0] === undefined &&
                    form.getFieldValue('userName') &&
                    isPasswordValid &&
                    form.getFieldValue('email') &&
                    form.getFieldError('email')[0] === undefined
                  )
                }
                onClick={() => handleContinueClick()}
              >
                {t('Continue')}
              </StyledButton>
            </RPPButtonSection>
          )}
        </Form.Item>
      </Form>
    </>
  );
};
