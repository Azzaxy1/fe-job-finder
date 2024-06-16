import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../validation'
import { useDispatch } from 'react-redux'
import { asyncRegister } from '@/states/auth/action'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('worker')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const handleRole = () => {
    role === 'worker' ? setRole('hire') : setRole('worker')
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleConfirmVisible = () => {
    setIsConfirmVisible(!isConfirmVisible)
  }

  const handleConfrimPasswordChange = (e) => {
    setValue('confirmPassword', e.target.value)

    trigger('confirmPassword')
  }

  const onRegisterHandler = (data) => {
    dispatch(asyncRegister({ ...data, role }, navigate))
    setLoading(true)
  }

  return (
    <section className="flex items-center justify-center px-8 pb-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form onSubmit={handleSubmit(onRegisterHandler)} className="px-8  bg-white w-[380px] lg:w-[460px]">
          <div className="pt-4 text-sm text-center">
            Daftar sebagai :{' '}
            <Button
              size="sm"
              onClick={handleRole}
              className="text-white bg-blue"
            >
              {role === 'worker' ? 'Penyedia Loker' : 'Pencari Loker'}
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
              {...register('name')}
              type="text"
              id="name"
              variant="bordered"
              size="md"
              placeholder="John Doe"
              className="w-full placeholder-opacity-25"
              autoComplete="off"
            />
            <p className='text-sm text-red-500 2xl:text-base'>{errors.name?.message}</p>
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
                {...register('email')}
                type="text"
                id="email"
                variant="bordered"
                size="md"
                placeholder="john.doe@example.com"
                className="w-full"
                autoComplete="off"
              />
            <p className='text-sm text-red-500 2xl:text-base'>{errors.email?.message}</p>

            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
              >
                No Hp
              </label>
              <Input
                {...register('phone')}
                type="text"
                id="phone"
                variant="bordered"
                size="md"
                placeholder="081234567890"
                className="w-full"
                autoComplete="off"
              />
            <p className='text-sm text-red-500 2xl:text-base'>{errors.phone?.message}</p>
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
              {...register('password')}
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
            <span className="text-sm text-red-500 lg:text-base">
              {errors.password?.message}
            </span>
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Konfirmasi Password
            </label>
            <Input
              {...register('confirmPassword')}
              onChange={handleConfrimPasswordChange}
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
            <span className="text-sm text-red-500 lg:text-base">
              {errors.confirmPassword?.message}
            </span>
          </div>
          <Button
            isLoading={loading}
            type='submit'
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
