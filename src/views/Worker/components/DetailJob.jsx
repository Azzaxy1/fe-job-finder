import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  useDisclosure
} from '@nextui-org/react'
import toast from 'react-hot-toast'
import parse from 'html-react-parser'
import { data, user } from '@/utils/local-data'

import Company1 from '@/assets/landing/company/company1.svg'
import AboutCompany from './AboutCompany'
import ButtonApply from './ButtonApply'

const DetailJob = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [cvSelected, setCvSelected] = useState(false)

  const handleFileChange = (e) => {
    e.target.files.length > 0 ? setCvSelected(true) : setCvSelected(false)
  }

  const handleApply = () => {
    toast.success('Lamaran berhasil dikirim')
    onOpenChange(false)
  }

  return (
    <>
      {data.map((data, index) => (
        <section key={index} className="flex flex-col w-full gap-4 pl-4">
          <Card radius="sm" className="w-full px-3 pt-2">
            <CardHeader className="flex flex-col items-center gap-6 md:justify-center md:flex-row">
              <div className="me-auto">
                <Image
                  src={Company1}
                  alt="image"
                  radius="none"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col me-auto md:-ml-28">
                <h2 className="text-base font-medium sm:text-lg">
                  {data.job.title}
                </h2>
                <h4 className="text-sm sm:text-base text-blue">
                  {data.job.company}
                </h4>
                <p className="text-sm sm:text-base text-[#16a34a]">
                  {data.job.salary}
                </p>
                <p className="text-sm sm:text-base">
                  {data.job.location} - {data.job.type}
                </p>
              </div>
              <ButtonApply data={data} user={user} onOpen={onOpen} onOpenChange={onOpenChange} isOpen={isOpen} handleApply={handleApply} handleFileChange={handleFileChange} cvSelected={cvSelected}/>
            </CardHeader>
            <CardBody className="flex flex-col border-t-2">
              <h2 className="text-base font-medium sm:text-xl text-blue">
                Informasi Pekerjaan
              </h2>
              <div className="flex flex-col gap-2 pt-2">
                <div>{parse(data.job.description)}</div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-sm text-gray-600">{data.job.date}</p>
            </CardFooter>
          </Card>
          <AboutCompany company={data.company} />
        </section>
      ))}
    </>
  )
}

export default DetailJob
