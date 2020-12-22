import { Col, Row } from 'antd';
import { CancelButton } from 'components/button';
import { ProgramTemplate } from 'components/program-template';
import { history, RoutePaths } from 'core/history';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Result } from 'syngenta-digital-cropwise-react-ui-kit';
import './style.less';

const RPPButtonSection = styled.div`
  display: flex;
`;

export const BonusSettlementOption: React.FC<{}> = (props) => {
  const { t } = useTranslation();
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  return (
    <>
      {!isSuccessModal ? (
        <>
          <p className="text-center bold-text lg-size-text card-title">{t('Choose a Program')}</p>
          <div className="product-card justify-center">
            <Row gutter={[40, 40]}>
              <Col xs={24} md={12} lg={12}>
                <ProgramTemplate
                  headerOnClick={() => {
                    history.push(RoutePaths.CLASSIC());
                  }}
                  description={t('Description')}
                  buttonText={t('Confirm')}
                  buttonOnClick={() => console.log('test')}
                  header={t('Classic')}
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <ProgramTemplate
                  description={t('Description')}
                  buttonText={t('Confirm')}
                  header={t(' Intervallic')}
                  buttonOnClick={() =>setIsSuccessModal(true)}
                  headerOnClick={() => {
                    history.push(RoutePaths.INTERVALLIC());
                  }}
                />
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <Row justify="center" className="d-flex">
          <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
            <Result
              
              title={t('Successfully Submitted')}
              // subTitle={t(
              //   'Your application has been submitted successfully to admin for validation'
              // )}
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
