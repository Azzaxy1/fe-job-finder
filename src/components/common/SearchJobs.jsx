// eslint-disable-next-line no-unused-vars
import React from "react";
import { Input } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";

const SearchJobs = () => {
  return (
    <Input
      variant="bordered"
      placeholder="Cari pekerjaan"
      className="w-full border border-gray-400 rounded-xl"
      startContent={<IoIosSearch className="text-xl" />}
    />
  );
};

export default SearchJobs;
