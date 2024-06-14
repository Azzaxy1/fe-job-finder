import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "@/styles/index.css";
import "@fontsource/poppins";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </React.StrictMode>
  </BrowserRouter>
);

