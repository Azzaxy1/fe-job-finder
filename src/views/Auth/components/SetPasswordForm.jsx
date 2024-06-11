import React from 'react'
import { Button, Input } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const SetPasswordForm = () => {
  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8 py-8  bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-2 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-blue">
            Lupa Kata sandi
          </h1>
          <p className="mb-2 text-sm">
            Masukan email anda dan kami akan mengirimkan email
          </p>
          <div className="mb-8">
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
          <Button
            size="md"
            variant="solid"
            className="w-full text-white bg-blue"
          >
            Atur Ulang Sandi
          </Button>
          <div className="mt-6 text-center">
            <span className="text-sm font-normal text-center lg:text-base">
              kembali ke&nbsp;
              <Link
                to="/login"
                className="font-bold duration-75 text-blue hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SetPasswordForm
