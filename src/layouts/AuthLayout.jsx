import React from 'react'
import PropTypes from 'prop-types'

import Logo from '@/assets/logo-blue.svg'
import Login from '@/assets/login.svg'
import Register from '@/assets/register.svg'
import SetPassword from '@/assets/reset-password.svg'
import Reset from '@/assets/set-password.svg'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const AuthLayout = ({ children, type }) => {
  const location = useLocation()

  const pathname = location.pathname.split('/')[1]
  const cleanPath = pathname.replace(/-/g, ' ')

  const capitalizedPath =
    cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1)

  const authImage =
    type === 'login'
      ? Login
      : type === 'register'
        ? Register
        : type === 'set-password'
          ? SetPassword
          : Reset

  return (
    <>
      <Helmet>
        <title>{capitalizedPath} | Job Finder</title>
      </Helmet>
      <section className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="items-center justify-center hidden h-24 md:flex bg-blue lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="auth image"
            src={authImage}
            width={100}
            className="object-cover w-[80px] me-4 lg:w-[380px]"
          />
        </aside>
        <div
          className={`flex flex-col items-center justify-center px-8 py-8 bg-white lg:py-0 lg:order-first lg:col-span-5 xl:col-span-6 ${
            type === 'register' && 'mt-8'
          }`}
        >
          {type === 'login'
            ? (
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="object-cover w-[100px] lg:w-[70px]"
              />
            </Link>
              )
            : (
            <img
              src={Logo}
              alt="logo"
              className="object-cover w-[100px] lg:w-[70px]"
            />
              )}
          {children}
        </div>
      </section>
    </>
  )
}

AuthLayout.propTypes = {
  type: PropTypes.oneOf(['login', 'register', 'set-password', 'reset']),
  children: PropTypes.node
}

export default AuthLayout
