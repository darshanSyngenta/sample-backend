import { Form } from 'antd';
import { Auth } from 'aws-amplify';
import { Button, CancelButton } from 'components/button';
import { ErrorMessage } from 'components/error-message';
import { ErrorModal } from 'components/error-modal';
import { FontIcon } from 'components/icon-component';
import { Input } from 'components/input';
import { Layout } from 'components/layout';
import { WarningBalloon } from 'components/warning-balloon';
import { history, RoutePaths } from 'core/history';
import { iff } from 'core/iff';
import { INavigationRouteProps } from 'core/navigation/models';
import { AppConstants } from 'core/utils/app.constants';
import get from 'lodash/get';
import { ChangePassword } from 'pages/change-password/ChangePassword';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './RecoveryPassword.less';

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
interface IRecoveryPassword {
  email: string;
}

export const RecoveryPassword: React.FC<
  INavigationRouteProps<{
    email: string;
  }>
> = (props) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showRecoveryPassword, setShowRecoveryPassword] = useState(true);
  const [showChangePaasword, setShowChangePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userEmail, setUserEmail] = useState("");
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onRecoveryPasswordFinish = async ({ email }: IRecoveryPassword) => {
    setShowSuccessMsg(true);
    setUserEmail(email);
    try {
      const forgotResponse = await Auth.forgotPassword(email);
      if (forgotResponse) {
        setShowRecoveryPassword(false);
        setShowSuccessMsg(false);
        setShowChangePassword(true);
      }
    } catch (ex) {
      setErrorMessage(ex.message || ex);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.value === '') {
      setEmailError(t('email cannot be empty'));
      return;
    }
    AppConstants.VALIDATIONS.EMAIL_REGEX.test(e.target.value)
      ? setEmailError('')
      : setEmailError(t('Please enter valid email'));
  };

  const renderRecoveryPasswordTemplate = () => {
    return (
      <div className="RecoveryPasswordPageSection">
        <h4 className="RPPTitle header">{t('Recover your password')}</h4>
        <label className="RPPText">{t('Enter your email below.')}</label>
        <label className="RPPText" style={{ marginBottom: '24px' }}>
          {t('We will send you a link to reset your password.')}
        </label>
        <ErrorModal
          visible={!!errorMessage}
          message={errorMessage}
          okText={t('Ok')}
          onOk={() => {
            setErrorMessage('');
          }}
        />
        <Form
          form={form}
          name="control-hooks"
          initialValues={{ email: get(props, 'location.state.email') }}
          onFinish={onRecoveryPasswordFinish}
        >
          <Form.Item name="email">
            <Input
              data-testid="inputId"
              id="email"
              name="email"
              type="primary"
              autoCorrect="off"
              autoCapitalize="off"
              value={form.getFieldValue('email')}
              onChange={(e) => {
                form.setFieldsValue({ email: e.target.value });
                handleChange(e);
              }}
              autoComplete="off"
              onKeyPress={(event) => {
                if (event.charCode === 32) {
                  event.preventDefault();
                }
              }}
              placeholder={t('Enter your e-mail or login')}
              autoFocus={true}
              maxLength={AppConstants.EMAIL_MAX_LENGTH}
              className="syngenta-ant-form-input reset-pwd-input"
            />
          </Form.Item>
          <ErrorMessage>{emailError}</ErrorMessage>

          <Form.Item shouldUpdate>
            {() => (
              <RPPButtonSection>
                <CancelButton
                  type="default"
                  data-testid="cancel"
                  onClick={() => {
                    history.push(RoutePaths.HOME());
                  }}
                >
                  {t('Cancel')}
                </CancelButton>
                <StyledButton
                  style={{ marginBottom: '24px' }}
                  data-testid="send"
                  className="btn-green"
                  type="btnGreen"
                  htmlType="submit"
                  disabled={form.getFieldValue('email') && emailError.length === 0 ? false : true}
                >
                  {t('Send')}
                </StyledButton>
              </RPPButtonSection>
            )}
          </Form.Item>
          {showSuccessMsg && form.setFieldsValue({ email: '' })}
        </Form>
      </div>
    );
  };

  return (
    <Layout type="default" isLogin={false} showLoginLink={false} showWelcomeScreen={true}>
      {showRecoveryPassword && renderRecoveryPasswordTemplate()}
      {iff(
        showSuccessMsg,
        <WarningBalloon className="warning-msg">
          <div className="box">
            <FontIcon name="lamp" />
            {/* <WarningBalloonImage src={LampImg} /> */}
            <label>{t('A message has been sent to your email. Please check your inbox.')}</label>
          </div>
        </WarningBalloon>
      )}
      {iff(showChangePaasword, <ChangePassword userEmail={userEmail} />)}
    </Layout>
  );
};
