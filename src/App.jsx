// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/views/Auth/pages/LoginPage";
import RegisterPage from "@/views/Auth/pages/RegisterPage";
import ResetPasswordPage from "@/views/Auth/pages/ResetPasswordPage";
import SetPasswordPage from "@/views/Auth/pages/SetPasswordPage";
import Landing from "@/views/Landing/pages/Landing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="reset-password" element={<SetPasswordPage />} />
      <Route path="set-password" element={<ResetPasswordPage />} />
    </Routes>
  );
};

export default App;

