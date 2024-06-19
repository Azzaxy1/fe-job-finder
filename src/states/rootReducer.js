import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireDashboardJobReducer, hireDashboardReducer } from './hire/reducer'
import { isLoadingReducer } from './loading/reducer'
import { profileReducer } from './profile/reducer'
import { workerReducer } from './worker/reducer'
import { applyReducer } from './applyJob/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  worker: workerReducer,
  hireDashboard: hireDashboardReducer,
  hireDashboardJob: hireDashboardJobReducer,
  applyJob: applyReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
