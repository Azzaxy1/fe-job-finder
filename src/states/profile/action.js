import { updateProfile } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  UPDATE_PROFILE: 'UPDATE_PROFILE'
}

const updateProfileActionCreator = (profile) => {
  return {
    type: ActionType.UPDATE_PROFILE,
    payload: profile
  }
}

const asyncUpdateProfile = (userData) => {
  return async (dispatch) => {
    try {
      const { success, message, resource } = await updateProfile(userData)
      if (success) {
        dispatch(updateProfileActionCreator(resource))
        toast.success(`${message}, please refresh to see changes`)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export { updateProfileActionCreator, ActionType, asyncUpdateProfile }
