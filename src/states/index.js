import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { thunk } from 'redux-thunk'

// Fungsi untuk memuat state dari localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authUser')
    if (serializedState === null) {
      return undefined
    }
    return { authUser: JSON.parse(serializedState) }
  } catch (err) {
    toast.error('Could not load state', err)
    return undefined
  }
}

// Fungsi untuk menyimpan state ke localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.authUser)
    localStorage.setItem('authUser', serializedState)
  } catch (err) {
    toast.error('Could not save state', err)
  }
}

// Muat state awal dari localStorage jika ada
const preloadedState = loadState()

// Konfigurasi store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState
})

// Simpan state ke localStorage setiap kali state berubah
store.subscribe(() => {
  saveState(store.getState())
})
