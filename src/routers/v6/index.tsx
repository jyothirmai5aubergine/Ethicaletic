import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import config from '../config/routes';

const router = createBrowserRouter(config)

const ReactRouterV6: React.FunctionComponent<any> = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default ReactRouterV6
export { ReactRouterV6 };
