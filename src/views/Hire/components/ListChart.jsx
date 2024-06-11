import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import ChartLoker from './ChartLoker'
import ChartUser from './ChartUser'

const ListChart = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <div>
        <h2 className='text-xl font-semibold'>Dashboard</h2>
      </div>
      <div className='flex flex-col w-full gap-10 mb-4 md:flex-row'>
        <Card radius="none" className="w-full md:w-[48%] h-fit md:h-fit p-5">
          <CardBody className="w-full">
            <ChartLoker />
          </CardBody>
        </Card>
        <Card radius="none" className="w-full md:w-[48%] h-fit md:h-fit p-5">
          <CardBody className="w-full">
            <ChartUser />
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default ListChart
