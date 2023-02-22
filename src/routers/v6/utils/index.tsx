/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { RouteMatch } from 'react-router-dom';

import { configurations } from '../../config';

/**
 *  This is the function for checking authorization status
 * @returns
 */
export const authorizationToken = (): boolean => {
  const token = (window.localStorage.getItem(configurations?.AUTH_TOKEN_NAME ?? ''))
  return !!token
}

/**
 * Check permission of routes not provided to roles
 * @param roles
 * @returns
 */
export const checkRolePermissionDenied = (roles: string[], userRoles: string[]): boolean => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!(roles?.length) || !(userRoles?.length)) {
    return true
  }
  return roles?.findIndex((role: any) => userRoles.includes(role)) === -1
}

/**
 * Get current Route details
 * @param matches
 * @returns
 */
export const getCurrentRoute = (matches: RouteMatch[]): any => {
  return matches?.find(
    ({ pathnameBase }: { pathnameBase: string }) => window.location.pathname === pathnameBase
  )?.route
}
