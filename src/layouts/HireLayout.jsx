// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

import Logo from "@/assets/logo-white.svg";
import { Image } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";

const HireLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const path = location.pathname;

  const pathname = path.split("/")[1];
  const cleanPath = pathname.replace(/-/g, " ");

  const capitalizedPath =
    cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <title>{capitalizedPath} | Job Finder</title>
      </Helmet>
      <main>
        {/* Header with Hamburger Icon */}
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 text-white sm:p-0 sm:bg-inherit bg-blue">
          <Link to={"/hire-dashboard"}>
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
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 bg-blue`}
          aria-label="Sidebar"
        >
          <div className="h-full py-4 overflow-y-auto ">
            {/* Logo */}
            <Link to={"/hire-dashboard"} className="flex justify-center">
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
                    location.pathname === "/hire-dashboard" && "bg-[#0284c7]"
                  }`}
                >
                  <span className="text-xl font-medium ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-jobs"
                  className={`flex items-center justify-center p-2 text-white hover:bg-[#0284c7] group ${
                    location.pathname === "/hire-lowongan" && "bg-[#090b0c]"
                  }`}
                >
                  <span className="text-xl font-medium ms-3">
                    Lowongan Pekerjaan
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hire-profile"
                  className={`flex items-center justify-center p-2 text-white hover:bg-[#0284c7] group ${
                    location.pathname === "/hire-profil" && "bg-[#0284c7]"
                  }`}
                >
                  <span className="text-xl font-medium ms-3">Profile</span>
                </Link>
              </li>
              <li>
                <button className="w-full p-2 text-xl font-medium text-white hover:bg-[#0284c7] ps-5 whitespace-nowrap">
                  Keluar
                </button>
              </li>
            </ul>
          </div>
        </aside>
        {/* Content */}
        <div className=" sm:ml-64">
          <div className="flex flex-col items-center justify-start py-5 px-14 bg-[#EBF3FC] lg:flex-row">
            <h2 className="text-xl font-semibold lg:text-2xl text-blue">
              Hi, Perusahaan!
            </h2>
          </div>
          <div className="flex justify-center py-14 px-14">{children}</div>
        </div>
      </main>
    </>
  );
};

HireLayout.propTypes = {
  children: PropTypes.node,
};

export default HireLayout;
