import { Col, Row, Tag } from 'antd';
import { Button } from 'components/button';
import FileUploader from 'components/file-uploader/index';
import { Loader } from 'components/loader';
import { TitleBar } from 'components/title-bar';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'syngenta-digital-cropwise-react-ui-kit';
import './styles.less';

export const GRNHistory: React.FC<{}> = () => {
  const { t } = useTranslation();
  const [uploadedFiles, setUploadedFiles] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');

  const addFileName = (file) => {
    setFile(file);
    setFileName(file.name);
  };

  const columns = [
    {
      dataIndex: 'fileName',
      key: 'fileName',
      title: t('File Name'),
    },
    {
      dataIndex: 'amount',
      key: 'dataIndex',
      title: t('Amount (RUB)'),
    },
    {
      dataIndex: 'submittedDateAndTime',
      key: 'submittedDateAndTime',
      title: t('Submitted Date & Time'),
    },
    {
      dataIndex: 'processedDateAndTime',
      key: 'processedDateAndTime',
      title: t('Processed Date & Time'),
    },
    {
      dataIndex: 'status',
      key: 'status',
      title: t('Status'),
      render: (status) => (
        <Tag
          color={
            status.toLowerCase() == 'approved' ? 'green' : status == 'rejected' ? 'red' : 'yellow'
          }
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];
  const dataSource = [
    {
      submittedDateAndTime: '10 Downing Street',
      amount: 32,
      fileName: 'Mike',
      processedDateAndTime: 'Nice',
      status: 'Approved',
      key: '1',
    },
  ];
  return (
    <>
      <div className="lg-w-75">
        <Row>
          <Col span={24}>
            <TitleBar className="header Signin-title card-title">{t('History')}</TitleBar>
          </Col>
          <Col span={24}>
            <span>{t('Cumilative Invoice Value(approved) 698186(RUB)')}</span>
            <span className="flex-block-right">
              {loading ? (
                <Loader tip={t('File is uploading')} />
              ) : (
                <FileUploader
                  addFileName={addFileName}
                  fileName={fileName}
                  translate={t}
                  loader={setLoading}
                />
              )}
              <Button type="primary" title="confirm">
                {' '}
                {t('Confirm All GRNs')}
              </Button>
            </span>
          </Col>
          <Col span={24}>
            {' '}
            <Table
              className="syn-table-head"
              bordered
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
