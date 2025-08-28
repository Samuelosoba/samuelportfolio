import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-black text-white px-6">
      <div className="navbar-start" onClick={() => navigate("/")}>
        <h1 className="text-3xl font-bold">OSOBA SAMUEL</h1>
      </div>

      {/* Mobile menu button */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Contact scrolls to section */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Contact scrolls to section */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
