import { Steps } from 'antd';
import { Auth } from 'aws-amplify';
import { ErrorModal } from 'components/error-modal';
import { Layout } from 'components/layout';
import { TitleBar } from 'components/title-bar';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SignUpProvider } from '../../context/signUp';
import { INavigationRouteProps } from '../../core/navigation/models';
import { ISignupUserInfo } from './models';
import { CorporateDetails, ICorporateDetails } from './partial/corporateDetails';
import { IOrganizationDetails, Organization } from './partial/organization';
import { SuccessPage } from './partial/successPage';
import { ITermsAndService, TermsAndService } from './partial/termsAndService';
import './signup.less';

const { Step } = Steps;
// const { Provider } = SignupContext;
interface ISignupStep2ExtraProps {
  // performLogin: (authTokenRequestDTO: IAuthTokenRequestDTO) => Promise<{}>;
  // performSignUp: (accountSignupDTO: IAccountSignupDTO) => Promise<{}>;
}

export const Signup = (props: INavigationRouteProps<ISignupUserInfo> & ISignupStep2ExtraProps) => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [organizationFormValues, setOrganizationFormValues] = useState<IOrganizationDetails | null>(
    null
  );
  const [corporateFormValues, setCorporateFormValues] = useState<ICorporateDetails | null>(null);
  const [
    termsAndServiceFormValues,
    setTermsAndServiceFormValues,
  ] = useState<ITermsAndService | null>(null);

  const [errorMessage, setErrorMessage] = useState('');

  const handleOrgContinueClick = (formValues: IOrganizationDetails) => {
    setOrganizationFormValues(formValues);
    setCurrent(1);
  };
  const handleCorpContinueClick = (formValues: ICorporateDetails) => {
    setCorporateFormValues(formValues);
    setCurrent(2);
  };
  const handleTermsContinueClick = async (formValues: ITermsAndService) => {
    setTermsAndServiceFormValues(formValues);
    try {
      await Auth.signUp({
        username: corporateFormValues?.email,
        password: corporateFormValues?.password || '',
        attributes: {
          email: corporateFormValues?.email,
          name: corporateFormValues?.userName,
          phone_number: `+${(corporateFormValues?.mobileNumber || '').replace(/[- )(+]/g, '')}`,
          'custom:taxid': organizationFormValues?.taxPayerNumber,
          'custom:accept_terms': String(formValues?.isChecked),
          'custom:confirm_wheat_15per': String(organizationFormValues?.isChecked),
          'custom:attachment_keys': organizationFormValues?.attachment_keys,
        },
      });
      setCurrent(3);
    } catch (ex) {
      setErrorMessage(ex.message || ex);
      console.log('exception while signup', ex);
    }
  };

  const handlePreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };

  return (
    <>
      {current === 3 ? (
        <Layout type="default" isLogin={true} showWelcomeScreen={true} showLoginLink={false}>
          <>
            <TitleBar style={{ textAlign: 'center' }} className="header Signin-title">
              Create your cropwise account
            </TitleBar>
            <Steps size="small" current={current}>
              <Step title={t('Organisation')} />
              <Step title={t('My Account')} />
              <Step title={t('Terms of Service')} />
            </Steps>
            <SuccessPage />
          </>
        </Layout>
      ) : (
        <Layout type="default" isLogin={true} showWelcomeScreen={true}>
          <>
            <TitleBar style={{ textAlign: 'center' }} className="header Signin-title">
              Create your cropwise account
            </TitleBar>
            <Steps size="small" current={current}>
              <Step title={t('Organisation')} />
              <Step title={t('My Account')} />
              <Step title={t('Terms of Service')} />
            </Steps>
            <SignUpProvider
              organizationFormValues={organizationFormValues}
              corporateFormValues={corporateFormValues}
            >
              {current === 0 ? (
                <Organization handleContinueClick={handleOrgContinueClick} />
              ) : current === 1 ? (
                <CorporateDetails
                  handlePreviousClick={handlePreviousClick}
                  handleContinueClick={handleCorpContinueClick}
                />
              ) : (
                <TermsAndService
                  handlePreviousClick={handlePreviousClick}
                  handleContinueClick={handleTermsContinueClick}
                />
              )}
            </SignUpProvider>
          </>
          <ErrorModal
            visible={!!errorMessage}
            message={errorMessage}
            okText={t('Ok')}
            onOk={() => {
              setErrorMessage('');
            }}
          />
        </Layout>
      )}
    </>
  );
};
