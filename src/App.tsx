import 'antd/dist/antd.css';
import { history } from 'core/history';
import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router';
import './api/api';
import { Loader } from './components/loader';
import 'syngenta-digital-cropwise-react-ui-kit/dist/styles/cw-ui-kit.less';
import './main.less';

const Public = lazy(() => import('./modules/public'));
const Private = lazy(() => import('./modules/private'));

export const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader tip="Loading Application..." />}>
        <Switch>
          <Route exact={true} path="/app/*" component={Private} />
          <Route path="/" component={Public} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
