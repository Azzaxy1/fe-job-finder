import React from 'react'
import HireLayout from '@/layouts/HireLayout'
import { listJobHire } from '@/utils/local-data'
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const DetailJobHire = () => {
  const { id } = useParams()
  const job = listJobHire.find((job) => job.id === parseInt(id))
  console.log(job)

  if (!job) {
    return (
      <HireLayout>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <h1 className="font-semibold text-8xl">Ooops</h1>
          <h2 className="text-4xl font-semibold text-blue">
            Pekerjaan tidak ditemukan
          </h2>
        </div>
      </HireLayout>
    )
  }

  return (
      <section className="flex flex-col w-full min-h-screen gap-4 mb-10 text-fontColor">
        <Breadcrumbs
          variant="solid"
          underline="hover"
          color="foreground"
          className="flex flex-col text-white"
        >
          <BreadcrumbItem className="text-white">
            <Link to="/manage-jobs">Lowongan Pekerjaan</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-white ">
            {job.title}
          </BreadcrumbItem>
        </Breadcrumbs>
        <Card radius='sm' className='flex flex-col px-5 py-3'>
          <CardHeader className='flex flex-row items-center justify-between gap-1'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl 2xl:text-4xl">
              {job.title}
              </h1>
              <p className="text-sm text-green-500 sm:text-base">{job.salary}</p>
              <p className="text-sm text-[#6b7280] sm:text-base">{job.type}</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] sm:text-base">{job.date}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody><div>{parse(job.description)}</div></CardBody>
        </Card>
      </section>
  )
}

export default DetailJobHire
