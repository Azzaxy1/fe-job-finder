import React from 'react'
import { Button } from '@nextui-org/react'

import HeroImage from '@/assets/landing/hero.svg'
import Shape from '@/assets/landing/shape.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative grid py-6 md:py-0 bg-[#F2F7FD] items-center min-h-screen grid-cols-1 gap-4 px-6 lg:px-10 2xl:px-72 border-2 place-items-center lg:grid-cols-2">
      <article className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold md:text-4xl 2xl:text-5xl text-fontColor">
          Temukan pekerjaan impianmu dengan{' '}
          <span className="text-blue">Job Finder</span>
        </h1>
        <p className="text-base md:text-lg 2xl:text-xl text-fontColor">
          Temukan pekerjaan yang akan Anda sukai.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link to="/jobs">
            <Button radius='sm' className='text-white bg-blue '>Mulai Pencarian Sekarang</Button>
          </Link>
        </div>
      </article>
      <article className="flex w-full h-full">
        <img
          src={Shape}
          alt="shape"
          width={300}
          className="absolute bottom-0 right-0 w-[230px] sm:w-[330px] md:w-[380px] lg:w-[500px] 2xl:w-[630px]"
        />
        <div className="flex items-end justify-end w-full ">
          <img
            src={HeroImage}
            alt="hero"
            width={280}
            className="absolute bottom-0 right-0 z-10 w-[230px] md:w-[330px] lg:w-[380px] 2xl:w-[550px]"
          />
        </div>
      </article>
    </section>
  )
}

export default Hero
