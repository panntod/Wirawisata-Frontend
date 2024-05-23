import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import About from "./views/About";
import Home from "./views/Home";
import Hotel from "./views/Hotel";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Kereta from "./views/Ticket/Kereta";
import Pesawat from "./views/Ticket/Pesawat";
import Transportation from "./views/Transportation";
import Wisata from "./views/Wisata";

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
    path: "/transportasi",
    element: <Transportation />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/wisata",
    element: <Wisata />,
  },
  {
    path: "/ticket/pesawat",
    element: <Pesawat />,
  },
  {
    path: "/ticket/kereta",
    element: <Kereta />,
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
