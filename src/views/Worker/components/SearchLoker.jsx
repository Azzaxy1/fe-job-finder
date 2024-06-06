// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchJobs from "@/components/common/SearchJobs";
import SearchLocation from "@/components/common/SearchLocation";
import { Button } from "@nextui-org/react";
import BreadcrumbsHeader from "@/components/common/BreadcrumbsHeader";

const SearchLoker = () => {
  return (
    <>
      <BreadcrumbsHeader />
      <div className="flex flex-col max-w-3xl gap-4 pl-12 2xl:pl-72">
        <h2 className="text-lg font-semibold sm:text-xl">
          Cari Lowongan Pekerjaan
        </h2>
        <div className="flex flex-col gap-4 pe-12 md:pe-0 md:flex-row">
          <SearchJobs />
          <SearchLocation />
          <Button radius="sm" className="text-white bg-blue">
            Cari
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchLoker;
