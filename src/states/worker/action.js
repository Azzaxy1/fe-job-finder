import { getAllJob } from '@/services/api'

const ActionType = {
  GET_ALL_JOB: 'GET_ALL_JOB'
}

const getAllJobActionCreator = (resource) => {
  return {
    type: ActionType.GET_ALL_JOB,
    payload: {
      resource
    }
  }
}

const asyncGetAllJob = () => {
  return async (dispatch) => {
    const { resource, success } = await getAllJob()
    if (success) {
      dispatch(getAllJobActionCreator(resource))
    }
  }
}

export { getAllJobActionCreator, ActionType, asyncGetAllJob }
