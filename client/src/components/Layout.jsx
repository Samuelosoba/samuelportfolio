import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
}
