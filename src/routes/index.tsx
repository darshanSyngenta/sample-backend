import { history, RoutePaths } from 'core/history';
import { AdminConsole } from 'pages/admin-console';
import { AgrobonusProgram } from 'pages/agrobonus-program';
import { BonusSettlementOption } from 'pages/bonus-settlement-option';
import { FixPrice } from 'pages/fix-price';
import { GRNHistory } from 'pages/grn-history';
import { GrowthProgram } from 'pages/growth-program';
import { PageNotFound } from 'pages/page-not-found';
import { ProductsPage } from 'pages/products';
import { UploadGRN } from 'pages/upload-grn';
import UsersPage from 'pages/users';
import React from 'react';
import {Classic} from 'pages/classic'
import {Intervallic} from 'pages/intervallic'
import { Route, Router, Switch } from 'react-router-dom';

export const MainRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={RoutePaths.DASHBOARD()} exact={true} component={ProductsPage} />
        <Route path={RoutePaths.PRODUCTS_PAGE()} exact={true} component={ProductsPage} />
        <Route path={RoutePaths.USERS_PAGE()} exact={true} component={UsersPage} />
        <Route path={RoutePaths.GROWTHPROGRAM()} exact={true} component={GrowthProgram} />
        <Route path={RoutePaths.AGROBONUSPROGRAM()} exact={true} component={AgrobonusProgram} />
        <Route path={RoutePaths.UPLOAD_GRN()} exact={true} component={UploadGRN} />
        <Route path={RoutePaths.GRN_HISTORY()} exact={true} component={GRNHistory} />
        <Route path={RoutePaths.FIX_PRICE()} exact={true} component={FixPrice} />
        <Route
          path={RoutePaths.BONUS_SETTLEMENT_OPTION()}
          exact={true}
          component={BonusSettlementOption}
        />
        <Route path={RoutePaths.CLASSIC()} exact={true} component={Classic} />
        <Route path={RoutePaths.INTERVALLIC()} exact={true} component={Intervallic} />
        <Route path={RoutePaths.ADMIN_CONSOLE()} exact={true} component={AdminConsole} />

        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default MainRoutes;
