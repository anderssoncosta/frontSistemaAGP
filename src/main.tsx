import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/auth.tsx";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import {} from "../src/app/globals.css"
import RoutesApp from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
