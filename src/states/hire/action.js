import { getDashboardJob } from '@/services/api'

const ActionType = {
  GET_DASHBOARD: 'GET_DASHBOARD'
}

const getDashboardActionCreator = (resource) => {
  return {
    type: ActionType.GET_DASHBOARD,
    payload: {
      resource
    }
  }
}

const asyncGetDashboard = () => {
  return async (dispatch) => {
    const resource = await getDashboardJob()
    dispatch(getDashboardActionCreator(resource))
  }
}

export { getDashboardActionCreator, asyncGetDashboard, ActionType }
