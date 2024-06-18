import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
