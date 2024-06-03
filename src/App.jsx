// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/views/Auth/pages/LoginPage";
import RegisterPage from "@/views/Auth/pages/RegisterPage";
import ResetPasswordPage from "@/views/Auth/pages/ResetPasswordPage";
import SetPasswordPage from "@/views/Auth/pages/SetPasswordPage";
import Landing from "@/views/Landing/pages/Landing";
import SearchLokerPage from "./views/Worker/pages/SearchLokerPage";
import Dashboard from "./views/Hire/pages/Dashboard";
import ManageJobs from "./views/Hire/pages/ManageJobs";
import HireProfile from "./views/Hire/pages/HireProfile";
import NoteFoundPage from "./views/Error/pages/NoteFoundPage";
import TipsPage from "./views/Tips/page/TipsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="jobs" element={<SearchLokerPage />} />
        <Route path="tips" element={<TipsPage />} />
      </Route>

      {/* Auth */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="reset-password" element={<SetPasswordPage />} />
      <Route path="set-password" element={<ResetPasswordPage />} />

      {/* Hire */}
      <Route path="hire-dashboard" element={<Dashboard />} />
      <Route path="manage-jobs" element={<ManageJobs />} />
      <Route path="hire-profile" element={<HireProfile />} />

      <Route path="*" element={<NoteFoundPage />} />
    </Routes>
  );
};

export default App;

