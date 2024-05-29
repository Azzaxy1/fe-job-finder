// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchJobs from "@/components/common/SearchJobs";
import SearchLocation from "@/components/common/SearchLocation";
import { Button } from "@nextui-org/react";

const HeaderLoker = () => {
  return (
    <div className="flex flex-col max-w-3xl gap-4">
      <h2 className="text-lg font-semibold sm:text-xl">
        Cari Lowongan Pekerjaan
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchJobs />
        <SearchLocation />
        <Button radius="sm" className="text-white bg-blue">
          Cari
        </Button>
      </div>
    </div>
  );
};

export default HeaderLoker;
