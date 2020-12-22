import { createBrowserHistory } from 'history';
import { ReactText } from 'react';

export const history = createBrowserHistory();

export const RoutePaths = {
  HOME: () => '/',
  LOGIN: () => '/',
  SIGNUP: () => '/signup',
  RECOVERY_PASSWORD: () => '/recovery-password',
  DASHBOARD: () => '/app',
  GROWTHPROGRAM: () => '/app/growth-program',
  AGROBONUSPROGRAM: (points = ':points') => `/app/agrobonus-program/${points}`,
  PRODUCTS_PAGE: () => '/app/products',
  USERS_PAGE: (sub = ':registered') => `/app/users/${sub}`,
  PENDING_USERS_PAGE: (sub = ':pending-users') => `/app/users/${sub}`,
  UPLOAD_GRN: () => '/app/upload-grn',
  GRN_HISTORY: () => '/app/grn-history',
  FIX_PRICE: () => '/app/fix-price',
  BONUS_SETTLEMENT_OPTION: () => '/app/fix-price/bonus-settlement-option',
  CLASSIC: () => '/app/classic',
  INTERVALLIC: () => '/app/intervallic',
  ADMIN_CONSOLE: () => '/app/admin-console',
};

export const navigateTo = (targetPath: ReactText): void => {
  history.push(targetPath.toString());
};

export const PublicRoutes = [RoutePaths.HOME()];
