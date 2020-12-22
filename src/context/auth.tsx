/*
 * https://kentcdodds.com/blog/authentication-in-react-applications
 * https://www.digitalocean.com/community/tutorials/react-manage-user-login-react-context
 */
import { authService, userService } from 'core/services';
import { getOAuthUrl, isAccessTokenAvailable } from 'core/utils/commonMethods';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { AuthError } from './../components/auth-error';
import { Loader } from './../components/loader';

const AUTH_META: AuthInterface = { status: 'idle', error: null, user: null };

const AuthContext = React.createContext<AuthInterface>(AUTH_META);

function AuthProvider(props: any) {
  const [hasToken, setHasToken] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState<boolean>(false);
  const [code, setCode] = useState<any>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const query = queryString.parse(window.location.search);
    if (query && query.code) {
      if (!sessionStorage.getItem(`cod${query.code}`)) {
        setCode(query.code);
      }
    } else if (isAccessTokenAvailable()) {
      setHasToken(true);
    } else {
      window.location.href = getOAuthUrl();
    }
  }, []);

  const { status: authStatus, error: authError } = useQuery<any, any>(
    ['oAuthCode', code],
    authService.performLogin,
    { enabled: !!code }
  );

  const { status, data: user, error } = useQuery<any, any>(
    ['currentUser'],
    userService.currentUser,
    { enabled: (!!code && authStatus === 'success') || hasToken }
  );

  return (
    <AuthContext.Provider value={{ status, logoutStatus, setLogoutStatus, user, error }}>
      {['loading', 'idle'].includes(status) ? (
        <Loader tip={t('Authenticating...')} />
      ) : (status === 'error' && error && error.response.status === 401) ||
        (authStatus === 'error' && authError && authError.response.status === 401) ? (
        (window.location.href = getOAuthUrl())
      ) : status === 'error' ? (
        <AuthError label={`Oh no.. ${error.message}`} />
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  const isPending = ['loading', 'idle'].includes(context.status || '');
  const isError = context.status === 'error';
  const isSuccess = context.status === 'success';
  const isAuthenticated = context.user && isSuccess;
  return {
    ...context,
    logout: authService.logout,
    logoutStatus: context.logoutStatus,
    setLogoutStatus: context.setLogoutStatus,
    isPending,
    isSuccess,
    isError,
    isAuthenticated,
  };
}

interface AuthInterface {
  user?: any;
  logoutStatus?: boolean;
  error?: any;
  setLogoutStatus?: any;
  status?: string;
}

export { AuthProvider, useAuth };
