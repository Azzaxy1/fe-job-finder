// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Input } from "@nextui-org/react";

const ResetPasswordForm = () => {
  return (
    <section className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8 py-8 bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-3 text-2xl font-bold leading-9 md:text-2xl xl:text-3xl text-blue">
            Reset Password
          </h1>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Password Baru
            </label>
            <Input
              type="password"
              id="password"
              variant="bordered"
              size="md"
              placeholder="Masukan Password Baru"
              className="w-full"
              autoComplete="off"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-sm"
            >
              Ulangi Password
            </label>
            <Input
              type="password"
              id="password"
              variant="bordered"
              size="md"
              placeholder="Ulangi Password Baru"
              className="w-full"
              autoComplete="off"
            />
          </div>
          <Button
            size="md"
            variant="solid"
            className="w-full text-white bg-blue"
          >
            Simpan
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
