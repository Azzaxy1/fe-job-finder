// eslint-disable-next-line no-unused-vars
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbsHeader = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <section
      className={`flex px-28 2xl:px-72 items-center justify-start h-36 2xl:h-48 bg-cover bg-fixed bg-no-repeat bg-center ${
        pathname === "jobs"
          ? "bg-[url('/public/bread1.jpg')]"
          : "bg-[url('/public/bread2.png')]"
      } -z-10`}
    >
      <div className="flex flex-col w-full gap-2 text-white ">
        <div className="pb-2 border-b border-white">
          <h2 className="text-3xl font-semibold text-white">
            {pathname === "jobs" ? "Cari Lowongan" : "Tips Loker"}
          </h2>
        </div>
        <Breadcrumbs
          variant="solid"
          underline="hover"
          color="primary"
          className="flex flex-col text-white"
        >
          <BreadcrumbItem className="text-white">
            <Link to="/">Beranda</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-white">
            {pathname === "jobs" ? "Cari Lowongan" : "Tips Loker"}
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </section>
  );
};

export default BreadcrumbsHeader;
