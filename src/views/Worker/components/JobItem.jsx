import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { formatDate } from '@/utils'

const JobItem = ({ job }) => {
  return (
    <section className="flex flex-col pb-3">
      <Card
        shadow="sm"
        radius="sm"
        isPressable
        onPress={() => console.log('Job')}
      >
        <div className="flex flex-row max-w-sm max-h-36">
          <CardBody className="flex items-center justify-center pt-5 -mx-12">
            <Image
              radius="none"
              src={job.image}
              alt="Card image background"
              className="object-cover w-[50px]"
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start justify-start w-[600px] text-small">
            <h2 className="text-base font-medium">{job.title}</h2>
            <h4 className="text-sm text-blue ">{job.company}</h4>
            <p className="text-sm text-[#16a34a]"> Rp. {job.salarymin} - {job.salarymax}</p>
            <p className="text-sm text-start">{job.location}</p>
          </CardFooter>
        </div>
        <p className="text-sm py-2 border-t-2 text-[#6b7280]  px-5 w-full flex justify-end items-center gap-2">
          <MdOutlineWatchLater />
          {formatDate(job.get_user.created_at)}
        </p>
      </Card>
    </section>
  )
}

JobItem.propTypes = {
  job: PropTypes.object
}

export default JobItem
