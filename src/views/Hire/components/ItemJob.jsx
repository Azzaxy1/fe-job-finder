import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { truncateDescription } from '@/utils/index'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ItemJob = ({ job }) => {
  return (
    <section>
      <Card radius='sm' className="w-full md:max-w-[450px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <h2 className="text-base font-medium sm:text-lg hover:underline">
              <Link to={`/manage-jobs/${job.id}`}>{job.title}</Link>
            </h2>
            <p className="text-sm text-green-500 sm:text-base">{job.salary}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <div>{parse(truncateDescription(job.description, 100))}</div>
        </CardBody>
        <Divider/>
        <CardFooter>
          <p className="text-sm  text-[#6b7280] px-5 w-full flex justify-end items-center gap-2">
          <MdOutlineWatchLater />
          {job.date}
        </p>
        </CardFooter>
      </Card>
    </section>
  )
}

ItemJob.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default ItemJob
