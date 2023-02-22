import { IConfigRoutes } from '../interfaces';
import { HOME_PATH, LOGIN_PATH } from './constants';

export const configurations: IConfigRoutes = {
  AUTH_TOKEN_NAME:
    'token' /* authentication token name stored in local-storage */,
  APP_NON_AUTHORIZED_REDIRECT_PATH:
    LOGIN_PATH /* redirect path when routes doesn't pass authentication */,
  APP_AUTHORIZED_REDIRECT_PATH:
    HOME_PATH /* redirect path when routes is already authenticated */,
  USER_ROLES_NAME:
    'userRoles' /* user roles key name stored in local-storage againt specific user roles added */,
};
