import React from 'react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ChartLoker = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Loker',
        data: [28, 48, 40, 19, 50],
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  }

  const totalLoker = data.datasets[0].data.reduce((a, b) => a + b, 0)

  return (
    <section className="flex flex-col gap-4">
      <Line data={data} />
      <p className="text-sm sm:text-base">
        Total loker sekarang adalah :{' '}
        <span className="font-bold text-blue">{totalLoker}</span>
      </p>
    </section>
  )
}

export default ChartLoker
