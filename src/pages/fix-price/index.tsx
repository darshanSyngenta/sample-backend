import { Card, Col, Row } from 'antd';
import { Button } from 'components/button';
import { history, RoutePaths } from 'core/history';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'syngenta-digital-cropwise-react-ui-kit';
import './styles.less';

export const FixPrice = (props) => {
  const { t } = useTranslation();

  const columns = [
    {
      dataIndex: 'country',
      key: 'country',
      title: t('Country'),
    },
    {
      dataIndex: 'holiday',
      key: 'holiday',
      title: t('Holiday'),
    },
    {
      dataIndex: 'date',
      key: 'date',
      title: t('Date'),
    },
    {
      dataIndex: 'day',
      key: 'day',
      title: t('Day'),
    },
    {
      dataIndex: 'comments',
      key: 'comments',
      title: t('Comments'),
    },
  ];

  const dataSource = [
    {
      country: 'EURONEXT, Russia',
      holiday: "New Years's Day",
      date: 'Jan 01 2021',
      day: 'Friday',
      key: 'Full Day Off',
      comments: 'coments',
    },
  ];

  return (
    <>
      <div className="price-fix">
        <Row>
          <Col>
            <Card className="productCard">
              <p>
                {' '}
                <span className="fw-6">Latest Price (EUR):</span>
                <span className="price-tag">{t(' 186.25')}</span>
              </p>
              <p>
                {' '}
                <span className="fw-6">CET:</span>
                {t(' 11/8/2020  11 26 AM')}
              </p>
            </Card>
          </Col>
          <Col className="mt-auto ml-15 mb-10">
            <p>
              {' '}
              <span className="fw-6">Previous Price (EUR):</span> {t(' 187.25')}
            </p>
            <p>
              {' '}
              <span className="fw-6">CET:</span> {t(' 10/8/2020')}
            </p>
          </Col>
          <Button type="primary" title="confirm"
           className="ml-auto"
           onClick={() => history.push(RoutePaths.BONUS_SETTLEMENT_OPTION())}
           >
            {t('FIX PRICE NOW')}
          </Button>
          <Col span={24}>
            <Card className="productCard">
              <p className="trade-time fw-6">
                {t('Trading Hours from 10 to 18pm, delayed price by 15 min')}
              </p>
            </Card>
          </Col>

          <Col span={24}>
            {' '}
            <Table
              bordered
              className="syn-table-head"
              columns={columns}
              dataSource={dataSource}
              expandable={{
                expandedRowRender: function noRefCheck() {},
                rowExpandable: function noRefCheck() {},
              }}
              pagination={{
                pageSize: 10,
                hideOnSinglePage: true,
              }}
              showSorterTooltip
              size="default"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FixPrice;
