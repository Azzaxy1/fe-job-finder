import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { useQuill } from 'react-quilljs'
import { Link } from 'react-router-dom'
import BackButton from '@/components/common/BackButton.jsx'
import { inputJob, typeJob } from '../index'

const CreateJobForm = () => {
  const { quillRef } = useQuill()

  return (
    <section className='flex flex-col w-full min-h-screen gap-4 mb-10 text-fontColor'>
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
            Buat Lowongan Pekerjaan
          </BreadcrumbItem>
        </Breadcrumbs>
      <Card radius='sm' className='flex flex-col px-5 py-3 pb-4'>
        <CardHeader className='flex flex-col items-start justify-start gap-3'>
          <BackButton/>
          <h2 className='text-lg font-semibold md:text-xl'>Buat Lowongan Pekerjaan</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form className='flex flex-col gap-2'>
            {inputJob.map((input) => (
              <div key={input.id}>
                <Input
                  type={input.type}
                  label={input.label}
                  variant='bordered'
                  radius='sm'
                  placeholder={input.placeholder}
                  labelPlacement='outside'
                  />
              </div>
            ))}
              <Select
                label="Tipe"
                variant='bordered'
                placeholder='Pilih tipe pekerjaan'
                labelPlacement='outside'
                radius='sm'
              >
                {typeJob.map((type) => (
                  <SelectItem key={type.id}>{type.name}</SelectItem>
                ))}
              </Select>
            <div>
              <label htmlFor="description">Deskripsi</label>
              <div style={{ height: 200 }} className="w-full mt-2">
                <div ref={quillRef}/>
              </div>
            </div>
          </form>
        </CardBody>
        <CardFooter className="flex flex-col items-center w-full gap-4 pt-4">
          <Button radius="sm" size='md' className="text-white bg-blue">
            Tambah Pekerjaan
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default CreateJobForm
