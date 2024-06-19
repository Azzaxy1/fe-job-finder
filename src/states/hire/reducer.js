import { ActionType } from './action'

const hireDashboardReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_DASHBOARD:
      return action.payload.resource
    default:
      return state
  }
}

const hireDashboardJobReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_DASHBOARD_JOB:
      return action.payload.resource
    case ActionType.POST_DASHBOARD_JOB:
      return [
        ...state,
        action.payload.resource
      ]
    case ActionType.UPDATE_DASHBOARD_JOB:
      // eslint-disable-next-line no-case-declarations
      const updatedJobIndex = state.findIndex(job => job.id === action.payload.resource.id)
      // eslint-disable-next-line multiline-ternary
      return updatedJobIndex !== -1 ? [
        ...state.slice(0, updatedJobIndex),
        action.payload.resource,
        ...state.slice(updatedJobIndex + 1)
      ]
        : state
    case ActionType.DELETE_DASHBOARD_JOB:
      return state.filter(job => job.id !== action.payload.resource.id)
    default:
      return state
  }
}

export { hireDashboardReducer, hireDashboardJobReducer }
