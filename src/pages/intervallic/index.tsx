import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.less';

export const Intervallic: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <>
      <p> Intervallic page</p>
    </>
  );
};