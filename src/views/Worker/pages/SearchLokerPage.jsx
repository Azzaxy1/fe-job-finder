// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import HeaderLoker from "../components/HeaderLoker";

const SearchLokerPage = () => {
  return (
    <BaseLayout>
      <main className="flex flex-col min-h-screen gap-10 px-10 py-12 lg:px- 2xl:px-72">
        <HeaderLoker />
      </main>
    </BaseLayout>
  );
};

export default SearchLokerPage;
