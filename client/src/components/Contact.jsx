import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { postContact } from "../api/contact";
import { useForm } from "react-hook-form";
import handleError from "../utils/handleError";
import { toast } from "sonner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const formSubmit = async (data) => {
    try {
      const res = await postContact(data);
      if (res.status === 201) {
        toast.success(res.data.message);

        reset();
      }
      console.log(res);
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <section className="h-screen mt-12 " id="contact">
      <div className="md:flex py-8  px-6 md:px-16 mx-auto">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl md:text-5xl mb-4">LET'S CONNECT</h1>
          <p className="mb-2">
            Say hello at{" "}
            <a href="" className="border-b border-[#D3E97A]">
              samuelosoba7@gmail.com
            </a>
            <br />
          </p>
          <p className="mb-6">
            For more info here is my{" "}
            <a
              href="osobasamuel.docx"
              download="samuel_osoba_resume.docx"
              className="border-b border-[#D3E97A]"
            >
              resume
            </a>
          </p>
          <div className="flex gap-4">
            <a href="http://linkedin.com/in/samuel-osoba-9351b023b">
              <img src={linkedin} alt="" className="w-5" />
            </a>
            <a href="https://github.com/Samuelosoba">
              <img src={github} alt="" className="w-5" />
            </a>
            <a href="">
              <img src={twitter} alt="" className="w-5" />
            </a>
            <a href="">
              <img src={instagram} alt="" className="w-5" />
            </a>
          </div>
        </div>
        {/* form */}
        <form
          action=""
          onSubmit={handleSubmit(formSubmit)}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-[#222222] w-full p-2"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="name" className="mb-2 block">
                Email
              </label>
              <input
                type="text"
                placeholder=""
                className="bg-[#222222] w-full p-2"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="name" className="mb-2 block">
                Subject
              </label>
              <input
                type="text"
                placeholder=""
                className="bg-[#222222] w-full p-2"
                {...register("subject", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="name" className="mb-2 block">
                Message
              </label>
              <textarea
                name=""
                id=""
                className="bg-[#222222] w-full p-2"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button
              className="text-black text-center bg-[#D3E97A] rounded-4xl p-6 h-8 flex items-center "
              type="submit"
              disabled={isSubmitting}
            >
              <p className="">
                {" "}
                {isSubmitting ? " contacting..." : "CONTACT ME"}
              </p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
