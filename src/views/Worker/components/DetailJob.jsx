import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  useDisclosure
} from '@nextui-org/react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate, formatRupiah } from '@/utils'

import AboutCompany from './AboutCompany'
import ButtonApply from './ButtonApply'
import Company from '@/assets/company.png'
import { asyncApplyJob } from '@/states/applyJob/action'

const statusColorMap = {
  pending: 'danger',
  accept: 'success',
  rejected: 'warning'
}

const DetailJob = ({ jobId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [data, setData] = useState(null)
  const jobs = useSelector((state) => state.worker)
  const applyJob = useSelector((state) => state.applyJob)
  const job = applyJob.find((job) => job.id_job === jobId)
  const dispatch = useDispatch()

  useEffect(() => {
    const jobData = jobs.find((job) => job.id === jobId)
    setData(jobData)
  }, [jobs, jobId])

  const handleApply = () => {
    dispatch(asyncApplyJob({ id: data.id }))
    onOpenChange(false)
  }

  return (
    <>
      {data && (
        <section className="flex flex-col w-full gap-4 pl-4 ">
          <Card radius="sm" className="w-full px-3 pt-2">
            <CardHeader className="flex flex-col items-center gap-6 md:justify-start md:flex-row">
              <div>
                <Image
                  src={data.get_user.foto_url === null ? Company : data.get_user.foto_url}
                  alt="image"
                  radius="none"
                  width={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className='flex items-center gap-3'>
                  <h2 className="text-base font-medium sm:text-lg">
                    {data.title}
                  </h2>
                  {job &&
                  <Chip className="text-sm capitalize" radius='sm' color={statusColorMap[job.status]} size="sm" variant="flat">
                    {job.status}
                  </Chip>
                  }
                </div>
                <h4 className="text-sm sm:text-base text-blue">
                  {data.company}
                </h4>
                <p className="text-sm text-green-500 sm:text-base">
                  {formatRupiah(data.salarymin)} - {formatRupiah(data.salarymax)}
                </p>
                <p className="text-sm sm:text-base">
                  {data.location} - <span className='font-semibold text-blue'>{data.type}</span>
                </p>
              </div>
              <ButtonApply data={data} onOpen={onOpen} onOpenChange={onOpenChange} isOpen={isOpen} handleApply={handleApply}/>
            </CardHeader>
            <CardBody className="flex flex-col border-t-2">
              <h2 className="text-base font-medium sm:text-xl text-blue">
                Informasi Pekerjaan
              </h2>
              <div className="flex flex-col gap-2 pt-2">
                <div>{parse(data.description)}</div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-sm text-gray-600">{formatDate(data.created_at)}</p>
            </CardFooter>
          </Card>
          <AboutCompany company={data.get_user} />
        </section>
      )}
    </>
  )
}

DetailJob.propTypes = {
  jobId: PropTypes.number
}

export default DetailJob
