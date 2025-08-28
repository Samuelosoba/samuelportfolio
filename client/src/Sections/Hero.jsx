import React from "react";
import { Link } from "react-router";
import Image from "../assets/image.jpeg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="md:flex py-6 px-15 mx auto items-center justify-between">
        <div className="md:w-1/2 ">
          <h1 className="text-4xl md:text-6xl">
            HI, I AM <br />
            OSOBA SAMUEL
          </h1>
          <p className="mt-4">
            Full-stack developer passionate about creating scalable, accessible,
            and user-friendly web applications.
          </p>
          <div className="flex mt-8 gap-2">
            <button className="text-black text-center bg-[#D3E97A] rounded-2xl px-4 h-8 flex items-center gap-5">
              <a href="#contact" className="font-bold">
                CONTACT ME
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
        <div className="sm:mt-4">
          <img
            src={Image}
            alt=""
            className="w-full h-[440px] object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
