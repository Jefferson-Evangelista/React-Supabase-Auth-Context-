import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SignIn, SignUp, Dashboard } from "./components";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
