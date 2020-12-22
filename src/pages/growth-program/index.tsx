import { Col, Row, Steps } from 'antd';
import { TitleBar } from 'components/title-bar';
import { IGrowthProgramInfo } from 'pages/signup/models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { INavigationRouteProps } from '../../core/navigation/models';
import { BankingDetails } from '../products/partial/bankingDetails';
import { ConfirmEnrollment } from '../products/partial/confirmEnrollment';
import { TINDetails } from '../products/partial/tinDetails';
import './style.less';

const { Step } = Steps;
interface IGrowthExtraProps {}

// tslint:disable-next-line:no-big-function

export const GrowthProgram = (
  props: INavigationRouteProps<IGrowthProgramInfo> & IGrowthExtraProps
) => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const handleBankPreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };
  const handleBankContinueClick = () => {
    let currentStep = current;
    setCurrent(++currentStep);
  };

  const handleTINContinueClick = () => {
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
  };
  const handleAreementPreviousClick = () => {
    let currentStep = current;
    setCurrent(--currentStep);
  };
  return (
    <>
      <div className="block-center">
        <Row>
          <Col>
            {current === 0 ? (
              <TitleBar className="header Signin-title text-center">
                {t('Welcome Don Jones, Lets start with the next step of contract agreement')}
              </TitleBar>
            ) : current === 2 ? (
              <TitleBar className="header Signin-title text-center">
                {t('Contract agreement')}
              </TitleBar>
            ) : (
              ''
            )}

            <Steps size="small" current={current}>
              <Step title={t('Bank Details')} />
              <Step title={t('TIN Details')} />
              <Step title={t('Confirm Enrollment')} />
            </Steps>
            {current === 0 ? (
              <BankingDetails
                handlePreviousClick={handleBankPreviousClick}
                handleContinueClick={handleBankContinueClick}
              />
            ) : current === 1 ? (
              <TINDetails
                handlePreviousClick={handleTINPreviousClick}
                handleContinueClick={handleTINContinueClick}
              />
            ) : (
              <ConfirmEnrollment
                handlePreviousClick={handleAreementPreviousClick}
                handleContinueClick={handleAreementContinueClick}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
