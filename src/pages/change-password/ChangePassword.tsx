import { Form } from 'antd';
import { Auth } from 'aws-amplify';
import { Button, CancelButton } from 'components/button';
import { ErrorModal } from 'components/error-modal';
import { Input } from 'components/input';
import { history, RoutePaths } from 'core/history';
import { AppConstants } from 'core/utils/app.constants';
import get from 'lodash/get';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { InputPasswordProgress } from '../../../src/components/input-password-progress';
import { Label } from '../../../src/components/label';
import './ChangePassword.less';

export const StyledButton = styled(Button)<{ type: any }>`
  border-radius: 4px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  margin: 0 0 0 20px;
  line-height: 20px;
  @media (min-width: 1024px) and (max-width: 1365px) {
    width: 100%;
  }
`;

const RPPButtonSection = styled.div`
  display: flex;
`;

export const PasswordContainerStyled = styled.div`
  margin: 2em 0 auto;
  height: 75px;
`;

interface IChangePassword {
  verificationcode: string;
  password: string;
}

interface IChangePasswordProps {
  userEmail: string;
}

const ChangePassword = ({ userEmail }: IChangePasswordProps) => {
  const { t } = useTranslation();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [form] = Form.useForm();

  const onFinish = async ({ verificationcode, password }: IChangePassword) => {
    try {
      const forgotResponse = await Auth.forgotPasswordSubmit(userEmail, verificationcode, password);
    } catch (ex) {
      setErrorMessage(ex.message || ex);
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
          form.resetFields();
        }}
      />
      <div className="RecoveryPasswordPageSection">
        <h4 className="RPPTitle header">{t('Hi User,')}</h4>
        <label className="RPPText" style={{ marginBottom: '24px' }}>
          {t('Enter an OTP & New Password')}
        </label>

        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="verificationcode">
            <Label data-testid="label" className="form-label">
              {t('OTP')}
            </Label>
            <Input
              data-testid="inputId"
              id="verificationcode"
              name="verificationcode"
              type="primary"
              autoCorrect="off"
              autoCapitalize="off"
              value={form.getFieldValue('verificationcode')}
              onChange={(e) => {
                form.setFieldsValue({ verificationcode: e.target.value });
              }}
              autoComplete="off"
              onKeyPress={(event) => {
                if (
                  (event.charCode === 32 || event.charCode < 48 || event.charCode > 57) &&
                  event.charCode !== 8
                ) {
                  event.preventDefault();
                }
              }}
              placeholder={t('Enter an OTP')}
              autoFocus={true}
              maxLength={AppConstants.OTP_MAX_LENGTH}
              className="syngenta-ant-form-input"
            />
          </Form.Item>
          <Form.Item name="password">
            <InputPasswordProgress
              onChange={(value, progress) => {
                setIsPasswordValid(progress >= AppConstants.MAX_PASSWORD_PROGRESS_LIMIT);
                form.setFieldsValue({ password: value });
              }}
              label="Password"
              value={form.getFieldValue('password')}
              placeholder={t('Enter new Password')}
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <RPPButtonSection>
                <CancelButton
                  style={{ marginTop: '24px' }}
                  type="default"
                  data-testid="cancel"
                  onClick={() => {
                    history.push(RoutePaths.HOME());
                  }}
                >
                  {t('Cancel')}
                </CancelButton>
                <StyledButton
                  style={{ marginTop: '24px' }}
                  data-testid="send"
                  className="btn-green"
                  type="btnGreen"
                  htmlType="submit"
                  disabled={
                    form.getFieldValue('verificationcode') && isPasswordValid ? false : true
                  }
                >
                  {t('Change Password')}
                </StyledButton>
              </RPPButtonSection>
            )}
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export { ChangePassword };
