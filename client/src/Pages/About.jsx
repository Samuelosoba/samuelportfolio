import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import image from "../assets/About.jpeg";
const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "NODEJS",
  "TAILWINDCSS",
  "REACT",
  "MONGODB",
];
const experiences = [
  {
    title: "Freelance Developer",
    start: "2025",
    end: "Present",
    description:
      "Developed custom websites and web applications for clients, focusing on responsive design and optimized performance. Built and deployed landing pages, task management apps, and property listing platforms using the MERN stack. Collaborated with clients to gather requirements and deliver tailored digital solutions. Ensured accessibility, cross-browser compatibility, and smooth user experience through modern frontend practices.",
  },
  {
    title: "FullStack Developer Intern",
    start: "2025",
    end: "Present",
    company: "Techstudio Academy",
    description:
      "Gained hands-on experience in frontend development with React.js, JavaScript, and Tailwind CSS. Contributed to the development of responsive and dynamic user interfaces.Worked in a collaborative environment, following agile methodologies and version control practices (Git/GitHub).Strengthened problem-solving and teamwork skills while completing real-world projects.",
  },
];

export default function About() {
  return (
    <div className="">
      {" "}
      {/* hero section */}
      <section className=" mx-auto px-16 py-8 h-screen">
        <div className="md:flex ">
          <h1 className="md:w-1/2 text-3xl md:text-5xl font-bold  hidden md:block">
            ABOUT ME
          </h1>
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold  mb-6">
              I’m Osoba Samuel, a passionate MERN Stack Web Developer with
              hands-on experience in building responsive and user-friendly
              applications.
            </h2>
            <p className="mb-8">
              I specialize in React.js, Node.js, Express.js, and MongoDB,
              creating projects that balance functionality with clean design.
              I’ve developed projects ranging from task management apps with
              real-time updates to property listing platforms and business
              landing pages. My focus is on problem-solving, scalability, and
              delivering smooth user experiences through modern web
              technologies. Beyond coding, I enjoy continuous learning,
              exploring UI/UX best practices, and building solutions that make a
              real impact.
            </p>
            <div className="flex mt-8 gap-2">
              <button className="text-black text-center bg-[#D3E97A] rounded-2xl px-4 h-8 flex items-center gap-5">
                <a
                  href="osobasamuel.docx"
                  download="samuel_osoba_resume.docx"
                  className="font-bold"
                >
                  RESUME
                </a>
                <div className="w-3 h-3 rounded-full  bg-black"></div>
              </button>
              <a
                className="h-8 w-8 bg-[#222222] p-2 rounded-full"
                href="http://linkedin.com/in/samuel-osoba-9351b023b"
              >
                <img src={linkedin} alt="" className="w-5" />
              </a>
              <a
                className="h-8 w-8 bg-[#222222] p-2 rounded-full"
                href="https://github.com/Samuelosoba"
              >
                <img src={github} alt="" className="w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-600 my-4" />
      {/* capability section */}
      <section className="mt-16 mx-auto px-16 py-8">
        <img src={image} alt="" className="object-cover w-full h-[440px]" />
        <div className="md:flex mt-12 ">
          <h1 className="md:w-1/2 text-3xl md:text-5xl font-bold  mb-6">
            CAPABILITY
          </h1>
          <div className="md:w-1/2">
            <p className="mb-8">
              I am always eager to learn new technologies, expand my expertise,
              and prove my skills by taking on challenging projects.
            </p>
            <div className="flex gap-4 flex-wrap">
              {skills.map((skill, index) => (
                <div className="py-2 px-4 border rounded-4xl">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-600 my-4" />
      {/* Experience */}
      <section className="px-16 py-8 mx-auto mt-16">
        {" "}
        <div className="md:flex mt-16 ">
          <h1 className="md:w-1/2 text-3xl mb-6 md:text-5xl font-bold  ">
            EXPERIENCE
          </h1>
          <div className="md:w-1/2">
            {experiences.map((experience, index) => (
              <div className="mb-14">
                <div className="md:flex justify-between">
                  <h2 className="text-xl font-bold">{experience.title}</h2>
                  <div className="flex gap-2">
                    <p>{experience.start}</p> - <p>{experience.end}</p>
                  </div>
                </div>
                <p className="font-bold text-[#D3E97A]">{experience.company}</p>
                <p className="mt-8 text-wrap ">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-600 my-4" />
    </div>
  );
}
