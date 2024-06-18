import { getUserLogged } from '@/services/api'
import { loginActionCreator } from '../auth/action'

const ActionType = {
  SET_IS_LOADING: 'SET_IS_LOADING'
}

const setIsLoadingActionCreator = (isLoading) => {
  return {
    type: ActionType.SET_IS_LOADING,
    payload: {
      isLoading
    }
  }
}

const asyncIsLoadingProccess = () => {
  return async (dispatch) => {
    try {
      const authUser = await getUserLogged()
      dispatch(loginActionCreator(authUser))
    } catch (error) {
      dispatch(loginActionCreator(null))
    } finally {
      dispatch(setIsLoadingActionCreator(false))
    }
  }
}

export { setIsLoadingActionCreator, asyncIsLoadingProccess, ActionType }
