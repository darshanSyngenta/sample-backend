import { Button, Dropdown, Menu, Table } from 'antd';
import { ListingHoc } from 'core/hoc';
import { IListMeta } from 'core/utils/BasicModels';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.less';
import { UsersAddon } from './UsersAddon';

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

const metaInfo: IListMeta = {
  title: 'Users',
  service: 'registered',
  searchPlaceholder: 'Search users',
  listingSummaryCount: true,
  // 'tabs': ['registered', 'pendingUsers'],
  right: (props: any) => {
    // return <UsersAddon {...props} />;
    return '';
  },
};

const UsersPage: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link">{t('Edit')}</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link">{t('Access')}</Button>
      </Menu.Item>
    </Menu>
  );

  /* registeredUsersColumns Columns Data and Keys */
  const registeredUsersColumns = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: t('ID'),
      dataIndex: 'id',
      key: 'id',
      sorter: (a: any, b: any) => a.id.length - b.id.length,
    },
    {
      title: t('Role'),
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: t('Mobile Number'),
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: t('Actions'),
      dataIndex: 'action',
      align: 'right' as 'right',
      key: 'action',
      render: () => (
        <div className="detailsEditBlock userListActions">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button type="link" onClick={(e) => e.preventDefault()}>
              ...
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={registeredUsersColumns}
      dataSource={(props as any).data || []}
      onChange={onChange}
      rowSelection={{ type: 'checkbox' }}
      scroll={{ x: '100%' }}
      locale={{
        emptyText: t('No users available'),
        filterConfirm: t('OK'),
        filterReset: t('Reset'),
        triggerDesc: t('Click sort by descend'),
        triggerAsc: t('Click sort by ascend'),
        cancelSort: t('Click to cancel sort'),
      }}
    />
  );
};

export default ListingHoc(UsersPage, metaInfo);
