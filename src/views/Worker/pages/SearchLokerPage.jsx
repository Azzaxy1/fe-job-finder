// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import HeaderLoker from "../components/HeaderLoker";
import { Helmet } from "react-helmet-async";
import ListLoker from "../components/ListLoker";

const SearchLokerPage = () => {
  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-8 px-10 py-10 2xl:px-72">
          <HeaderLoker />
          <section className="flex flex-col">
            <div className="flex flex-col p-2 max-h-[500px] md:max-h-[600px] 2xl:max-h-[700px] overflow-y-auto max-w-[400px] scroll-smooth">
              <ListLoker />
            </div>
          </section>
        </main>
      </BaseLayout>
    </>
  );
};

export default SearchLokerPage;
