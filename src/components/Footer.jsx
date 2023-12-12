import React from "react";
import Logo from "../assets/logo.svg";
import Resume from "../assets/Resume.pdf";

const Footer = () => {
  const footerList = [
    { name: "Github", link: "https://github.com/jvariara" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/justinvariara/",
    },
    { name: "Resume", link: Resume },
  ];

  return (
    <footer className="shadow-md bg-[#333333] w-full top-0 left-0 z-[100] px-8">
      <div className="flex flex-col items-center justify-center py-[4rem]">
        <a href="#">
          <img
            className="w-[50px] h-[50px] hover:scale-125 duration-300"
            src={Logo}
            alt=""
          />
        </a>
        <div className="max-w-[450px] w-full flex justify-between my-8">
          {footerList.map((item) => (
            <a
              className="text-white hover:text-red-500 duration-500"
              href={item.link}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div class="text-white">Copyright &copy; 2022 Justin Variara</div>
      </div>
    </footer>
  );
};

export default Footer;
