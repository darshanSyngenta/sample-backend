import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.less';

const handleShow = () => {
  console.log('Clicked..!');
};

export const UsersAddon = (props: any) => {
  const { t } = useTranslation();

  return (
    <div className="usersContainer">
      {/* Heading - Block */}
      <div className="usersHead">
        <div className="usersHeadRight">
          <Button
            key="inviteUser"
            type="default"
            icon={<ArrowRightOutlined />}
            className="inviteUserBtn"
            onClick={handleShow}
          >
            {t('Invite Users')}
          </Button>
        </div>
      </div>
    </div>
  );
};
