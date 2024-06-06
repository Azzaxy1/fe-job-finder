// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import ProfileInput from "../components/ProfileInput";
import { Helmet } from "react-helmet-async";

const WorkerProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <div className="min-h-screen px-10 py-3">
          <ProfileInput />
        </div>
      </BaseLayout>
    </>
  );
};

export default WorkerProfilePage;
