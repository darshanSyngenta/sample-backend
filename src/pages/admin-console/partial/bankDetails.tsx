//import { Col, Row } from 'antd';
import { Card } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style.less';

// tslint:disable-next-line:no-big-function

export const BankDetail = () => {
  const { t } = useTranslation();

  return (
    <>
      <>
        <Card className="card-bg"> {t('Content of Bank Details')}</Card>
      </>
    </>
  );
};
