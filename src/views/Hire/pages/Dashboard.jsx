import React from 'react'
import HireLayout from '@/layouts/HireLayout'
import ListChart from '../components/ListChart'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const hire = useSelector((state) => state.hire)
  return (
    <HireLayout>
      <div className='flex gap-5 w-full flex-wrap'>
        <ListChart title={'Pekerjaan'} data={hire}/>
        <ListChart title={'Pelamar'} data={hire}/>
      </div>
    </HireLayout>
  )
}

export default Dashboard
