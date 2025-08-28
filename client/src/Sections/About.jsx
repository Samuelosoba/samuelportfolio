import React from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <section className="bg-black h-screen mt-16">
      <div className="md:flex mx-auto px-6 md:px-16 py-8">
        <h1 className="md:w-1/2 text-3xl md:text-5xl font-bold  hidden md:block">
          ABOUT ME
        </h1>
        <div className="md:w-1/2">
          <h2 className="text-xl  mb-4">
            I’m Osoba Samuel, a passionate MERN Stack Web Developer with
            hands-on experience in building responsive and user-friendly
            applications.
          </h2>
          <p className="mb-8">
            I specialize in React.js, Node.js, Express.js, and MongoDB, creating
            projects that balance functionality with clean design. I’ve
            developed projects ranging from task management apps with real-time
            updates to property listing platforms and business landing pages. My
            focus is on problem-solving, scalability, and delivering smooth user
            experiences through modern web technologies. Beyond coding, I enjoy
            continuous learning, exploring UI/UX best practices, and building
            solutions that make a real impact.
          </p>
          <Link
            to="/about"
            className="text-[#D3E97A] font-bold border-b border-[#D3E97A] mt-16"
          >
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </section>
  );
}
