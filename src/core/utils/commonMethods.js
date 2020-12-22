import isEmpty from 'lodash/isEmpty';
import { O_AUTH } from '../constants';

export const isAccessTokenAvailable = () => !!localStorage.getItem('tokens');
export const setAccessToken = (token) => localStorage.setItem('tokens', token);
export const getAccessToken = () => {
  try {
  return JSON.parse(localStorage.getItem('tokens')).access_token
  } catch (e) {
    return null;
  }
}
export const clearAccessToken = () => localStorage.removeItem('tokens');

export const getAppHostsInfo = () => {
  const domainMapping = {
    'localhost:3000': { host: 'GLOBAL', account: 'qa.accounts.cropwise.com' },
    'staff.qa.cropwise.com': { host: 'GLOBAL', account: 'qa.accounts.cropwise.com' },
    'staff.staging.cropwise.com': { host: 'GLOBAL', account: 'staging.accounts.cropwise.com' },
    'staff.cropwise.com': { host: 'GLOBAL', account: 'accounts.cropwise.com' },
  };
  const { host } = window.location;
  return {
    host: (!isEmpty(domainMapping[host]) && domainMapping[host].host) || 'GLOBAL',
    account: !isEmpty(domainMapping[host]) && domainMapping[host].account,
    hostsList: [...new Set(Object.values(domainMapping).map((d) => d.host))]
  };
};

export const getOAuthUrl = () => {
  const { account } = getAppHostsInfo();
  return `https://${account}/oauth/authorize?response_type=${O_AUTH.responseCode}&client_id=${O_AUTH.clientId}&redirect_uri=${window.location.origin}/authenticate`;
};
