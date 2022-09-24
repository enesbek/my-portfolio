import React from "react";

export const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full md:h-screen bg-[#0a192f] md:px-16 text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2">
          <div className="sm:text-right sm:pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              Experience
            </p>
          </div>
          <div>
            <p className="pt-4 ml-4 mb-4">// Here is my working experiences</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-rows-2 px-4">
          <div className="grid sm:grid-cols-3 mb-2 border-dotted border-b-2 border-orange-600">
            <div className="">
              <span className="font-bold"> Modanisa</span>
              <p className="mb-2 italic mt-2 text-gray-300">
                {" "}
                10/2021 – 03/2022 Istanbul{" "}
              </p>
              <p className="font-semibold text-gray-300">
                Full Stack Developer Intern
              </p>
            </div>
            <div className="col-span-2 text-gray-300">
              Complete intern roadmap which has full stack projects via using
              Vue.js and Go. This projects needs Acceptance Tests, unit tests
              and component tests in frontend and backend, Consumer Driven
              Contracts, CI/CD with Circle.CI and Google Cloud Platform. TDD
              approach in every development process.
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="">
              <span className="font-bold"> Doğuş Teknoloji</span>
              <p className="mb-2 italic mt-2 text-gray-300">
                {" "}
                05/2022 – 10/2022 Istanbul{" "}
              </p>
              <p className="font-semibold text-gray-300">
                Full Stack Developer Intern
              </p>
            </div>
            <div className="col-span-2 text-gray-300">
              I worked in a department that aimed to develop technology for
              startups with a large team of interns. I was selected for a role
              in a combination of Team Leader and Scrum Master roles in a small
              team. We are working on an NFT Marketplace project. We started
              with React on the frontend, Solidity for smart contracts and .Net
              as the backend in this project. I'm taking more roles in the
              frontend.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
