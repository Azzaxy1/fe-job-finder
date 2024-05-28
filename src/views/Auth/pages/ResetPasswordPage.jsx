// eslint-disable-next-line no-unused-vars
import React from "react";
import ResetPasswordForm from "../components/ResetPasswordForm";
import AuthLayout from "@/layouts/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout type="reset">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
