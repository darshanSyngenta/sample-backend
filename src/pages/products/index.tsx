import { Col, Row } from 'antd';
import { history, RoutePaths } from 'core/history';
import React from 'react';
import { useTranslation } from 'react-i18next';
import growthLogo from '../../assets/images/growth_logo.svg';
import logoAgrobonus from '../../assets/images/logo_agrobonus.png';
import { ProgramTemplate } from '../../components/program-template';
import './style.less';

export const ProductsPage: React.FC<{}> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-center bold-text lg-size-text card-title">{t('Choose a Program')}</p>
      <div className="product-card justify-center">
        <Row gutter={[40, 40]}>
          <Col xs={24} md={12} lg={12}>
            <ProgramTemplate
              headerOnClick={() => {
                history.push(RoutePaths.AGROBONUSPROGRAM('285000'));
              }}
              description={t('Description')}
              icon={logoAgrobonus}
              validityPeriod="1-11-2020 to 2-2-2021"
              minimumEligibilityPeriod="285000"
              yourPoints={285000}
              buttonText={t('Program Overview')}
              header={t('AgrobonusProgram ')}
            />
          </Col>
          <Col xs={24} md={12} lg={12}>
            <ProgramTemplate
              headerOnClick={() => {
                history.push(RoutePaths.GROWTHPROGRAM());
              }}
              title="growth"
              description={t('Description')}
              icon={growthLogo}
              validityPeriod="1-11-2020 to 2-2-2021"
              minimumEligibilityPeriod="285000"
              buttonText={t('Program Overview')}
              header={t('Growth Program')}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
