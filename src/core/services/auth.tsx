import { authRequest } from 'api/api';
import { IAuthTokenRequestDTO } from 'core/authentication/models';
import { O_AUTH } from 'core/constants';
import { clearAccessToken, getAppHostsInfo } from 'core/utils/commonMethods';
import queryString from 'query-string';

// https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html

const authService = (function () {
  const performLogin = async (_: any, code: any) => {
    const authParams: IAuthTokenRequestDTO = {
      grant_type: 'authorization_code',
      client_id: O_AUTH.clientId,
      redirect_uri: `${window.location.origin}/authenticate`,
      code,
    };
    const res = await authRequest.post('oauth/token', queryString.stringify(authParams as any));
    const tokens = res.data;
    localStorage.setItem('tokens', JSON.stringify(tokens));
    return tokens;
  };

  const logout = async () => {
    try {
      const { account } = getAppHostsInfo();
      const myLogoutRequest = new Request(`https://${account}/exit`, {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include',
      });
      await fetch(myLogoutRequest);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
    clearAccessToken();
    window.location.href = '/';
    return 'Time for a nap. Logging out..';
  };

  return {
    performLogin,
    logout,
  };
})();

export default authService;
