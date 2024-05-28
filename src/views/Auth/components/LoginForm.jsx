import { Input, Link } from "@nextui-org/react";
// eslint-disable-next-line no-unused-vars
import React from "react";

const LoginForm = () => {
  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form className="px-8 pt-6 bg-white w-[380px] lg:w-[460px]">
          <h1 className="mb-5 text-2xl font-extrabold leading-9 md:text-3xl xl:text-4xl text-primary">
            Masuk
          </h1>
          <div className="mb-4">
            <Input
              type="text"
              variant="bordered"
              size="lg"
              placeholder="Masukan Email"
              className="w-full"
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
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
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukan Password"
              className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
            />
            <span className="text-sm text-red-500 lg:text-base"></span>
          </div>
          <button
            type="submit"
            className="w-full transition-all duration-150 ease-linear bg-dark-blue text-white hover:bg-[#4532bd] focus:ring-4 focus:ring- focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2"
          ></button>
        </form>
        <div className="text-center ms-7 w-[320px] lg:w-[400px]">
          <div className="flex items-center py-5 ">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <span className="text-sm font-normal text-center lg:text-base">
            Belum punya akun?&nbsp;
            <Link
              to="/register"
              className="font-bold duration-75 text-dark-blue hover:underline"
            >
              Daftar di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
