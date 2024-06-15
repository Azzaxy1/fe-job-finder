import { login, putAccessToken, register } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT'
}

const loginActionCreator = (authUser) => {
  return {
    type: ActionType.LOGIN,
    payload: {
      authUser
    }
  }
}

const registerActionCreator = (authUser) => {
  return {
    type: ActionType.REGISTER,
    payload: {
      authUser
    }
  }
}

const asyncLogin = ({ email, password }) => {
  return async () => {
    try {
      const token = await login({ email, password })
      putAccessToken(token)
    } catch (error) {
      alert(error.message)
    }
  }
}

const asyncRegister = (userData) => {
  return async () => {
    try {
      const data = await register(userData)
      toast.success(data.message)
    } catch (error) {
      alert(error.message)
    }
  }
}

export { loginActionCreator, asyncLogin, asyncRegister, registerActionCreator, ActionType }
