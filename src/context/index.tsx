import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ThemeProvider } from '../core/theme';
import { AuthProvider } from './auth';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppProviders(props: any) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider>
        {/* <AuthProvider>         */}
        {props.children}
        {/* </AuthProvider> */}
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default AppProviders;
