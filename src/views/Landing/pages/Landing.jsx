// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";

import BaseLayout from "@/layouts/BaseLayout";
import Hero from "../components/Hero";
import WhyJoin from "../components/WhyJoin";
import CompanyList from "../components/CompanyList";
import Testimony from "../components/Testimony";
const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Job Finder | Situs Lowongan Pekerjaan</title>
      </Helmet>
      <BaseLayout>
        <main className="min-h-screen">
          <Hero />
          <WhyJoin />
          <CompanyList />
          <Testimony />
          <div className="h-[1000px]"></div>
        </main>
      </BaseLayout>
    </>
  );
};

export default Landing;
