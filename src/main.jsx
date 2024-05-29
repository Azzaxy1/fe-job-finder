import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/styles/index.css";
import "@fontsource/poppins";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <NextUIProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </NextUIProvider>
  </HelmetProvider>
);

