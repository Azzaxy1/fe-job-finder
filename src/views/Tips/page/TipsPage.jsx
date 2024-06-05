// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Helmet } from "react-helmet-async";
import ListArticle from "../components/ListArticle";
import BreadcrumbsHeader from "@/components/common/BreadcrumbsHeader";

const TipsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tips Loker | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <BreadcrumbsHeader />
        <ListArticle />
      </BaseLayout>
    </>
  );
};

export default TipsPage;
