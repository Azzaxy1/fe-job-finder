// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8 py-8  bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-2 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-primary">
            Lupa Kata sandi
          </h1>
          <p className="mb-2 text-sm">
            Masukan email anda dan kami akan mengirimkan email
          </p>
          <div className="mb-8">
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
          {/* <div className="mb-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
              >
                Password
              </label>
              <Link
                to="/reset-password"
                className="text-sm font-medium lg:text-base hover:underline text-primary"
              >
                Lupa Kata Sandi
              </Link>
            </div>
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
          </div> */}
          <Button
            size="md"
            variant="solid"
            className="w-full text-white bg-primary"
          >
            Atur Ulang Sandi
          </Button>
          <div className="mt-6 text-center">
            <span className="text-sm font-normal text-center lg:text-base">
              kembali ke&nbsp;
              <Link
                to="/login"
                className="font-bold duration-75 text-primary hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
