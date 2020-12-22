import { Col, Row, Steps } from 'antd';
import { CancelButton } from 'components/button';
import { TitleBar } from 'components/title-bar';
import { history, RoutePaths } from 'core/history';
import { IAgroBonusProgramInfo } from 'pages/signup/models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Result } from 'syngenta-digital-cropwise-react-ui-kit';
import { AgrobonusProvider } from '../../context/AgroBonusProgramContext';
import { INavigationRouteProps } from '../../core/navigation/models';
import { BankingDetails, IBankDeatils } from '../products/partial/bankingDetails';
import { ContractAgreement } from '../products/partial/contractAgreement';
import { HedgingLevel } from '../products/partial/hedgingLevel';
import { ITINDeatils, TINDetails } from '../products/partial/tinDetails';
import './style.less';

const { Step } = Steps;
interface IAgrobonusExtraProps {}

// tslint:disable-next-line:no-big-function
const RPPButtonSection = styled.div`
  display: flex;
`;
export const AgrobonusProgram = (
  props: INavigationRouteProps<IAgroBonusProgramInfo> & IAgrobonusExtraProps
) => {
  const { t } = useTranslation();
  let { points } = useParams();
  const [current, setCurrent] = useState(0);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [bankFormValues, setBankFormValues] = useState<IBankDeatils | null>(null);
  const [tinFormValues, setTINFormValues] = useState<ITINDeatils | null>(null);

  const handleHedgingContinueClick = () => {
    let currentStep = current;
    setCurrent(++currentStep);
  };
  const handleBankPreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };
  const handleBankContinueClick = (formValues: IBankDeatils) => {
    setBankFormValues(formValues);
    let currentStep = current;
    setCurrent(++currentStep);
  };

  const handleTINContinueClick = (formValues: ITINDeatils) => {
    setTINFormValues(formValues);
    let currentStep = current;
    setCurrent(++currentStep);
  };

  const handleTINPreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };
  const handleAreementContinueClick = () => {
    let currentStep = current;
    setCurrent(++currentStep);
    setIsSuccessModal(true);
  };
  const handleAreementPreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };
  const handleTINSaveClick = (formValues: ITINDeatils) => {
    setTINFormValues(formValues);
  };

  return (
    <>
      {!isSuccessModal ? (
        <Row>
          <Col span={18} offset={3}>
            {current === 0 ? (
              <TitleBar className="header Signin-title text-center">
                {t(`Choose a Level of Protection (You have ${parseInt(points)} Points)`)}
              </TitleBar>
            ) : current === 3 ? (
              <TitleBar className="header Signin-title text-center">
                {t('Contract agreement')}
              </TitleBar>
            ) : (
              ''
            )}

            <Steps size="small" current={current}>
              <Step title={t('Hedging Level')} />
              <Step title={t('Bank Details')} />
              <Step title={t('TIN Details')} />
              <Step title={t('Contact Agreement')} />
            </Steps>
            <AgrobonusProvider bankDetails={bankFormValues} tinDetails={tinFormValues}>
              {current === 0 ? (
                <HedgingLevel handleContinueClick={handleHedgingContinueClick} />
              ) : current === 1 ? (
                <BankingDetails
                  handlePreviousClick={handleBankPreviousClick}
                  handleContinueClick={handleBankContinueClick}
                />
              ) : current === 2 ? (
                <TINDetails
                  handlePreviousClick={handleTINPreviousClick}
                  handleContinueClick={handleTINContinueClick}
                  handleTINSaveClick={handleTINSaveClick}
                />
              ) :  (
                <ContractAgreement
                  handlePreviousClick={handleAreementPreviousClick}
                  handleContinueClick={handleAreementContinueClick}
                />
              )}
            </AgrobonusProvider>
          </Col>
        </Row>
      ) : (
        <Row justify="center" className="d-flex">
          <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
            <Result
              status="success"
              title={t('Successfully Submitted')}
              subTitle={t(
                'Your application has been submitted successfully to admin for validation'
              )}
              extra={[
                <RPPButtonSection>
                  <CancelButton
                    type="default"
                    data-testid="close"
                    onClick={() => history.push(RoutePaths.PRODUCTS_PAGE())}
                  >
                    {t('Close')}
                  </CancelButton>
                </RPPButtonSection>,
              ]}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
