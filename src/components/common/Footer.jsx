import React from 'react'
import { Image } from '@nextui-org/react'

import Logo from '@/assets/logo-white.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" bg-blue">
      <section className="flex flex-col gap-4 px-10 py-5 md:items-center md:flex-row md:flex- justify-evenly">
        <div className="flex flex-col gap-2 text-white md:items-center md:justify-center">
          <Image
            radius="none"
            src={Logo}
            alt="logo"
            width={80}
            className="object-cover"
          />
          <p className="text-base md:text-xl">Situs Lowongan Pekerjaan</p>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-semibold md:text-xl">Navigasi</h2>
          <ul className="text-base">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/jobs">Lowongan</Link>
            </li>
            <li>
              <Link to="/tips">Tips Loker</Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-semibold md:text-xl">Our Team</h2>
          <ul className="text-base">
            <li>Abdurrohman Azis</li>
            <li>Muhammad Anwar Fauzan</li>
            <li>Marcell Virgiano Hernand De Ro</li>
          </ul>
        </div>
      </section>
      <p className="w-[80%] md:w-[70%] mx-auto py-4 text-center text-white  border-t-1">
        © 2024 JobFinder. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
