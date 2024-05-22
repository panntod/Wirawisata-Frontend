import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import About from "./views/About";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Pesawat from "./views/Ticket/Pesawat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/ticket/pesawat",
    element: <Pesawat />,
  },
  {
    // Jika path tidak ditemukan maka secara otomatis akan diarahkan ke home
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
