import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import ChartJob from './ChartJob'
import PropTypes from 'prop-types'

const ListChart = ({ title, data }) => {
  return (
    <section className="flex flex-col w-full gap-4">
      <div>
        <h2 className='text-lg font-semibold md:text-xl'>Dashboard {title}</h2>
      </div>
      <div className='flex flex-col w-full gap-10 mb-4 md:flex-row'>
        <Card radius="none" className="w-full p-5 h-fit md:h-fit">
          <CardBody className="w-full">
            <ChartJob title={title} data={data}/>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

ListChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired
}

export default ListChart
