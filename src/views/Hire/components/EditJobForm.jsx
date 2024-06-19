import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackButton from '@/components/common/BackButton.jsx'
import { typeJob } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { asyncEditJob } from '@/states/hire/action'
import PropTypes from 'prop-types'
import { formatHtmlToTextPlaceholder } from '@/utils'
import ReactQuill from 'react-quill'

const EditJobForm = ({ id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listJobHire = useSelector((state) => state.hireDashboardJob)
  const job = listJobHire?.find((job) => job.id === parseInt(id))

  const [formData, setFormData] = useState({
    title: job?.title || '',
    company: job?.company || '',
    location: job?.company || '',
    salarymin: job?.salarymin || '',
    salarymax: job?.salarymax || '',
    type: job?.type || ''
  })

  const [description, setDescription] = useState(job?.description || '')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = async (selectedValue) => {
    const value = selectedValue.target.value
    const selectName = typeJob.find((type) => type.id === parseInt(value))
    setFormData({ ...formData, type: selectName.name })
  }

  const onEditJobHandler = (e) => {
    e.preventDefault()
    dispatch(asyncEditJob({ ...formData, description, id: parseInt(id) }, navigate))
  }

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
          <h2 className='text-lg font-semibold md:text-xl'>Ubah Lowongan Pekerjaan</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className='flex flex-col gap-2'>
            <div>
              <Input
                type={'text'}
                label={'Posisi'}
                variant='bordered'
                radius='sm'
                placeholder={'Fullstack Developer'}
                labelPlacement='outside'
                name='title'
                id='title'
                value={formData.title}
                onChange={handleInputChange}
                />
            </div>
            <div>
              <Input
                type={'text'}
                label={'Perusahaan'}
                variant='bordered'
                radius='sm'
                placeholder={'PT Presentologics'}
                labelPlacement='outside'
                name='company'
                id='company'
                value={formData.company}
                onChange={handleInputChange}
                />
            </div>
            <div>
              <Input
                type={'text'}
                label={'Lokasi'}
                variant='bordered'
                radius='sm'
                placeholder={'Serang, Banten'}
                labelPlacement='outside'
                name='location'
                id='location'
                value={formData.location}
                onChange={handleInputChange}
                />
            </div>
            <div className='flex gap-5'>
              <Input
                type={'text'}
                label={'Gaji Minimal'}
                variant='bordered'
                radius='sm'
                placeholder={'Rp. 1.000.000'}
                labelPlacement='outside'
                name='salarymin'
                id='salarymin'
                value={formData.salarymin}
                onChange={handleInputChange}
                />
              <Input
                type={'text'}
                label={'Gaji Maksimal'}
                variant='bordered'
                radius='sm'
                placeholder={'Rp. 10.000.000'}
                labelPlacement='outside'
                name='salarymax'
                id='salarymax'
                value={formData.salarymax}
                onChange={handleInputChange}
                />
            </div>
              <Select
                label="Tipe"
                variant='bordered'
                placeholder={formData.type}
                labelPlacement='outside'
                radius='sm'
                name='type'
                id='type'
                value={formData.type}
                onChange={handleSelectChange}
              >
                {typeJob.map((type) => (
                  <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                ))}
              </Select>
            <div>
              <label htmlFor="description">Deskripsi</label>
              <ReactQuill style={{ border: '1px solid #ccc', overflow: 'auto' }} className='h-[300px] w-full' onChange={setDescription} placeholder={formatHtmlToTextPlaceholder(description)} />
              </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-center w-full gap-4 pt-4">
            <Button radius="sm" size='md' className="text-white bg-blue" onClick={onEditJobHandler}>
              Ubah Pekerjaan
            </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

EditJobForm.propTypes = {
  id: PropTypes.any.isRequired
}

export default EditJobForm
