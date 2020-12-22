import { history, RoutePaths } from 'core/history';
import React, { ReactText, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Sidebar } from 'syngenta-digital-cropwise-react-ui-kit';
import dashboardOutline_Gray from '../../assets/images/dashboardOutline_Gray.png';
import dashboardOutline_White from '../../assets/images/dashboardOutline_White.png';
import zorroLogo from '../../assets/images/rev-zorro-logo.svg';
import uploadGRN_Gray from '../../assets/images/uploadGRN_Gray.svg';
import uploadGRN_white from '../../assets/images/uploadGRN_white.png';
import cropWiseLeafLogo from '../../assets/images/zorro_only_logo.svg';
import cropwiseExpandButton from './images/cropwise-expand-button.svg';
import cropwiseCloseButton from './images/sidebar-collapse-img.svg';
import './style.less';

const getSelectedMenu = (menuName: string) => {
  switch (menuName) {
    case 'products':
      return RoutePaths.PRODUCTS_PAGE();
    case 'fix-price':
      return RoutePaths.FIX_PRICE();
    case 'upload-grn':
      return RoutePaths.UPLOAD_GRN();
    case 'grn-history':
      return RoutePaths.GRN_HISTORY();
    case 'admin-console':
      return RoutePaths.ADMIN_CONSOLE();
    default:
      return RoutePaths.PRODUCTS_PAGE();
  }
};

export const SidebarMenu: React.FC<{ url: string }> = (props) => {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState(getSelectedMenu(''));
  const location = useLocation() || '';
  useEffect(() => {
    if (location) {
      const locationItems = (location as any).pathname.split('app/');
      const menuArr = locationItems[1].split('/');
      setSelectedMenu(getSelectedMenu(menuArr[0]));
    }
  }, [location]);

  const navigateTo = async (targetPath: ReactText) => {
    setSelectedMenu(targetPath.toString());
    history.push(targetPath.toString());
  };

  const menuList = [
    {
      name: t('App'),
      key: RoutePaths.PRODUCTS_PAGE(),
      icon: (
        <img
          src={
            selectedMenu === RoutePaths.PRODUCTS_PAGE()
              ? dashboardOutline_White
              : dashboardOutline_Gray
          }
          className="menuListImg"
          alt="dashboardOutline_White"
        />
      ),
      onClick: () => navigateTo(RoutePaths.PRODUCTS_PAGE()),
    },
    {
      name: t('Fix Price'),
      key: RoutePaths.FIX_PRICE(),
      icon: (
        <img
          src={selectedMenu === RoutePaths.FIX_PRICE() ? uploadGRN_white : uploadGRN_Gray}
          className="menuListImg"
          alt="dashboardOutline_White"
        />
      ),
      onClick: () => navigateTo(RoutePaths.FIX_PRICE()),
    },
    {
      name: t('upload GRN'),
      key: RoutePaths.UPLOAD_GRN(),
      icon: (
        <img
          src={selectedMenu === RoutePaths.UPLOAD_GRN() ? uploadGRN_white : uploadGRN_Gray}
          className="menuListImg"
          alt="company_Gray"
        />
      ),
      onClick: () => navigateTo(RoutePaths.UPLOAD_GRN()),
    },
    {
      name: t('History'),
      key: RoutePaths.GRN_HISTORY(),
      onClick: () => navigateTo(RoutePaths.GRN_HISTORY()),
    },
    {
      name: t('Admin Console'),
      key: RoutePaths.ADMIN_CONSOLE(),
      icon: (
        <img
          src={selectedMenu === RoutePaths.ADMIN_CONSOLE() ? uploadGRN_white : uploadGRN_Gray}
          className="menuListImg"
          alt="company_Gray"
        />
      ),
      onClick: () => navigateTo(RoutePaths.ADMIN_CONSOLE()),
    },
  ];

  return (
    <Sidebar
      collapsedIcon={<img src={cropWiseLeafLogo} alt="Leaf Logo" />}
      expandedIcon={<img src={zorroLogo} alt="Leaf Logo" />}
      theme="dark"
      selectedKeys={[selectedMenu]}
      menuItems={menuList}
      collapsedMenu={true}
      triggerExpandButton={
        <img alt="expand" className="triggerExpandButton" src={cropwiseExpandButton} />
      }
      triggerCloseButton={
        <img alt="collapse" className="triggerCloseButton" src={cropwiseCloseButton} />
      }
    ></Sidebar>
  );
};
