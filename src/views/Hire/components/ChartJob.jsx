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
import { useDispatch } from 'react-redux'
import { asyncGetDashboard } from '@/states/hire/action'
import PropTypes from 'prop-types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ChartJob = ({ title, data }) => {
  const dispatch = useDispatch()

  const labelsJob = title === 'Pekerjaan' ? (data.recordsJobs ? Object.keys(data.recordsJobs).map((date) => getMonthName(date)) : []) : (data.recordsApply ? Object.keys(data.recordsApply).map((date) => getMonthName(date)) : [])
  const dataValues = title === 'Pelamar' ? (data.recordsJobs ? Object.values(data.recordsJobs) : []) : (data.recordsApply ? Object.values(data.recordsApply) : [])

  const dataChart = {
    labels: labelsJob,
    datasets: [
      {
        label: `Total ${title}`,
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
      <Line data={dataChart} />
      <p className="text-sm sm:text-base">
        Total {title} sekarang adalah :{' '}
        <span className="font-bold text-blue">{title === 'Pekerjaan' ? data.totalJobs : data.totalApply}</span>
      </p>
    </section>
  )
}

ChartJob.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired
}

export default ChartJob
