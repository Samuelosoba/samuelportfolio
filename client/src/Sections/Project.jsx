import React from "react";
import Image from "../assets/image.jpeg";
import Task from "../assets/Task.png";
import Properties from "../assets/Properties.png";
import New from "../assets/New.jpeg";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";
const projects = [
  {
    title:
      "Task Duty. A full-stack task management web application built with the MERN stack.",
    description:
      "Developed a task management web application with core features including add, edit, and delete tasks with real-time updates. Built with MongoDB for data persistence, Express.js & Node.js for backend APIs, and React.js for a responsive frontend. Implemented form validation, CRUD operations, and RESTful API structure to ensure a smooth user experience, while designing a clean and accessible UI/UX using Tailwind CSS.",
    image: Task,
    year: "2025",
    role: "Fullstack Developer",
    github: "https://github.com/Samuelosoba/Task-Duty",
    live: "https://task-duty-client.vercel.app/",
  },
  {
    title: "BetaHouse, a real estate web app",
    description:
      "Developed Betahouse, a real estate web application to browse and view properties with location details, using the MERN stack. Implemented property listings with filtering and search, integrated backend APIs with Express.js & MongoDB for property data management, and built a responsive frontend with React.js. Designed an intuitive UI/UX with Tailwind CSS to enhance user interaction and accessibility.",
    image: Properties,
    year: "2025",
    role: "Fullstack Developer",
    github: "https://github.com/Samuelosoba/BetaHouse",
    live: "https://beta-house-pink-eight.vercel.app/",
  },
  {
    title: "New Gold Travels And Tours.",
    description:
      "Built New Gold Travels and Tours, a responsive landing page for a travel agency client. Designed and developed with the MERN stack to highlight services, destinations, and contact information. Implemented a modern UI using React.js and Tailwind CSS to ensure mobile-friendly performance and engaging user experience.",
    image: New,
    year: "2025",
    role: "Fullstack Developer",
    live: "https://newgold22travels.ng",
  },
];
export default function Project() {
  return (
    <section className="bg-black" id="work">
      <div className="py-6 px-16 mx-auto ">
        <h1 className="text-4xl font-bold md:text-5xl">FEATURED PROJECT</h1>
        <p className="mt-4">
          Here are some of the selected projects that showcase my passion for
          full-stack development.
        </p>
        {projects.map((project, index) => (
          <div className="mt-20 md:flex justify-between gap-8">
            {/* left image */}
            <div className="md:py-12 px-8 pt-12 bg-[#222222] rounded-sm md:w-1/2">
              <img
                src={project.image}
                alt=""
                className="w-full h-[347px] object-cover"
              />
            </div>
            {/* right side */}
            <div className="md:w-1/2 mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <h2 className="mt-8">PROJECT INFO</h2>
              <hr className="border-t border-gray-600 my-4" />
              <div className="flex justify-between">
                <p>Year</p> <p>{project.year}</p>
              </div>
              <hr className="border-t border-gray-600 my-4" />
              <div className="flex justify-between">
                <p>Role</p>
                <p>{project.role}</p>
              </div>
              <hr className="border-t border-gray-600 my-4" />
              <div className="flex gap-4 mt-12">
                <a
                  href={project.live}
                  className="border-b-2 flex border-[#D3E97A] text-[#D3E97A] "
                >
                  LIVE DEMO <img src={arrow} alt="" className="w-5" />
                </a>
                <a
                  href={project.github}
                  className=" flex gap-2 border-b-2 border-[#D3E97A] text-[#D3E97A] "
                >
                  SEE ON GITHUB <img src={github} alt="" className="w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
