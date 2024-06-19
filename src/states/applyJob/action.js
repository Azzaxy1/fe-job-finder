import { applyJob, getAllApplyJob, getApplyJob, updateApplyJob } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  APPLY_JOB: 'APPLY_JOB',
  GET_APPLY_JOB: 'GET_APPLY_JOB',
  GET_ALL_APPLY_JOB: 'GET_ALL_APPLY_JOB'
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

const getAllApplyJobActionCreator = (resource) => {
  return {
    type: ActionType.GET_ALL_APPLY_JOB,
    payload: {
      resource
    }
  }
}

const asyncGetAllApplyJob = () => {
  return async (dispatch) => {
    try {
      const { success, resource } = await getAllApplyJob()
      if (success) {
        dispatch(getAllApplyJobActionCreator(resource))
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

const asyncUpdateApplyJob = ({ id, status, idUser }) => {
  return async (dispatch) => {
    try {
      const { success, message } = await updateApplyJob({ id, status, idUser })
      if (success) {
        dispatch(asyncGetAllApplyJob())
        toast.success(message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export {
  ActionType,
  asyncGetApplyJob,
  asyncApplyJob,
  getApplyJobActionCreator,
  getAllApplyJobActionCreator,
  asyncGetAllApplyJob,
  asyncUpdateApplyJob
}
