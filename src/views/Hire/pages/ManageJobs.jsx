import React, { useEffect } from 'react'
import HireLayout from '@/layouts/HireLayout'
import Listjob from '../components/Listjob'
import { useDispatch } from 'react-redux'
import { asyncGetDashboardJob } from '@/states/hire/action'

const ManageJobs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetDashboardJob())
  }, [dispatch])

  return (
    <HireLayout>
      <Listjob />
    </HireLayout>
  )
}

export default ManageJobs
