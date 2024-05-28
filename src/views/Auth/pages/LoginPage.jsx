// eslint-disable-next-line no-unused-vars
import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import FormAuth from "../components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout type="register">
      <FormAuth type="register" />
    </AuthLayout>
  );
};

export default LoginPage;
