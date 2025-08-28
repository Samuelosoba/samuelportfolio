import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

export default function AppRoute() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
