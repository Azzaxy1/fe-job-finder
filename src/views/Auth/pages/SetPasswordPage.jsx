// eslint-disable-next-line no-unused-vars
import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import SetPasswordForm from "../components/SetPasswordForm";

const SetPasswordPage = () => {
  return (
    <AuthLayout type="set-password">
      <SetPasswordForm />
    </AuthLayout>
  );
};

export default SetPasswordPage;
