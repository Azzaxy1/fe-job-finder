import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireReducer } from './hire/reducer'
import { isLoadingReducer } from './loading/reducer'
import { profileReducer } from './profile/reducer'
import { workerReducer } from './worker/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  worker: workerReducer,
  hire: hireReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
