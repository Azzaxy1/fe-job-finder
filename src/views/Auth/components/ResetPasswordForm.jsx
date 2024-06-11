import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPasswordSchema } from '../validation'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ResetPasswordForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)

  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(resetPasswordSchema)
  })

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

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-8 bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-3 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-blue">
            Reset Password
          </h1>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Password Baru
            </label>
            <Input
              {...register('password')}
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              variant="bordered"
              size="md"
              placeholder="Masukan Password Baru"
              className="w-full"
              autoComplete="off"
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
            <p className='text-sm text-red-500 2xl:text-base'>{errors.password?.message}</p>
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Ulangi Password
            </label>
            <Input
              {...register('confirmPassword')}
              type={isConfirmVisible ? 'text' : 'password'}
              id="password"
              variant="bordered"
              size="md"
              placeholder="Ulangi Password Baru"
              className="w-full"
              autoComplete="off"
              onChange={handleConfrimPasswordChange}
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
            <p className='text-sm text-red-500 2xl:text-base'>{errors.confirmPassword?.message}</p>
          </div>
          <Button
            type='submit'
            size="md"
            variant="solid"
            className="w-full text-white bg-blue"
          >
            Simpan
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ResetPasswordForm
