import i18next from 'i18next';

export const getErrorMessageByCode = (code: string) => {
  return i18next.t(code) || i18next.t('Something went wrong');
};
