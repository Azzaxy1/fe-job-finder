import { combineReducers } from '@reduxjs/toolkit'
import { authUserReducer } from './auth/reducer'
import { hireReducer } from './hire/reducer'
import { isLoadingReducer } from './loading/reducer'
import { profileReducer } from './profile/reducer'

const rootReducer = combineReducers({
  authUser: authUserReducer,
  hire: hireReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
