import { useOutletContext } from 'react-router-dom';

import type { IAccessControl } from '../interfaces';

const useAccessControl = (): IAccessControl => useOutletContext();

export { useAccessControl };
