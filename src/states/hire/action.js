import { addJob, deleteJob, editJob, getDashboard, getDashboardJob } from '@/services/api'
import toast from 'react-hot-toast'

const ActionType = {
  GET_DASHBOARD: 'GET_DASHBOARD',
  GET_DASHBOARD_JOB: 'GET_DASHBOARD_JOB',
  POST_DASHBOARD_JOB: 'POST_DASHBOARD_JOB',
  UPDATE_DASHBOARD_JOB: 'UPDATE_DASHBOARD_JOB',
  DELETE_DASHBOARD_JOB: 'DELETE_DASHBOARD_JOB'
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
    const resource = await getDashboard()
    dispatch(getDashboardActionCreator(resource))
  }
}

const postDashboardJobActionCreator = (resource) => {
  return {
    type: ActionType.POST_DASHBOARD_JOB,
    payload: {
      resource
    }
  }
}

const updateDashboardJobActionCreator = (resource) => {
  return {
    type: ActionType.UPDATE_DASHBOARD_JOB,
    payload: {
      resource
    }
  }
}

const deleteDashboardJobActionCreator = (resource) => {
  return {
    type: ActionType.DELETE_DASHBOARD_JOB,
    payload: {
      resource
    }
  }
}

const getDashboardJobActionCreator = (resource) => {
  return {
    type: ActionType.GET_DASHBOARD_JOB,
    payload: {
      resource
    }
  }
}

const asyncGetDashboardJob = () => {
  return async (dispatch) => {
    const resource = await getDashboardJob()
    dispatch(getDashboardJobActionCreator(resource))
  }
}

const asyncAddJob = ({ title, company, location, salarymin, salarymax, type, description }, navigate) => {
  return async (dispatch) => {
    try {
      const { success, message, resource } = await addJob({ title, company, location, salarymin, salarymax, type, description })
      if (success) {
        dispatch(postDashboardJobActionCreator(resource))
        toast.success(`${message}`)
        navigate('/manage-jobs')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

const asyncEditJob = ({ title, company, location, salarymin, salarymax, type, description, id }, navigate) => {
  return async (dispatch) => {
    try {
      const { success, message, resource } = await editJob({ title, company, location, salarymin, salarymax, type, description, id })
      if (success) {
        dispatch(updateDashboardJobActionCreator(resource))
        toast.success(`${message}`)
        navigate('/manage-jobs')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

const asyncDeleteJob = ({ id }, navigate) => {
  return async (dispatch) => {
    try {
      const { success, message, resource } = await deleteJob({ id })
      if (success) {
        dispatch(deleteDashboardJobActionCreator(resource))
        toast.success(`${message}`)
        navigate('/manage-jobs')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export {
  getDashboardActionCreator,
  asyncGetDashboard,
  asyncGetDashboardJob,
  getDashboardJobActionCreator,
  asyncAddJob,
  asyncEditJob,
  asyncDeleteJob,
  ActionType
}
