import React from 'react'
import { Image } from '@nextui-org/react'

import Logo from '@/assets/logo-white.svg'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

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
            <li>
              <Link to="/about-us">Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-semibold md:text-xl">Our Team</h2>
          <ul className="text-base">
            <li >
              <Link to="https://github.com/Azzaxy1" className='flex flex-row items-center gap-2'><FaGithub /> Abdurrohman Azis</Link>
            </li>
            <li >
              <Link to="https://github.com/Anuraaaa" className='flex flex-row items-center gap-2'><FaGithub /> Muhammad Anwar Fauzan</Link>
            </li>
            <li >
              <Link to="https://github.com/aclrdhv" className='flex flex-row items-center gap-2'><FaGithub /> Marcell Virgiano Hernand De Ro</Link>
            </li>
          </ul>
        </div>
      </section>
      <p className="w-[80%] md:w-[70%] mx-auto py-4 text-center text-white  border-t-1">
        © {new Date().getFullYear()} JobFinder. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
