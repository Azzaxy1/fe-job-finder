// const { login, putAccessToken } = require('@/services/api')
import { login, putAccessToken } from '@/services/api'

const ActionType = {
  LOGIN: 'LOGIN',
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

export { loginActionCreator, asyncLogin, ActionType }
