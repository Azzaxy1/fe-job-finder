// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import HeaderLoker from "../components/HeaderLoker";
import { Helmet } from "react-helmet-async";

const SearchLokerPage = () => {
  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-10 px-10 py-12 lg:px- 2xl:px-72">
          <HeaderLoker />
        </main>
      </BaseLayout>
    </>
  );
};

export default SearchLokerPage;
