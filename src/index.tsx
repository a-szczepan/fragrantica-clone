import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { SearchPage } from "./pages/SearchPage";
import { ProductPage } from "./pages/ProductPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
