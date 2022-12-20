import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "About", link: "/" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-[#333333] shadow-md w-full top-0 left-0 z-[100] px-8">
      <div className="md:flex items-center justify-between py-2 max-w-[1250px] m-auto">
        <div className="font-bold text-3xl cursor-pointer flex items-center text-white">
          <img
            className="w-[50px] h-[50px] hover:scale-125 duration-300"
            src={Logo}
            alt=""
          />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl w-5 absolute right-8 top-6 cursor-pointer md:hidden text-white hover:text-red-500 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center
                    md:pb-0 pb-12 md:static
                    md:z-auto z-[-1]
                    left-0 w-full md:w-auto
                    md:pl-0 transition-all duration-300 ease-in ${
                      isOpen ? "top-16 opacity-100" : "top-[-490px] absolute "
                    } md:opacity-100`}
        >
          {menu.map((item) => (
            <li
              key={item.name}
              className={`text-center md:ml-8 md:my0 my-7 ${
                isOpen ? `text-6xl py-4` : `text-xl`
              }`}
            >
              <a
                href={item.link}
                className="text-white hover:text-red-500 duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
