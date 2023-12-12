import React from "react";
import HeaderImg from "../assets/header-img.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Resume from "../assets/Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  return (
    <header className="h-[calc(100vh-100px)] w-full flex">
      <div className="max-w-[1250px] m-auto">
        <div className="container mx-auto md:flex items-center xs:flex-col">
          <div className="flex-initial m-4 md:w-2/4 ">
            <h6
              className="text-red-500 font-semibold text-2xl"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Hi, my name is
            </h6>
            <h1
              className="text-7xl md:text-9xl my-4 font-bold text-white"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Justin.
            </h1>
            <h2
              className="text-4xl md:text-6xl font-semibold text-red-500"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
            <p
              className="text-white my-4 text-2xl"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              I'm a{" "}
              <span className="text-red-500 font-semibold">
                Software Developer
              </span>{" "}
              with a passion for web development with{" "}
              <span className="text-red-500 font-semibold">amazing</span> client
              experiences with the use of modern technologies like{" "}
              <span className="text-red-500 font-semibold">React</span>,{" "}
              <span className="text-red-500 font-semibold">Tailwind</span> and{" "}
              <span className="text-red-500 font-semibold">Next.js</span>
            </p>
            <div
              className="flex text-red-500"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="1200"
            >
              <a
                className="mr-5 hover:scale-125 duration-300 ease-in-out"
                href="https://github.com/jvariara"
                target="_blank"
              >
                <GitHubIcon />
              </a>
              <a
                className="mr-5 hover:scale-125 duration-300 ease-in-out"
                href="https://www.linkedin.com/in/justinvariara/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="mr-5 hover:scale-125 duration-300 ease-in-out"
                href={Resume}
                target="_blank"
              >
                <PictureAsPdfIcon />
              </a>
            </div>
          </div>
          <div
            className="xs:hidden"
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <img src={HeaderImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
