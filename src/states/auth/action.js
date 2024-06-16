import { getUserLogged, login, logout, putAccessToken, register } from '@/services/api'
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

const logoutActionCreator = () => {
  return {
    type: ActionType.LOGOUT
  }
}

const asyncLogin = ({ email, password }, navigate) => {
  return async (dispatch) => {
    try {
      const { resource, message } = await login({ email, password })
      putAccessToken(resource)

      const authUser = await getUserLogged()
      dispatch(loginActionCreator(authUser))
      toast.success(message)

      if (authUser.role === 'worker') {
        navigate('/')
      } else {
        navigate('/hire-dashboard')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

const asyncRegister = (userData, navigate) => {
  return async () => {
    try {
      const { message, success } = await register(userData)
      console.log(message, success)

      if (success) {
        navigate('/login')
        toast.success(message)
      }
    } catch (error) {
      const errorMessage = JSON.parse(error.message)
      if (errorMessage) {
        for (const field in errorMessage) {
          if (Object.prototype.hasOwnProperty.call(errorMessage, field)) {
            toast.error(`${errorMessage[field].join(', ')}`)
          }
        }
      } else {
        toast.error('An unknown error occurred')
      }
    }
  }
}

const asyncLogout = () => {
  return async (dispatch) => {
    try {
      const message = await logout()
      localStorage.removeItem('accessToken')
      dispatch(logoutActionCreator())
      toast.success(message)
    } catch (error) {
      alert(error.message)
    }
  }
}

export { loginActionCreator, asyncLogin, asyncRegister, registerActionCreator, ActionType, asyncLogout }
