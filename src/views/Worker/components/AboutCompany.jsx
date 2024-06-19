import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Image
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import Company from '@/assets/company.png'
import parse from 'html-react-parser'

const AboutCompany = ({ company }) => {
  return (
    <Card radius="sm" className="px-3">
      <CardHeader className="flex flex-col items-start gap-2 ">
        <h2 className="text-lg font-semibold text-blue">Tentang Perusahaan</h2>
        <div className="flex flex-row items-center justify-start w-full gap-4">
            <Image src={company.foto_url === null ? Company : company.foto_url} radius='none' width={100} className='object-cover' />
          <div >
            <p className="text-sm font-semibold sm:text-lg text-fontColor">
              {company.name}
            </p>
            <p className="text-sm font-normal text-gray-600 2xl:text-base">
              {company.address}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col items-start">
        <h4 className="text-sm font-semibold sm:text-base text-fontColor">
          Deskripsi Perusahaan
        </h4>
        <p className="text-sm font-normal text-gray-600 2xl:text-base">
          {parse(company.description)}
        </p>
      </CardBody>
    </Card>
  )
}

AboutCompany.propTypes = {
  company: PropTypes.object
}

export default AboutCompany
