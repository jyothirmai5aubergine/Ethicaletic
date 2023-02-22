import React from 'react';
import { Outlet } from 'react-router-dom';

import { AuthorizationContext } from '../v6/contexts';
import { Authentication } from '../v6/guards';
import SuspenseLayout from './suspense';

const Root: React.FunctionComponent<any> = ({ children }) => {
	return (
		<Authentication>
			<AuthorizationContext.Consumer>
				{(context: any) => (
					<SuspenseLayout>
						{children}
						<Outlet context={context} />
					</SuspenseLayout>
				)}
			</AuthorizationContext.Consumer>
		</Authentication>
	);
};

export default Root;
