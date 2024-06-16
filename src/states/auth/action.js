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
      localStorage.setItem('authUser', JSON.stringify(authUser))
      dispatch(loginActionCreator(authUser))
      toast.success(message)

      if (authUser.role === 'worker') {
        navigate('/')
      } else {
        navigate('/hire-dashboard')
      }
    } catch (error) {
      alert(error.message)
    }
  }
}

const asyncRegister = (userData) => {
  return async () => {
    try {
      const data = await register(userData)
      console.log(data)

      toast.success(data.message)
    } catch (error) {
      alert(error.message)
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
