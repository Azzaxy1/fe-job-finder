// eslint-disable-next-line no-unused-vars
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

const HeaderArticle = () => {
  return (
    <section>
      <div className="flex px-28 2xl:px-72 items-center justify-start h-40 bg-cover bg-fixed bg-no-repeat bg-bottom bg-[url('@/assets/header-tips.png')] -z-10">
        <div className="flex flex-col w-full gap-2 text-white ">
          <div className="pb-2 border-b border-white">
            <h2 className="text-3xl font-semibold text-white">Tips Loker</h2>
          </div>
          <Breadcrumbs
            variant="solid"
            underline="hover"
            color="primary"
            className="flex flex-col text-white"
          >
            <BreadcrumbItem className="text-white">
              <Link to="/">Beranda</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="text-white">Tips Loker</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </section>
  );
};

export default HeaderArticle;
