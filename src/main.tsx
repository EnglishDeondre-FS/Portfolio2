import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.css";
import App from "./App.tsx";
import LoginPage from "./pages/Login.tsx";
import {Blog, BlogPost } from "./pages/Blog.tsx";
import Dashboard from "./pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Rotue path="/dash/:slug" element={<Dashboard />}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
