// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Helmet } from "react-helmet-async";
import HeaderArticle from "../components/HeaderArticle";
import ListArticle from "../components/ListArticle";

const TipsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tips Loker | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <HeaderArticle />
        <ListArticle />
      </BaseLayout>
    </>
  );
};

export default TipsPage;
