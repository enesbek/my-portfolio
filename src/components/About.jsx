import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-semibold">
            <p>Hi. I'm Enes, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quidem, expedita saepe consequatur amet adipisci. Itaque
              accusantium est at laborum atque officia obcaecati. Perferendis
              incidunt, quos praesentium dignissimos nisi necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
