// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Link, useParams } from "react-router-dom";
import { articles } from "@/utils/local-data.js";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const DetailTips = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return (
      <BaseLayout>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <h1 className="font-semibold text-8xl">Ooops</h1>
          <h2 className="text-4xl font-semibold text-blue">
            Artikel tidak ditemukan
          </h2>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="flex flex-col max-w-5xl min-h-screen gap-4 px-10 py-10 mx-auto text-fontColor">
        <Breadcrumbs
          variant="solid"
          underline="hover"
          color="primary"
          className="flex flex-col text-white"
        >
          <BreadcrumbItem className="text-white">
            <Link to="/">Beranda</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-white">
            <Link to="/tips">Tips Loker</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-white ">
            {article.title}
          </BreadcrumbItem>
        </Breadcrumbs>
        <h1 className="text-lg font-semibold sm:text-xl md:text-2xl 2xl:text-4xl">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt={article.title}
          className="object-cover w-full h-96 "
        />
        <div
          dangerouslySetInnerHTML={{ __html: article.description }}
          className="text-base sm:text-lg md:text-xl "
        />
      </div>
    </BaseLayout>
  );
};

export default DetailTips;
