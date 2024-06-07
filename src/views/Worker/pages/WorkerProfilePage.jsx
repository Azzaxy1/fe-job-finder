// eslint-disable-next-line no-unused-vars
import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Helmet } from "react-helmet-async";
import ProfileInput from "@/components/common/ProfileInput";

const WorkerProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <div className="min-h-screen px-10 py-3">
          <ProfileInput type="worker" />
        </div>
      </BaseLayout>
    </>
  );
};

export default WorkerProfilePage;
