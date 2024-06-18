import { getAllJob } from '@/services/api'
import toast from 'react-hot-toast'

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
    try {
      const { resource, success } = await getAllJob()
      if (success) {
        dispatch(getAllJobActionCreator(resource))
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export { getAllJobActionCreator, ActionType, asyncGetAllJob }
