import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNavClick() {
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>Logo</div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleNavClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col  justify-center items-center bg-[#0a192f]"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*Social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://www.linkedin.com/in/enes-bek/"
              target="_blank"
              className="flex justify-between items-center w-full text-white"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/enesbek"
              target="_blank"
              className="flex justify-between items-center w-full text-white"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#DB4539]">
            <a className="flex justify-between items-center w-full text-white">
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-green-400">
            <a className="flex justify-between items-center w-full text-white">
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
