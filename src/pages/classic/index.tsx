import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.less';

export const Classic: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>classic page</p>
    </>
  );
};
