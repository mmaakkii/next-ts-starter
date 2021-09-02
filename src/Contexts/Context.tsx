/* eslint-disable react/prop-types */

import { createContext, useReducer, useMemo } from 'react'

import { createActions, REQUEST, SUCCESS, FAIL, responseObj } from './utils'

interface IContextState {
  loading: boolean
  errors: any
}

enum ActionTypes {
}

export enum ResponseStatusCodes {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  SERVER_ERROR = 500,
}

const initialState: IContextState = {
  loading: false,
  errors: {},
}

// export const GET_ACCESS_TOKEN = createActions(ActionTypes.GET_ACCESS_TOKEN)
// export const CHECK_TOKEN_VALIDITY = createActions(
//   ActionTypes.CHECK_TOKEN_VALIDITY
// )

export const Context = createContext<any>({
  state: initialState,
})

export const Reducer = (state, action) => {
  switch (action.type) {
    
    default:
      return state
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  
  const memoizedContextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  )

  return (
    <Context.Provider value={memoizedContextValue}>{children}</Context.Provider>
  )
}
