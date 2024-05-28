// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/Auth/pages/LoginPage";
import LoginForm from "./views/Auth/components/LoginForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default App;

