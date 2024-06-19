import HireLayout from '@/layouts/HireLayout'
import React, { useEffect } from 'react'
import DetailJobHire from '../components/DetailJobHire'
import { useDispatch } from 'react-redux'
import { asyncGetDashboardJob } from '@/states/hire/action'

const DetailJobPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetDashboardJob())
  }, [dispatch])

  return (
    <HireLayout>
      <DetailJobHire/>
    </HireLayout>
  )
}

export default DetailJobPage
