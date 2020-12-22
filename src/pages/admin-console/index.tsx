import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row, Table, Tabs, Typography } from 'antd';
import { CancelButton } from 'components/button';
import { IAdminConsoleProgramInfo } from 'pages/signup/models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import communicationIcon from '../../assets/images/communication.svg';
import ellipseIcon from '../../assets/images/ellipse.svg';
import filterIcon from '../../assets/images/filter.svg';
import { INavigationRouteProps } from '../../core/navigation/models';
import { BankDetail } from './partial/bankDetails';
import { Documents } from './partial/documents';
import { GrowerDetail } from './partial/growerDetails';
import { PriceFixation } from './partial/priceFixation';
import { TINDetail } from './partial/tinDetails';
import './style.less';

const { Title } = Typography;
const { Search } = Input;
const { TabPane } = Tabs;

// tslint:disable-next-line:no-big-function

export const AdminConsole = (props: INavigationRouteProps<IAdminConsoleProgramInfo>) => {
  const { t } = useTranslation();
  const [sortedInfo, setSortedInfo] = useState(null);
  const [isGrowersList, setIsGrowersList] = useState(true);
  const [isGrowersDetails, setIsGrowersDetails] = useState(false);
  const [selectedGrowersDetails, setSelectedGrowersDetails] = useState(null);

  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
    setSortedInfo(sorter);
  }

  const growersData = [
    {
      key: t('1'),
      name: t('Darshan'),
      tin: t('349089'),
      program: t('AgroBonus'),
      stage: t('Registration'),
      status: t('Pending'),
      date: t('DD/MM/YY'),
    },
    {
      key: t('2'),
      name: t('Khemali'),
      tin: t('349090'),
      program: t('AgroBonus'),
      stage: t('Program Registration'),
      status: t('Grower Accepted; Admin to Sign'),
      date: t('DD/MM/YY'),
    },
    {
      key: t('3'),
      name: t('Suraj'),
      tin: t('349091'),
      program: t('AgroBonus'),
      stage: t('Registration'),
      status: t('Approved'),
      date: t('DD/MM/YY'),
    },
    {
      key: t('4'),
      name: t('Karan'),
      tin: t('349092'),
      program: t('AgroBonus'),
      stage: t('Price Fixation'),
      status: t('Submitted'),
      date: t('DD/MM/YY'),
    },
  ];

  const columns = [
    {
      title: t('Grower name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      ellipsis: true,
    },
    {
      title: t('TIN'),
      dataIndex: 'tin',
      key: 'tin',
      ellipsis: true,
    },
    {
      title: t('Program'),
      dataIndex: 'program',
      key: 'program',
      sorter: (a, b) => a.program.length - b.program.length,
      ellipsis: true,
    },
    {
      title: t('Stage'),
      dataIndex: 'stage',
      key: 'stage',
      sorter: (a, b) => a.stage.length - b.stage.length,
      ellipsis: true,
    },
    {
      title: t('Status'),
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.length - b.status.length,
      ellipsis: true,
    },
    {
      title: t(`Registration Approved Dt (DD/MM/YY)`),
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.length - b.date.length,
      ellipsis: true,
    },
  ];
  const onSearch = (value) => console.log(value);

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#E5E5E5',
      }}
    />
  );

  const onRowSelection = (value: any) => {
    setIsGrowersList(false);
    setIsGrowersDetails(true);
    setSelectedGrowersDetails(value);
  };

  const goToGrowerListPage = () => {
    setIsGrowersDetails(false);
    setIsGrowersList(true);
  };

  return (
    <>
      {isGrowersList ? (
        <>
          <Row style={{ margin: '10px 0px' }}>
            <Col md={16}>
              {' '}
              <Title>{t('Growers')}</Title>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <img src={filterIcon} alt="filter" />
                </Col>
                <Col md={20}>
                  <Search placeholder="search" onSearch={onSearch} prefix={prefix} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={growersData}
            onChange={onChange}
            rowSelection={{
              type: 'radio',
              onSelect: onRowSelection,
            }}
          />
        </>
      ) : (
        <>
          <Row style={{ margin: '10px 0px' }}>
            <Col md={20}>
              <Row>
                <Col md={3}>
                  <Title>{t('Grower Details')}</Title>
                </Col>
                <Col md={1}>
                  <img src={ellipseIcon} alt="ellipse" />
                </Col>
                <Col md={20}>
                  <Title>{t('Darshan')}</Title>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                {' '}
                <CancelButton type="default" data-testid="close" onClick={goToGrowerListPage}>
                  <img src={communicationIcon} alt="communication" />
                  <span>{t('Grower List')}</span>
                </CancelButton>
              </Row>
            </Col>
          </Row>
          <>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Grower Details" key="1">
                <GrowerDetail />
              </TabPane>
              <TabPane tab="Bank Details" key="2">
                <BankDetail />
              </TabPane>
              <TabPane tab="TIN Details" key="3">
                <TINDetail />
              </TabPane>
              <TabPane tab="Documents" key="4">
                <Documents />
              </TabPane>
              <TabPane tab="Price Fixation" key="5">
                <PriceFixation />
              </TabPane>
            </Tabs>
          </>
        </>
      )}
    </>
  );
};
