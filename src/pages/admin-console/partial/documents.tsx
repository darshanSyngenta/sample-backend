//import { Col, Row } from 'antd';
import { Card, Collapse, Table, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style.less';

// tslint:disable-next-line:no-big-function
const { Panel } = Collapse;

export const Documents = () => {
  const { t } = useTranslation();

  const statisticalData = [
    {
      key: t('1'),
      name: t('SF 1.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('1 MB'),
    },
    {
      key: t('2'),
      name: t('SF 2.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('30 KB'),
    },
    {
      key: t('3'),
      name: t('SF 3.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('2 MB'),
    },
    {
      key: t('4'),
      name: t('SF 4.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('56 KB'),
    },
  ];

  const statisticalColumns = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: t('Submitted'),
      dataIndex: 'submitted',
      key: 'submitted',
      sorter: (a, b) => a.submitted.length - b.submitted.length,
      ellipsis: true,
    },
    {
      title: t('Review Status'),
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      sorter: (a, b) => a.reviewStatus.length - b.reviewStatus.length,
      ellipsis: true,
    },
    {
      title: t('Processed Date'),
      dataIndex: 'processedDate',
      key: 'processedDate',
      sorter: (a, b) => a.processedDate.length - b.processedDate.length,
      ellipsis: true,
    },
    {
      title: t('Size'),
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
    },
  ];

  const grnData = [
    {
      key: t('1'),
      name: t('SF 1.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('1 MB'),
      grnValue: t('1834210'),
      actions: t('action'),
    },
    {
      key: t('2'),
      name: t('SF 2.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('30 KB'),
      grnValue: t('1834210'),
      actions: t('action'),
    },
    {
      key: t('3'),
      name: t('SF 3.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('2 MB'),
      grnValue: t('1834210'),
      actions: t('action'),
    },
    {
      key: t('4'),
      name: t('SF 4.pdf'),
      submitted: t('14-Apr-21'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('56 KB'),
      grnValue: t('1834210'),
      actions: t('action'),
    },
  ];

  const grnColumns = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: t('Submitted'),
      dataIndex: 'submitted',
      key: 'submitted',
      sorter: (a, b) => a.submitted.length - b.submitted.length,
      ellipsis: true,
    },
    {
      title: t('Review Status'),
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      sorter: (a, b) => a.reviewStatus.length - b.reviewStatus.length,
      ellipsis: true,
    },
    {
      title: t('Processed Date'),
      dataIndex: 'processedDate',
      key: 'processedDate',
      sorter: (a, b) => a.processedDate.length - b.processedDate.length,
      ellipsis: true,
    },
    {
      title: t('Size'),
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
    },
    {
      title: t('Confirmed GRN Value (RUB)'),
      dataIndex: 'grnValue',
      key: 'grnValue',
      ellipsis: true,
    },
    {
      title: t('Actions'),
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
    },
  ];

  const bonusAgreementData = [
    {
      key: t('1'),
      name: t('SF 1.pdf'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('1 MB'),
    },
    {
      key: t('2'),
      name: t('SF 2.pdf'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('30 KB'),
    },
    {
      key: t('3'),
      name: t('SF 3.pdf'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('2 MB'),
    },
    {
      key: t('4'),
      name: t('SF 4.pdf'),
      reviewStatus: t('Pending'),
      processedDate: t('16-Apr-21'),
      size: t('56 KB'),
    },
  ];

  const bonusAgreementColumns = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: t('Review Status'),
      dataIndex: 'reviewStatus',
      key: 'reviewStatus',
      sorter: (a, b) => a.reviewStatus.length - b.reviewStatus.length,
      ellipsis: true,
    },
    {
      title: t('Processed Date'),
      dataIndex: 'processedDate',
      key: 'processedDate',
      sorter: (a, b) => a.processedDate.length - b.processedDate.length,
      ellipsis: true,
    },
    {
      title: t('Size'),
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
    },
  ];

  const tinDocumentsData = [
    {
      key: t('1'),
      name: t('SF 1.pdf'),
      submitted: t('14-Apr-21'),
      size: t('1 MB'),
    },
    {
      key: t('2'),
      name: t('SF 2.pdf'),
      submitted: t('14-Apr-21'),
      size: t('30 KB'),
    },
    {
      key: t('3'),
      name: t('SF 3.pdf'),
      submitted: t('14-Apr-21'),
      size: t('2 MB'),
    },
    {
      key: t('4'),
      name: t('SF 4.pdf'),
      submitted: t('14-Apr-21'),
      size: t('56 KB'),
    },
  ];

  const tinDocumentsColumns = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: t('Submitted'),
      dataIndex: 'submitted',
      key: 'submitted',
      sorter: (a, b) => a.submitted.length - b.submitted.length,
      ellipsis: true,
    },
    {
      title: t('Size'),
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
    },
  ];

  return (
    <>
      <>
        <Collapse accordion defaultActiveKey={['1']}>
          <Panel header={t('Statistical Form')} key="1">
            <Table columns={statisticalColumns} dataSource={statisticalData} pagination={false} />
          </Panel>
          <Panel header={t('GRN')} key="2">
            <Typography>{t(`Cumulative Invoice Value (approved) 5502630`)}</Typography>
            <Table columns={grnColumns} dataSource={grnData} pagination={false} />
          </Panel>
          <Panel header={t('Bonus Agreement')} key="3">
            <Table
              columns={bonusAgreementColumns}
              dataSource={bonusAgreementData}
              pagination={false}
            />
          </Panel>
          <Panel header={t('TIN Documents')} key="4">
            <Table columns={tinDocumentsColumns} dataSource={tinDocumentsData} pagination={false} />
          </Panel>
        </Collapse>
        <Card className="card-bg"> {t('Admin Action')}</Card>
      </>
    </>
  );
};
