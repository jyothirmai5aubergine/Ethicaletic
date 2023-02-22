import type React from 'react';
import type { NonIndexRouteObject } from 'react-router-dom';

export interface IRoutesConfig extends NonIndexRouteObject {
  roles?: string[]
  children?: IRoutesConfig[]
  isPrivate?: boolean
}

export interface IConfigRoutes {
  AUTH_TOKEN_NAME: string
  APP_NON_AUTHORIZED_REDIRECT_PATH: string
  USER_ROLES_NAME: string
  APP_AUTHORIZED_REDIRECT_PATH: string
}

export interface IAuth {
  auth: any
  setAuth: React.Dispatch<any>
  roles: any
  setRoles: React.Dispatch<any>
}

export interface IAuthorization {
  roles: any
}

export interface IAuthenticationProps {
  children: React.ReactNode
}

export interface IAccessControl {
  roles: string[]
  accessDenied: boolean
}
