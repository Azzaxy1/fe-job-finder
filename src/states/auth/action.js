// const { login, putAccessToken } = require('@/services/api')
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

      console.log(token)
    } catch (error) {
      alert(error.message)
    }
  }
}

const asyncRegister = ({ name, email, phone, password, confirmPassword, role }) => {
  return async () => {
    try {
      const { message } = await register({ name, email, phone, password, confirmPassword, role })
      console.log(role)
      toast.success(message)
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export { loginActionCreator, asyncLogin, asyncRegister, registerActionCreator, ActionType }
