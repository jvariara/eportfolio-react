import React from "react";
import HeaderImg from "../assets/header-img.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Landing = () => {
  return (
    <header className="h-[calc(100vh-100px)] w-full flex">
      <div className="max-w-[1320px] m-auto">
        <div className="container mx-auto md:flex items-center xs:flex-col">
          <div className="flex-initial m-4 md:w-2/4 ">
            <h6 className="text-red-500 font-semibold text-2xl">
              Hi, my name is
            </h6>
            <h1 className="text-7xl md:text-9xl my-4 font-bold text-white">
              Justin.
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold text-red-500">
              Frontend Developer
            </h2>
            <p className="text-white my-4 text-2xl">
              I'm a{" "}
              <span className="text-red-500">Frontend Software Developer</span>{" "}
              with a passion for web development with amazing client experiences
              with the use of modern technologies like React and Tailwind
            </p>
            <div className="flex text-red-500">
                <a className="mr-5" href="https://github.com/jvariara" target="_blank"><GitHubIcon /></a>
                <a className="mr-5" href="https://www.linkedin.com/in/justin-variara-a2183a22a/" target="_blank"><LinkedInIcon /></a>
                <a className="mr-5" href='../assets/Resume.pdf'><PictureAsPdfIcon /></a>
            </div>
          </div>
          <div className="xs:hidden">
            <img src={HeaderImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
