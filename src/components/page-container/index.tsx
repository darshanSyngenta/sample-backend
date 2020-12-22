import React from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../loader';

export const PageContainer = (props: any) => {
  const { status, error } = props;
  const { t } = useTranslation();
  if (['loading', 'idle'].includes(status)) {
    return <Loader tip={t('Loading Data...')} />;
  }
  if (error) {
    return <>{t('Error')}</>;
  }

  return <>{props.children}</>;
};
