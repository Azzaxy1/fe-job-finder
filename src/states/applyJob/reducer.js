import { ActionType } from './action'

const applyReducer = (applyJob = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_APPLY_JOB:
      return action.payload.resource
    case ActionType.GET_ALL_APPLY_JOB:
      return action.payload.resource
    case ActionType.APPLY_JOB:
      return applyJob
    default:
      return applyJob
  }
}

export { applyReducer }
