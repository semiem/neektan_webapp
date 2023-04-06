import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/IRANSans/css/fontiran.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  </React.StrictMode>
);
