import HireLayout from '@/layouts/HireLayout'
import React, { useEffect } from 'react'
import TableAppyler from '../components/TableAppyler'
import { useDispatch } from 'react-redux'
import { asyncGetAllApplyJob } from '@/states/applyJob/action'
import { asyncGetAllJob } from '@/states/worker/action'

const ManageApplyer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetAllApplyJob())
    dispatch(asyncGetAllJob())
  }, [dispatch])
  return (
    <HireLayout>
      <TableAppyler/>
    </HireLayout>
  )
}

export default ManageApplyer
