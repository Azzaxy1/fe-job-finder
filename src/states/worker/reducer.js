import { ActionType } from './action'

const workerReducer = (resource = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_ALL_JOB:
      return action.payload.resource
    case ActionType.APPLY_JOB:
      return action.payload.resource
    default:
      return resource
  }
}

export { workerReducer }
