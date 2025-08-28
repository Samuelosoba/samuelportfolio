import React from "react";
import Hero from "../Sections/Hero";
import Project from "../Sections/Project";
import About from "../Sections/About";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <hr className="border-t border-gray-600 my-4" />
      <Project />
      <hr className="border-t border-gray-600 my-4" />
      <About />
      <hr className="border-t border-gray-600 my-4" />
    </div>
  );
}
