import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../validation'

const LoginForm = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const handlePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)} className="px-8  bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-2 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-blue">
            Masuk
          </h1>
          <p className="mb-2 text-sm">
            Selamat datang, silahkan masukan akun anda
          </p>
          <div className="mb-4">
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
          <div className="mb-8">
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
              placeholder="******"
              className="w-full"
              endContent={
                <button onClick={handlePasswordVisible} type="button">
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              }
            />
            <p className='text-sm text-red-500 2xl:text-base'>{errors.password?.message}</p>
          </div>
          <Button
            type='submit'
            size="md"
            variant="solid"
            className="w-full text-white bg-blue"
          >
            Masuk
          </Button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm font-normal text-center lg:text-base">
            Belum punya akun?&nbsp;
            <Link
              to="/register"
              className="font-bold duration-75 text-blue hover:underline"
            >
              Daftar di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
