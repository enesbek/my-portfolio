import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ff5f06a5-5543-404a-8ffc-cd8a84eef120"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            Contact
          </p>
          <p className="pt-4">
            // Submit the form below or shoot me an email -
            enes.bek.93@gmail.com{" "}
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 text-black bg-gray-200"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 text-black bg-gray-200"
        />
        <textarea
          name="message"
          cols="30"
          rows="8"
          placeholder="Message"
          className="text-black p-2 bg-gray-200"
        />
        <button className="text-white border-2 mt-4 hover:bg-orange-600 hover:border-orange-600 px-4 py-2 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};
