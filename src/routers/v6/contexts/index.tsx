import React from 'react'

import { IAuth, IAuthorization } from '../../interfaces'

const AuthorizationContext = React.createContext<IAuthorization | null>(null)
const AuthenticationContext = React.createContext<IAuth | null>(null)

export {
  AuthorizationContext,
  AuthenticationContext
}
