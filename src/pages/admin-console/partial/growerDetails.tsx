//import { Col, Row } from 'antd';
import { Card, Descriptions } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style.less';

// tslint:disable-next-line:no-big-function

export const GrowerDetail = () => {
  const { t } = useTranslation();

  return (
    <>
      <>
        <Card className="card-bg">
          <Descriptions layout="vertical" bordered column={4}>
            <Descriptions.Item
              label={t('Name')}
              contentStyle={{
                background: '#f3f4f6',
                border: '1px solid #c2c7d0',
                boxSizing: 'border-box',
                borderRadius: 4,
              }}
            >
              {t('Vaibhav Warke')}
            </Descriptions.Item>
            <Descriptions.Item label={t('Email')}>{t('vaibhav123@gmail.com')}</Descriptions.Item>
            <Descriptions.Item label={t('Tax ID')}>{t('678  900 679')}</Descriptions.Item>
            <Descriptions.Item label={t('Globus Email')}>
              {t('vaibhav789@gmail.com')}
            </Descriptions.Item>
            <Descriptions.Item label={t('Reward Points')}>{t('5480')}</Descriptions.Item>
            <Descriptions.Item label={t('Invoice Value')}>{t('4590')}</Descriptions.Item>
            <Descriptions.Item label={t('Program Name')}>{t('Agro Bonus')}</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card className="card-bg ">{t('Admin Action')}</Card>
      </>
    </>
  );
};
