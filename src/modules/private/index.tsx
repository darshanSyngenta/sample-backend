import { history } from 'core/history';
import get from 'lodash/get';
import { PageNotFound } from 'pages/page-not-found';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

export const StyledRoot = styled.div`
  font-family: ${(props) => get(props, 'theme.font.family')};
  height: 100%;
  min-height: 100%;
  * {
    box-sizing: border-box;
  }
`;

const AsyncMainContainer = React.lazy(() => import('pages/main-container'));
export const Private = () => {
  return (
    <StyledRoot>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/app/*" component={AsyncMainContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </StyledRoot>
  );
};

export default Private;
