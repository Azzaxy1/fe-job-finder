import React from 'react'
import HireLayout from '@/layouts/HireLayout'
import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import BackButton from '@/components/common/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate, formatRupiah } from '@/utils'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { asyncDeleteJob } from '@/states/hire/action'

const DetailJobHire = () => {
  const { id } = useParams()
  const listJobHire = useSelector((state) => state.hireDashboardJob)
  const job = listJobHire?.find((job) => job.id === parseInt(id))
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickEdit = () => {
    navigate(`/edit-job/${job.id}`)
  }

  const handleClickDelete = () => {
    dispatch(asyncDeleteJob({ id }, navigate))
  }

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
        <Card radius='sm' className='flex flex-col px-2 md:px-5 py-3'>
          <CardHeader className='flex justify-between'>
            <BackButton/>
            <div className='flex gap-1 md:gap-3'>
              <Button className='flex flex-row items-center font-semibold text-white bg-yellow-600' size='sm' onClick={handleClickEdit}>
                <FaPencilAlt/>
                Edit
              </Button>
              <Button className='flex flex-row items-center font-semibold text-white bg-red-600' size='sm' onClick={handleClickDelete}>
                <FaTrash/>
                Hapus
              </Button>
            </div>
          </CardHeader>
          <CardBody className='flex flex-row items-center justify-between gap-1'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl 2xl:text-4xl">
              {job.title}
              </h1>
              <p className="text-sm text-[#6b7280] sm:text-base">{job.type}</p>
              <p className="text-sm text-green-500 sm:text-base">{formatRupiah(job.salarymin)} - {formatRupiah(job.salarymax)}</p>
            </div>
            <div>
              <p className="text-sm text-[#6b7280] sm:text-base">{formatDate(job.created_at)}</p>
            </div>
          </CardBody>
          <Divider/>
          <CardFooter><div>{parse(job.description)}</div></CardFooter>
        </Card>
      </section>
  )
}

export default DetailJobHire
