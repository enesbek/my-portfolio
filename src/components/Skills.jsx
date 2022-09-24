import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import Vue from "../assets/vue.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Figma from "../assets/figma.png";
import Docker from "../assets/docker.png";

export const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen md:px-16 bg-[#0a192f] text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            Skills
          </p>
          <p className="py-4">
            /* These are the technologies I've work with */
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="JS icon" className="w-20 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Vue} alt="Vue icon" className="w-20 mx-auto" />
            <p>Vue.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={React} alt="React icon" className="w-20 mx-auto" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Figma} alt="Figma icon" className="w-20 mx-auto" />
            <p>Figma</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Docker} alt="Docker icon" className="w-20 mx-auto" />
            <p>Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
};
