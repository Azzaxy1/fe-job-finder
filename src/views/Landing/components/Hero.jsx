// eslint-disable-next-line no-unused-vars
import React from "react";
import { Autocomplete, Button, Input } from "@nextui-org/react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import HeroImage from "@/assets/landing/hero.svg";
import Shape from "@/assets/landing/shape.svg";

const Hero = () => {
  return (
    <section className="relative grid py-6 md:py-0 bg-[#F2F7FD] items-center min-h-screen grid-cols-1 gap-4 px-10 lg:px-10 2xl:px-72 border-2 place-items-center lg:grid-cols-2">
      <article className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold md:text-4xl 2xl:text-5xl text-fontColor">
          Temukan pekerjaan impianmu dengan{" "}
          <span className="text-blue">Job Finder</span>
        </h1>
        <p className="text-base md:text-lg 2xl:text-xl text-fontColor">
          Temukan pekerjaan yang akan Anda sukai.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            variant="bordered"
            placeholder="Cari pekerjaan"
            className="w-full border border-gray-400 rounded-xl"
            startContent={<IoIosSearch className="text-xl" />}
          />
          <Autocomplete
            variant="bordered"
            placeholder="Lokasi"
            className="w-full border border-gray-400 rounded-xl "
            startContent={<IoLocationOutline className="text-2xl" />}
          />
          <Button radius="sm" className="text-white bg-blue">
            Cari
          </Button>
        </div>
      </article>
      <article className="flex w-full h-full">
        <img
          src={Shape}
          alt="shape"
          width={300}
          className="absolute bottom-0 right-0 w-[300px] sm:w-[330px] md:w-[380px] lg:w-[500px] 2xl:w-[630px]"
        />
        <div className="flex items-end justify-end w-full ">
          <img
            src={HeroImage}
            alt="hero"
            width={280}
            className="absolute bottom-0 right-0 z-10 md:w-[330px] lg:w-[380px] 2xl:w-[550px]"
          />
        </div>
      </article>
    </section>
  );
};

export default Hero;
