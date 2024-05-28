// eslint-disable-next-line no-unused-vars
import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout type="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
