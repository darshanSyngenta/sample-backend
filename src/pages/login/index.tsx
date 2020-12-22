import { Form } from 'antd';
import { Auth } from 'aws-amplify';
import { AnchorLink } from 'components/anchor-link';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { ErrorModal } from 'components/error-modal';
import { FontIcon } from 'components/icon-component';
import { Input } from 'components/input';
import { InputPassword } from 'components/input-password';
import { Label } from 'components/label';
import { Layout } from 'components/layout';
import { SigninRectangleArrowIcon } from 'components/rectangle-focus-icon';
import { TitleBar } from 'components/title-bar';
import { history, navigateTo, RoutePaths } from 'core/history';
import { AppConstants } from 'core/utils/app.constants';
import React, { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import './index.less';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginComponent: FC<RouteComponentProps> = (): ReactElement => {
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleLoginSubmit = async ({ email, password }: ILoginForm) => {
    try {
      setIsButtonLoading(true);
      await Auth.signIn(email, password);
      setIsButtonLoading(false);
      navigateTo(RoutePaths.PRODUCTS_PAGE());
    } catch (ex) {
      setIsButtonLoading(false);
      setErrorMessage(ex.message || ex);
    }
  };

  const [form] = Form.useForm();

  return (
    <Layout type="default" isLogin={false} showWelcomeScreen={true}>
      <Form form={form} name="control-hooks" onFinish={handleLoginSubmit}>
        <TitleBar style={{ textAlign: 'center' }} className="header Signin-title">
          {t('Sign in to Cropwise')}
        </TitleBar>
        <ErrorModal
          visible={!!errorMessage}
          message={errorMessage}
          okText={t('Ok')}
          onOk={() => {
            setErrorMessage('');
            form.resetFields();
          }}
        />
        <SigninRectangleArrowIcon>
          <FontIcon color={''} size={57} name="signin-rect" />
        </SigninRectangleArrowIcon>

        <Label data-testid="label" className="form-label">
          {t('Email or login')}
        </Label>
        <Form.Item name="email">
          <Input
            data-testid="inputId"
            id="email"
            name="email"
            type="primary"
            autoCorrect="off"
            autoCapitalize="off"
            value={form.getFieldValue('email')}
            onChange={(e) => form.setFieldsValue({ email: e.target.value })}
            autoComplete="off"
            onKeyPress={(event) => {
              if (event.charCode === 32) {
                event.preventDefault();
              }
            }}
            placeholder={t('Enter your e-mail or login')}
            autoFocus={true}
            maxLength={AppConstants.EMAIL_MAX_LENGTH}
            className="syngenta-ant-form-input"
          />
        </Form.Item>

        <Label className="form-label">{t('Password')}</Label>
        <Form.Item name="password">
          <InputPassword
            id="password"
            name="password"
            value={form.getFieldValue('password')}
            type="password"
            autoComplete="off"
            onChange={(e) => form.setFieldsValue({ password: e.target.value })}
            onKeyPress={(event) => {
              if (event.charCode === 32) {
                event.preventDefault();
              }
            }}
            placeholder={t('Enter a password')}
            onKeyDown={() => form.isFieldTouched('password')}
            maxLength={AppConstants.PASSWORD_MAX_LENGTH}
            className="signin-pwd signin-pwd-form "
          />
        </Form.Item>
        <div className="login-checkbox" style={{ textAlign: 'right' }}>
          <AnchorLink
            onClick={() =>
              history.push({
                pathname: RoutePaths.RECOVERY_PASSWORD(),
              })
            }
          >
            {t('Oh no, I forgot my password')}
          </AnchorLink>
        </div>

        <Form.Item shouldUpdate>
          {() => (
            <div className="login-form-bottom-section">
              <div className="login-signin-button" style={{ padding: '24px 0' }}>
                <Checkbox className="login-form-keep-loggedIn">{t('Keep me logged in')}</Checkbox>
                <Button
                  type="btnGreen"
                  className="btn-green signin-btn"
                  htmlType="submit"
                  disabled={
                    form.getFieldValue('email') && form.getFieldValue('password') ? false : true
                  }
                >
                  {t('Sign in')}
                </Button>
              </div>
            </div>
          )}
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LoginComponent;
