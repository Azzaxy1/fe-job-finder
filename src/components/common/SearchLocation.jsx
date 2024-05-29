// eslint-disable-next-line no-unused-vars
import React from "react";
import { Autocomplete } from "@nextui-org/react";
import { IoLocationOutline } from "react-icons/io5";

const SearchLocation = () => {
  return (
    <Autocomplete
      variant="bordered"
      placeholder="Lokasi"
      className="w-full border border-gray-400 rounded-xl "
      startContent={<IoLocationOutline className="text-2xl" />}
    />
  );
};

export default SearchLocation;
