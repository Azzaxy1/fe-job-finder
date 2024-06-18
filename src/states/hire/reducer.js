import { ActionType } from './action'

const hireReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_DASHBOARD:
      return action.payload.resource
    default:
      return state
  }
}

export { hireReducer }
