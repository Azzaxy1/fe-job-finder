// eslint-disable-next-line no-unused-vars
import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
