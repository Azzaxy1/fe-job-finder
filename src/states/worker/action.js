import { applyJob, getAllJob } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  GET_ALL_JOB: 'GET_ALL_JOB',
  APPLY_JOB: 'APPLY_JOB'
}

const getAllJobActionCreator = (resource) => {
  return {
    type: ActionType.GET_ALL_JOB,
    payload: {
      resource
    }
  }
}

const applyJobActionCreator = (resource) => {
  return {
    type: ActionType.APPLY_JOB,
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

const asyncApplyJob = ({ id }) => {
  return async (dispatch) => {
    try {
      const { success, message } = await applyJob({ id })
      if (success) {
        dispatch(applyJobActionCreator({ success, message }))
        toast.success(message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export { getAllJobActionCreator, ActionType, asyncGetAllJob, asyncApplyJob }
