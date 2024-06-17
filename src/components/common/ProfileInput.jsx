import React, { useState } from 'react'
import { useQuill } from 'react-quilljs'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  User
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdateProfile } from '@/states/profile/action'
// import UserImage from '@/assets/user-placeholder.jpg'
// import { formatHtmlToTextPlaceholder } from '@/utils'

const ProfileInput = ({ type }) => {
  const profile = useSelector((state) => state.profile)
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  const [cvSelected, setCvSelected] = useState(false)
  const [profileImage, setProfileImage] = useState(
    authUser.foto_url || null)

  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    address: profile.address,
    description: profile.description,
    foto: null,
    file: null
  })

  const placeholder = authUser.description
  const formats = [
    'bold', 'italic', 'underline', 'strike',
    'align', 'size', 'header', 'color', 'background'
  ]
  const { quillRef } = useQuill({ formats, placeholder })

  const inputProfile = [
    { id: 1, name: 'name', placeholder: authUser.name, type: 'text', label: 'Name' },
    { id: 2, name: 'email', placeholder: authUser.email, type: 'email', label: 'Email' },
    { id: 3, name: 'phone', placeholder: authUser.phone, type: 'text', label: 'Phone' },
    { id: 4, name: 'address', placeholder: authUser.address === null ? '' : authUser.address, type: 'text', label: 'Address' }
  ]

  const handleCVChange = (e) => {
    const fileValue = e.target.files[0]
    setCvSelected(!!fileValue)
    setFormData({ ...formData, file: fileValue })
  }

  const handleImageChange = (e) => {
    const fileValue = e.target.files[0]
    if (fileValue) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(fileValue)
      setFormData({ ...formData, foto: fileValue })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const description = quillRef.current.firstChild.innerHTML
    dispatch(asyncUpdateProfile({ ...formData, description }))
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
        <CardBody className="flex flex-col gap-10 h-fit">
          <div className="relative flex items-center justify-center mx-auto w-[150px] h-[150px] cursor-pointer">
            {profileImage === null
              ? (
              <User
                avatarProps={{
                  isBordered: true,
                  src: authUser.foto_url
                }}
                name={authUser.name}
                className='flex flex-col'
              />
                )
              : (
              <Image
              radius={type === 'hire' ? 'none' : 'full'}
              src={profileImage}
              alt="Profile"
              className="cursor-pointer"
            />
                )}
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
                    disabled={input.name === 'email'}
                    name={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    label={input.label}
                    value={formData[input.name]}
                    onChange={handleInputChange}
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
            <label htmlFor="description">Deskripsi</label>
            <div className='w-full h-[300px]'>
              <div ref={quillRef} style={{ border: '1px solid #ccc', overflow: 'auto' }} />
            </div>
          </article>
        </CardBody>
        <CardFooter className="flex flex-col items-center w-full gap-4 pt-4">
          <Button radius="sm" size='lg' className="text-white bg-blue" onClick={handleSubmit}>
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
