import React, { useEffect } from 'react'
import { getMonthName } from '@/utils/index.js'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetDashboard } from '@/states/hire/action'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ChartJob = () => {
  const dispatch = useDispatch()

  const hire = useSelector((state) => state.hire)

  const labelsJob = hire.recordsJobs ? Object.keys(hire.recordsJobs).map((date) => getMonthName(date)) : []
  const dataValues = hire.recordsJobs ? Object.values(hire.recordsJobs) : []

  const data = {
    labels: labelsJob,
    datasets: [
      {
        label: 'Total Pekerjaan',
        data: dataValues,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  }

  useEffect(() => {
    dispatch(asyncGetDashboard())
  }, [dispatch])

  return (
    <section className="flex flex-col gap-4">
      <Line data={data} />
      <p className="text-sm sm:text-base">
        Total pekerjaan sekarang adalah :{' '}
        <span className="font-bold text-blue">{hire.totalJobs}</span>
      </p>
    </section>
  )
}

export default ChartJob
