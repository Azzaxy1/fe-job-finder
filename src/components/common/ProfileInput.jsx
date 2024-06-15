import React, { useState } from 'react'
import { useQuill } from 'react-quilljs'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import ImgCompany from '@/assets/landing/company/company4.svg'

const ProfileInput = ({ type }) => {
  const [cvSelected, setCvSelected] = useState(false)
  const [profileImage, setProfileImage] = useState(
    type === 'hire' ? ImgCompany : 'https://i.pravatar.cc/300'
  )
  const { quillRef } = useQuill()

  const inputProfile = [
    {
      id: 1,
      name: 'Name',
      placeholder: 'John Doe',
      type: 'text'
    },
    {
      id: 2,
      name: 'Email',
      placeholder: 'johndoe@example.com',
      type: 'email'
    },
    {
      id: 3,
      name: 'Phone',
      placeholder: '081234567890',
      type: 'number'
    },
    {
      id: 4,
      name: 'Address',
      placeholder: 'Jl. Setiabudi No. 1',
      type: 'text'
    }
  ]

  const handleCVChange = () => {
    setCvSelected(!cvSelected)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section
      className={`flex flex-col my-10 ${
        type === 'hire' ? 'w-full ' : 'md:px-32 2xl:px-72 '
      }}`}
    >
      {type === 'hire' && (
        <div className='-mt-10'>
        <h2 className="pb-5 text-xl font-semibold">Profile Hire</h2>
        </div>
      )}
      <Card radius="sm" className="px-8 py-5 h-[850px]">
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Ubah Profil Anda sebagai {type === 'hire' ? 'Hire' : 'User'}
          </h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-10 ">
          <div className="relative flex items-center justify-center mx-auto w-[150px] h-[150px] cursor-pointer">
            <Image
              radius={type === 'hire' ? 'none' : 'full'}
              src={profileImage}
              alt="Profile"
              className="cursor-pointer"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 bottom-0 z-50 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
          <article className="h-fit">
            <div className="flex flex-col mb-2">
              {inputProfile.map((input) => (
                <div key={input.id} className="mb-2">
                  <Input
                    variant="bordered"
                    radius="sm"
                    key={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    label={input.name}
                  />
                </div>
              ))}
            </div>
            {type === 'user' && (
              <div className="relative mb-2">
                <input
                  type="file"
                  name="cv"
                  id="cv"
                  className="absolute inset-0 bottom-0 z-50 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleCVChange}
                />
                {cvSelected
                  ? (
                  <div className="px-4 py-2 text-sm text-center text-white bg-green-500 rounded cursor-pointer">
                    CV telah dipilih
                  </div>
                    )
                  : (
                  <div className="px-4 py-2 text-sm text-center text-white rounded cursor-pointer bg-blue">
                    Upload CV
                  </div>
                    )}
              </div>
            )}
            <label htmlFor="description">Tambahkan Deskripsi</label>
            <div
              style={{ height: 200 }}
              className="w-full mt-2"
            >
              <div ref={quillRef} />
            </div>
          </article>
        </CardBody>
        <CardFooter className="flex flex-col items-center w-full gap-4 pt-4">
          <Button radius="sm" size='lg' className="text-white bg-blue">
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

ProfileInput.propTypes = {
  type: PropTypes.string.isRequired
}

export default ProfileInput
