import { useContext } from 'react';

import { IAuth } from '../interfaces';
import { AuthenticationContext } from '../v6/contexts';

export const useAuth = (): IAuth => {
  return useContext<IAuth | null>(AuthenticationContext) as IAuth
}

export default useAuth
