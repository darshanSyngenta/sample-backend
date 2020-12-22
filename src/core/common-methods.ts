import first from 'lodash/first';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import last from 'lodash/last';

export const isAccessTokenAvailable = () => !!localStorage.getItem('tokens');
export const setAccessToken = (token: any) => localStorage.setItem('tokens', token);
export const getAccessToken = () => localStorage.getItem('tokens') || '';
export const clearAccessToken = () => localStorage.removeItem('tokens');

export const getProgressByValues = (
  isPasswordValid: boolean,
  isMobileNumberValid: boolean,
  termsCheckbox: boolean
) => {
  let count = 1;
  if (isPasswordValid) {
    count++;
  }
  if (isMobileNumberValid) {
    count++;
  }
  if (termsCheckbox) {
    count++;
  }
  return count;
};

export const getLocale = () => {
  let lang = localStorage.getItem('i18nextLng') || 'en';
  if (lang === 'pt') {
    lang = 'pt-BR';
  }
  return lang;
};

export const isEmptyStr = (str?: string) => {
  if (str && str.length > 0) {
    return true;
  }
  return false;
};

export const getHeaders = () => ({
  common: {
    Authorization: `Bearer ${JSON.parse(getAccessToken()).access_token}`,
  },
});

export const getLangHeaders = () => {
  let lang = localStorage.getItem('i18nextLng') || 'en';
  if (lang === 'pt') {
    lang = 'pt-BR';
  }
  return {
    common: {
      Authorization: `Bearer ${JSON.parse(getAccessToken()).access_token}`,
      'Accept-Language': lang,
    },
  };
};

export const getInitialName = (name: string) => {
  if (isEmpty(name)) {
    return '';
  }
  const splitedNames = name.split(' ');
  const firstName = first(splitedNames) || '';
  const lastName = last(splitedNames) || '';
  if (splitedNames.length >= 2) {
    return `${firstName.charAt(0).toUpperCase()} ${lastName.charAt(0).toUpperCase()}`;
  }
  return firstName.charAt(0).toUpperCase();
};

export const setTimeoutPromise = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const isSearchSubStringFound = (searchString = '', fields: string[] = []) =>
  !isEmpty(
    fields.filter((field) => (field || '').toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
  );

export const CommaSeparatedList = (a: [], b: []) => {
  try {
    if (!b) {
      return a.join(', ');
    }
    return get(a, b).join(', ');
  } catch (e) {
    // do nothing
    return '';
  }
};
