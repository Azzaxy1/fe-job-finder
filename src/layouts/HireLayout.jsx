import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMenu, IoClose, IoHomeSharp } from 'react-icons/io5'
import PropTypes from 'prop-types'
import { Image } from '@nextui-org/react'
import { Helmet } from 'react-helmet-async'
import { FaUserTie } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'

import Logo from '@/assets/logo-white.svg'
import WelcomeBanner from '@/views/Hire/components/WelcomeBanner'
import DropdownProfile from '@/components/common/DropdownProfile'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '@/states/auth/action'

const HireLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const path = location.pathname

  const pathname = path.split('/')[1]
  const cleanPath = pathname.replace(/-/g, ' ')

  const capitalizedPath =
    cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const onLogoutHandler = () => {
    dispatch(asyncLogout())
    navigate('/login')
  }

  const authUser = useSelector((states) => states.authUser)

  return (
    <>
      <Helmet>
        <title>{capitalizedPath} | Job Finder</title>
      </Helmet>
      <main>
        {/* Header with Hamburger Icon */}
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 text-white sm:p-0 sm:bg-inherit bg-blue">
          <Link to={'/hire-dashboard'}>
            <img src={Logo} alt="Logo" width={60} className="sm:hidden" />
          </Link>
          <button
            onClick={toggleMenu}
            className="block text-2xl sm:hidden focus:outline-none"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </header>

        {/* Sidebar */}
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 bg-blue`}
          aria-label="Sidebar"
        >
          <div className="h-full py-4 overflow-y-auto ">
            {/* Logo */}
            <Link to={'/hire-dashboard'} className="flex justify-center">
              <Image
                src={Logo}
                alt="Logo"
                className="hidden w-20 pb-5 ps-5 sm:block"
              />
            </Link>

            {/* Menu */}
            <ul className="pt-20 font-medium sm:pt-0">
              <li>
                <Link
                  to="/hire-dashboard"
                  className={`flex items-center justify-center p-2 text-white hover:bg-[#0284c7] group ${
                    location.pathname === '/hire-dashboard' && 'bg-[#0284c7]'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xl font-medium ms-3">
                    <IoHomeSharp />
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-jobs"
                  className={`flex items-center justify-center p-2 text-white hover:bg-[#0284c7] group ${
                    location.pathname === '/manage-jobs' && 'bg-[#0284c7]'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xl font-medium ms-3">
                    <MdOutlineWork />
                    Kelola Pekerjaan
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-applyer"
                  className={`flex items-center justify-center p-2 text-white hover:bg-[#0284c7] group ${
                    location.pathname === '/manage-jobs' && 'bg-[#0284c7]'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xl font-medium ms-3">
                    <FaUserTie />
                    Kelola Pelamar
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        {/* Content */}
        <div className=" sm:ml-64">
          <div className="flex flex-col items-center justify-end py-5 bg-white px-14 lg:flex-row">
            <DropdownProfile type="hire" authHire={authUser} onLogout={onLogoutHandler} />
          </div>
          <div className="px-10 py-5 bg-[#f1f5f9] min-h-screen">
            <WelcomeBanner />
            <div className="flex justify-center">{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

HireLayout.propTypes = {
  children: PropTypes.node
}

export default HireLayout
