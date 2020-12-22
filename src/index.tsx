import Amplify, { Auth } from 'aws-amplify';
import { navigateTo, RoutePaths } from 'core/history';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import App from './App';
import AppProviders from './context';
import './core/i18n';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
  },
});

const validateSession = async () => {
  // todo move this code to some better place and set user info to react-context
  try {
    const session = await Auth.currentSession(); // to validate logged in user and get session values
    console.log('session', session);
    const user = await Auth.currentAuthenticatedUser(); // to get user
    console.log('user', user);
    const { attributes } = await Auth.currentUserInfo(); // to get all attributes
    console.log('attributes', attributes);
  } catch (ex) {
    navigateTo(RoutePaths.HOME());
  }
};
validateSession();

ReactDOM.render(
  <AppProviders>
    <App />
    {process.env.REACT_APP_ENV === 'local' && (
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    )}
  </AppProviders>,
  document.getElementById('root')
);
