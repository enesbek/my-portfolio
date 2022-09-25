import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNavClick() {
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <img src={Logo} width="50" alt="Logo png" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-orange-500"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-orange-500"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-orange-500"
            >
              Contact
            </Link>
          </li>
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
        <li className="py-6 text-4xl">
          <Link onClick={handleNavClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
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
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:enes.bek.93@gmail.com"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-green-400">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/enesbek/portfolio/blob/main/src/assets/Resume.pdf"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
