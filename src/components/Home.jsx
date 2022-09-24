import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen md:px-16 bg-[#0a192f] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right md:pb-8 text-center pl-4">
            <p className="text-5xl sm:text-6xl font-bold inline border-b-4 border-orange-600">
              ENES BEK
            </p>
          </div>
          <div className="pt-8 italic text-xl text-center mb-4">
            Software Developer
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-lg sm:text-2xl text-center">
          <div className="">
            <p>Hi, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="text-orange-500 ">
              Software is an art and I'm very excited to be part of it!
            </p>
          </div>
        </div>
        <Link
          to="experience"
          smooth={true}
          duration={2000}
          className="text-white mt-8 text-lg w-54 group font-semibold border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600"
        >
          View Experience
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-2" />
          </span>
        </Link>
      </div>
    </div>
  );
};
