// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8  bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-2 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-primary">
            Daftar Akun
          </h1>
          <p className="mb-2 text-sm">Silahkan daftarkan akun anda</p>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              variant="bordered"
              size="md"
              placeholder="Masukan Nama"
              className="w-full"
              autoComplete="off"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Email
            </label>
            <Input
              type="text"
              id="email"
              variant="bordered"
              size="md"
              placeholder="Masukan Email"
              className="w-full"
              autoComplete="off"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Password
            </label>
            <Input
              type="password"
              variant="bordered"
              name="password"
              size="md"
              id="password"
              placeholder="Masukan Password"
              className="w-full"
            />
            <span className="text-sm text-red-500 lg:text-base"></span>
          </div>
          <Button
            variant="solid"
            size="md"
            className="w-full text-white bg-primary"
          >
            Daftar
          </Button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm font-normal text-center lg:text-base">
            Sudah punya akun?&nbsp;
            <Link
              to="/login"
              className="font-bold duration-75 text-primary hover:underline"
            >
              Masuk di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
