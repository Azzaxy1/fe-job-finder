import React, { useState } from 'react'
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Logo from '@/assets/logo-blue.svg'
import DropdownProfile from './DropdownProfile'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '@/states/auth/action'

const Header = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const authUser = useSelector((states) => states.authUser)

  const onLogoutHandler = () => {
    dispatch(asyncLogout())
    navigate('/login')
  }

  const pathName = location.pathname

  const menuItems = ['Beranda', 'Lowongan', 'Tips Loker', 'Tentang Kami']

  const pathMenu = ['/', '/jobs', '/tips', '/about-us']

  return (
    <Navbar
      onMenuOpenChange={SetIsMenuOpen}
      isBordered
      className="z-50 2xl:py-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <Image src={Logo} alt="Logo" width={60} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem className="sm:flex sm:gap-3">
          {menuItems.map((item, index) => (
            <Link
              className={`font-medium text-fontColor hover:text-blue-hover hover:underline hover:underline-offset-8 ${
                pathName === pathMenu[index] &&
                'text-blue-500 underline font-bold'
              }`}
              to={pathMenu[index]}
              key={item}
            >
              {item}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {authUser === null
          ? (
          <div className="flex items-center gap-4">
            <NavbarItem>
              <Button
                radius="sm"
                variant="outline"
                className="border border-blue hover:text-white hover:bg-blue"
              >
                <Link to="/login">Masuk</Link>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                radius="sm"
                className="text-white bg-blue hover:bg-blue-hover"
              >
                <Link to="/register">Daftar</Link>
              </Button>
            </NavbarItem>
          </div>
            )
          : (
          <DropdownProfile type="user" onLogout={onLogoutHandler} authUser={authUser} />
            )}
      </NavbarContent>
      <NavbarMenu className="flex items-center justify-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full font-medium text-fontColor hover:text-blue-hover hover:underline hover:underline-offset-8 ${
                pathName === pathMenu[index] && 'text-blue-500 underline'
              }`}
              to={pathMenu[index]}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
