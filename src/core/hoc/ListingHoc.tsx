import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Menu } from 'antd';
import { PageContainer } from 'components/page-container';
import { TitleBar } from 'components/title-bar';
import { RoutePaths } from 'core/history';
import { IListMeta } from 'core/utils/BasicModels';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { userService } from './../services';

import './index.less';

// future enhancement: replace this with dynamic import
const getApiService = (service: string) => {
  switch (service) {
    case 'registered':
    case 'pendingUsers':
      return userService;
  }
};

const getSelectedTab = () => {
  const urlArr = window.location.href.split('/');
  return urlArr[urlArr.length - 1];
};

const getParentID = () => {
  const urlArr = window.location.href.split('/');
  return urlArr[urlArr.length - 2];
};

const ListingHoc = (WrappedComponent: any, metaInfo: IListMeta) => {
  return (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editing, setEditing] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [details, setDetails] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation() || '';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tabItem, setTabItem] = useState({ tabPrepath: '', tab: '' });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (location) {
        const locationItems = (location as any).pathname.split('/');
        const tab = locationItems.pop();
        const tabPrepath = locationItems.join('/');
        setTabItem({ tabPrepath, tab });
      }
    }, [location]);
    let metaInfoService = metaInfo.service;
    let parentID = '';
    if (metaInfo.tabs && metaInfo.tabs.length > 0) {
      metaInfoService = getSelectedTab();
      parentID = getParentID();
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchInputValue, setSearchInputValue] = useState('');
    const { status, data, error } = (getApiService(metaInfoService) as any)[
      `useAll${capitalize(metaInfoService)}`
    ]({ parentID, searchInputValue });

    return (
      <div className="accountContainer">
        <div className="accountHead">
          <div className="accountHeadLeft">
            <Link to={RoutePaths.PRODUCTS_PAGE()}>
              <div className="circleBack">
                <LeftOutlined />
              </div>
            </Link>
            <TitleBar className="accountHeadingAlign">
              {data && data.metaInfoTitle ? data.metaInfoTitle : t(metaInfo.title)}
            </TitleBar>
          </div>
          <div className="accountHeadRight">
            {metaInfo.right({ refId: editing, detailsId: details, tab: tabItem.tab, setEditing })}
          </div>
        </div>
        <div className="clrFloat"></div>
        {metaInfo.tabs && metaInfo.tabs.length > 0 && (
          <Menu
            mode="horizontal"
            className="syngenta-tab-menu"
            theme="light"
            defaultSelectedKeys={[metaInfoService]}
          >
            {metaInfo.tabs.map((tab) => (
              <Menu.Item key={tab}>
                <NavLink to={`${tabItem.tabPrepath}/${tab}`}>
                  {t(capitalize(startCase(tab)))}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        )}
        <div className="AccountContentBlock">
          <div className="accountContent">
            <div className="accountSearch">
              <div className="accountSearchContent">
                <div className="accountSearchInput">
                  <Input
                    placeholder={t(metaInfo.searchPlaceholder)}
                    prefix={<SearchOutlined />}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                  />
                </div>
                {/* metaInfo.title === 'Organizations' ? <OrgProductSearchDD onChange={setSearchProductValue} />: '' */}
              </div>
              {metaInfo.listingSummaryCount && (
                <div className="orgCount">
                  <span>{(data && (data as any).length) || 0}</span> {t(metaInfo.title)}
                </div>
              )}
            </div>
            <div className="clrFloat"></div>
            <div className="accountTableBlock">
              <PageContainer status={status} error={error}>
                <WrappedComponent
                  data={data}
                  setEditing={setEditing}
                  setDetails={setDetails}
                  tab={tabItem.tab}
                />
              </PageContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ListingHoc;
