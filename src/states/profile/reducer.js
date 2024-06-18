import { ActionType } from './action'

const initalState = {
  id: null,
  name: '',
  email: '',
  phone: '',
  address: '',
  description: '',
  foto: '',
  foto_url: '',
  file: '',
  file_url: ''
}

const profileReducer = (profile = initalState, action = {}) => {
  switch (action.type) {
    case ActionType.UPDATE_PROFILE:
      return { ...profile, ...action.payload }
    default:
      return profile
  }
}

export { profileReducer }
