import { Avatar, Popover, Statistic } from 'antd';
import logoutIcon from 'assets/images/logout.svg';
import { history, RoutePaths } from 'core/history';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.less';

export const GlobalHeader: React.FC<{}> = (props) => {
  const { t } = useTranslation();

  const content = (
    <span className="logoutText" onClick={() => history.replace(RoutePaths.HOME())}>
      <img src={logoutIcon} alt="logout" />
      <span>{t('Logout')}</span>
    </span>
  );
  return (
    <>
      <div className="headerContainer">
        <div className="headerWrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignSelf: 'left', justifyContent: 'space-between' }}>
            <Avatar className="userAvatar">{t('DJ')}</Avatar>
            <Statistic className="grower-name" title={t('Grower')} value={t('Don Jones')} />
          </div>

          <div className="logoutPopover">
            <div>
              <Popover placement="bottomRight" content={content} trigger="click">
                <Avatar>{t('RC')}</Avatar>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
