import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireReducer } from './hire/reducer'
import { isLoadingReducer } from './loading/reducer'
import { profileReducer } from './profile/reducer'
import { workerReducer } from './worker/reducer'
import { applyReducer } from './applyJob/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  worker: workerReducer,
  hire: hireReducer,
  applyJob: applyReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
