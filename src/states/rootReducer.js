import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireReducer } from './hire/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  hire: hireReducer
})

export default rootReducer
