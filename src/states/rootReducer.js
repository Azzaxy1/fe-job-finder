import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer
})

export default rootReducer
