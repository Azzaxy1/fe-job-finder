import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ChartUser = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Pelamar',
        data: [28, 48, 40, 19, 86],
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  }
  const totalPelamar = data.datasets[0].data.reduce((a, b) => a + b, 0)

  return (
    <section className="flex flex-col gap-4">
      <Bar data={data} />
      <p className="text-sm sm:text-base">
        Total pelamar sekarang adalah :{' '}
        <span className="font-bold text-blue">{totalPelamar}</span>
      </p>
    </section>
  )
}

export default ChartUser
