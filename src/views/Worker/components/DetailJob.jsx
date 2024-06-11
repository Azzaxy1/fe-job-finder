import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import { FaRegBookmark } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import { data, user } from '@/utils/local-data'

import Company1 from '@/assets/landing/company/company1.svg'
import AboutCompany from './AboutCompany'

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
              <div className="flex flex-row gap-2 mx-auto md:mx-0 md:flex-col md:ml-auto">
                <Button
                  variant="bordered"
                  className="font-semibold border-blue text-blue hover:bg-blue hover:text-white"
                >
                  <FaRegBookmark /> Simpan
                </Button>
                <Button
                  onPress={onOpen}
                  className="font-semibold text-white bg-blue "
                >
                  Lamar Pekerjaan
                </Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  classNames={{
                    backdrop:
                      'bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.5)]'
                  }}
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: 'easeOut'
                        }
                      },
                      exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: 'easeIn'
                        }
                      }
                    }
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          <h2 className="text-base font-medium sm:text-lg">
                            Lamar Pekerjaan{' '}
                            <span className="text-blue">
                              {data.job.company}
                            </span>{' '}
                            sebagai{' '}
                            <span className="text-blue">{data.job.title}</span>
                          </h2>
                        </ModalHeader>
                        <ModalBody>
                          <h2 className="text-base font-medium">
                            Informasi Kontak
                          </h2>
                          {user.map((user, index) => (
                            <div key={index}>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="name">Nama</label>
                                <p className="text-sm">{user.name}</p>
                              </div>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="email">Email</label>
                                <p className="text-sm">{user.email}</p>
                              </div>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="phone">No Hp</label>
                                <p className="text-sm">{user.phone}</p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label htmlFor="cv">Pilih CV</label>
                                <div className="relative">
                                  <input
                                    type="file"
                                    name="cv"
                                    id="cv"
                                    className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                  />
                                  {cvSelected
                                    ? (
                                    <div className="px-4 py-2 text-sm text-center text-white bg-green-500 rounded cursor-pointer">
                                      CV telah dipilih
                                    </div>
                                      )
                                    : (
                                    <div className="px-4 py-2 text-sm text-center text-white bg-blue-500 rounded cursor-pointer">
                                      Upload CV
                                    </div>
                                      )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Batal
                          </Button>
                          <Button color="primary" onPress={handleApply}>
                            Kirim
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </CardHeader>
            <CardBody className="flex flex-col border-t-2">
              <h2 className="text-base font-medium sm:text-xl text-blue">
                Informasi Pekerjaan
              </h2>
              <div className="flex flex-col gap-2 pt-2">
                <h4 className="text-base font-medium sm:text-lg">
                  Syarat Pekerjaan :
                </h4>
                <ul>
                  {data.job.requirements.map((requirement, index) => (
                    <li key={index}>
                      {index + 1}. {requirement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">
                  Kualifikasi Keahlian :
                </h4>
                <ul>
                  {data.job.skills.map((skill, idx) => (
                    <li key={idx}>
                      {idx + 1}. {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">Benefit :</h4>
                <ul>
                  {data.job.benefit.map((benefit, idx) => (
                    <li key={idx}>
                      {idx + 1}. {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">
                  Tanggung Jawab :
                </h4>
                <ul>
                  {data.job.responsibility.map((resp, idx) => (
                    <li key={idx}>
                      {idx + 1}. {resp}
                    </li>
                  ))}
                </ul>
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
