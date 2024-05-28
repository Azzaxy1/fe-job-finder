import React from "react";
import Register from "@/assets/register.svg";
import { Image } from "@nextui-org/react";

const AuthLayout = ({ children, type }) => {
  return (
    <section className="lg:flex lg:min-h-screen lg:items-center">
      <aside className="flex items-center justify-center h-24 bg-dark-blue lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <Image
          alt="logo"
          src={type === "register" ? Register : null}
          width={100}
          className="object-cover w-[280px] me-4 lg:w-[380px]"
        />
      </aside>
      {children}
    </section>
  );
};

export default AuthLayout;
