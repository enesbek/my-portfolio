import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full">
        <p className="text-orange-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-2">
          ENES BEK
        </h1>
        <h2 className="text-xl sm:text-4xl font-bold text-[#a6a6a6]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-orange-300 py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et
          aspernatur molestias, odit soluta rem blanditiis quam atque accusamus
          in labore minus est laborum nostrum officiis eligendi quaerat unde
          magnam.
        </p>
        <div className="">
          <button className="text-white group font-semibold border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
