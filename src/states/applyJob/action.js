import { applyJob, getApplyJob } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  APPLY_JOB: 'APPLY_JOB',
  GET_APPLY_JOB: 'GET_APPLY_JOB'
}

const applyJobActionCreator = () => {
  return {
    type: ActionType.APPLY_JOB
  }
}

const getApplyJobActionCreator = (resource) => {
  return {
    type: ActionType.GET_APPLY_JOB,
    payload: {
      resource
    }
  }
}

const asyncGetApplyJob = () => {
  return async (dispatch) => {
    try {
      const { success, resource } = await getApplyJob()
      if (success) {
        dispatch(getApplyJobActionCreator(resource))
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
        dispatch(applyJobActionCreator())
        toast.success(message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export { ActionType, asyncGetApplyJob, asyncApplyJob, getApplyJobActionCreator }
