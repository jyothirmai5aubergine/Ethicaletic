/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { Suspense, useState } from 'react';
import { matchRoutes, Navigate, useLocation } from 'react-router-dom';

import { configurations } from '../../config';
import config from '../../config/routes';
import { useAuth } from '../../hooks';
import { IAuthenticationProps, IRoutesConfig } from '../../interfaces';
import { AuthenticationContext, AuthorizationContext } from '../contexts';
import {
	authorizationToken,
	checkRolePermissionDenied,
	getCurrentRoute
} from '../utils';

/**
 * Authentication of routes
 * @param param
 * @returns
 */
const Authentication: React.FunctionComponent<IAuthenticationProps> = ({
	children,
}) => {
	const [auth, setAuth] = useState<any | null>(undefined);
	const [roles, setRoles] = useState<any | null>(undefined);
	const location = useLocation();
	const route = matchRoutes(config, location);

	const currentRoute: IRoutesConfig = getCurrentRoute(route ?? []);
	/*
	 * private route redirection
	 */
  if (currentRoute?.isPrivate) {
    if (!authorizationToken()) {
			return <Navigate to={configurations.APP_NON_AUTHORIZED_REDIRECT_PATH} />;
		}
	}

	/*
	 * public route redirection
	 */
	if (!currentRoute?.isPrivate) {
		if (authorizationToken()) {
			return <Navigate to={configurations.APP_AUTHORIZED_REDIRECT_PATH} />;
		}
	}

	return (
		<Suspense fallback={<></>}>
			<AuthenticationContext.Provider
				value={{ auth, setAuth, roles, setRoles }}
			>
				<Authorization>{children}</Authorization>
			</AuthenticationContext.Provider>
		</Suspense>
	);
};

/**
 * Authorization of routes
 * @param param
 * @returns
 */
const Authorization: any = ({ children }: { children: React.ReactElement }) => {
	const { roles } = useAuth() ?? {};
	const location = useLocation();
	const route = matchRoutes(config, location);

	const currentRoute: IRoutesConfig = getCurrentRoute(route ?? []);

	/*
	 * checking routes permission available to roles
	 */
	const accessDenied =
		Object.prototype.hasOwnProperty.call(currentRoute, 'roles') &&
		Array.isArray(currentRoute?.roles) &&
		checkRolePermissionDenied(currentRoute?.roles ?? [], roles ?? []);

	return (
		<Suspense fallback={<></>}>
			<AuthorizationContext.Provider value={{ roles, accessDenied } as any}>
				{React.cloneElement(children, { accessDenied, roles })}
			</AuthorizationContext.Provider>
		</Suspense>
	);
};

export { Authentication, Authorization };
