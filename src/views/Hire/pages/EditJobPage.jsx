import HireLayout from '@/layouts/HireLayout'
import React, { useEffect } from 'react'
import EditJobForm from '../components/EditJobForm'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncGetDashboardJob } from '@/states/hire/action'

const EditJobPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetDashboardJob())
  }, [dispatch])

  return (
    <HireLayout>
      <EditJobForm id={id} />
    </HireLayout>
  )
}

export default EditJobPage
