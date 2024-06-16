import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireReducer } from './hire/reducer'
import { isLoadingReducer } from './loading/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  hire: hireReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
