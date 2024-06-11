import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import PropTypes from 'prop-types'

const ButtonApply = ({ data, user, handleFileChange, cvSelected, handleApply, onOpen, onOpenChange, isOpen }) => {
  return (
    <div className="flex flex-row gap-2 mx-auto md:mx-0 md:flex-col md:ml-auto">
      <Button
        variant="bordered"
        className="font-semibold border-blue text-blue hover:bg-blue hover:text-white"
      >
        <FaRegBookmark /> Simpan
      </Button>
      <Button onPress={onOpen} className="font-semibold text-white bg-blue ">
        Lamar Pekerjaan
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: 'bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.5)]'
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
                  <span className="text-blue">{data.job.company}</span> sebagai{' '}
                  <span className="text-blue">{data.job.title}</span>
                </h2>
              </ModalHeader>
              <ModalBody>
                <h2 className="text-base font-medium">Informasi Kontak</h2>
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
                <Button color="danger" variant="light" onPress={onClose}>
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
  )
}

ButtonApply.propTypes = {
  data: PropTypes.shape({
    job: PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired
    }).isRequired
  }),
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }).isRequired
  ),
  handleFileChange: PropTypes.func.isRequired,
  cvSelected: PropTypes.bool.isRequired,
  handleApply: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default ButtonApply
