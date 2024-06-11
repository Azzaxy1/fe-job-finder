import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const RegisterForm = () => {
  const [role, setRole] = useState('User')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)

  const handleRole = () => {
    role === 'User' ? setRole('Perusahaan') : setRole('User')
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleConfirmVisible = () => {
    setIsConfirmVisible(!isConfirmVisible)
  }

  return (
    <section className="flex items-center justify-center px-8 pb-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8  bg-white w-[380px] lg:w-[460px]">
          <div className="pt-4 text-sm text-center">
            Daftar sebagai :{' '}
            <Button
              size="sm"
              onClick={handleRole}
              className="text-white bg-blue"
            >
              {role === 'User' ? 'Penyedia Loker' : 'Pencari Loker'}
            </Button>
          </div>
          <h1 className="mb-2 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-blue">
            Daftar Akun
          </h1>
          <p className="mb-2 text-sm">
            Silahkan daftarkan akun anda sebagai :{' '}
            <span className="text-base font-bold underline text-blue">
              {role}
            </span>
          </p>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              variant="bordered"
              size="md"
              placeholder="John Doe"
              className="w-full placeholder-opacity-25"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-row gap-2 mb-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
              >
                Email
              </label>
              <Input
                type="text"
                id="email"
                variant="bordered"
                size="md"
                placeholder="john.doe@example.com"
                className="w-full"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
              >
                No Hp
              </label>
              <Input
                type="text"
                id="phone"
                variant="bordered"
                size="md"
                placeholder="081234567890"
                className="w-full"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Password
            </label>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              variant="bordered"
              name="password"
              size="md"
              id="password"
              placeholder="*******"
              className="w-full"
              endContent={
                <button
                  className="focus:outline-none"
                  onClick={handlePasswordVisible}
                  type="button"
                >
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              }
            />
            <span className="text-sm text-red-500 lg:text-base"></span>
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Konfirmasi Password
            </label>
            <Input
              type={isConfirmVisible ? 'text' : 'password'}
              variant="bordered"
              name="confirm-password"
              size="md"
              id="confirm-password"
              placeholder="*******"
              className="w-full"
              endContent={
                <button
                  className="focus:outline-none"
                  onClick={handleConfirmVisible}
                  type="button"
                >
                  {isConfirmVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              }
            />
            <span className="text-sm text-red-500 lg:text-base"></span>
          </div>
          <Button
            variant="solid"
            size="md"
            className="w-full text-white bg-blue"
          >
            Daftar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm font-normal text-center lg:text-base">
            Sudah punya akun?&nbsp;
            <Link
              to="/login"
              className="font-bold duration-75 text-blue hover:underline"
            >
              Masuk di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm
