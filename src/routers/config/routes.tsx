
import { Root } from '../components';
import { IRoutesConfig } from '../interfaces';

const config: IRoutesConfig[] = [
	{
		path: '*',
		element: '404 Not Found',
		isPrivate: false,
	},
	{
		path: '/',
		element: (
			<>
				<Root>
          {/* // TODO: Add components here */}
          <h4>Welcome to EEx</h4>
        </Root>
			</>
		),
    children: [
			{
				path: '/login/eex/',
				isPrivate: true,
				element: <h1>Children of login route</h1>,
			},
		],
		isPrivate: false,
	},
  {
    path: '/login',
    element: <h4>Login to Ethicaletix</h4>,
    isPrivate: true,
  },
  // TODO: Configure projects routing path
];

export default config;
