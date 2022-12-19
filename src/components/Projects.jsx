import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-red-500 font-semibold text-3xl items-center">{`<>Projects</>`}</h6>
        <h1 className="text-3xl md:text-5xl my-4 font-bold text-white">
          View my work below.
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-y-12 mx-4">
        {projects.map((project) => (
          <div className="rounded-lg bg-red-500 overflow-hidden shadow-md">
            <figure>
              <img src={project.picture} alt="" />
            </figure>
            <div className="bg-red-500">
              <h1 className="text-white text-3xl font-semibold p-4">
                {project.title}
              </h1>
              <p className="text-white text-2xl p-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.tech.map((tech) => (
                  <span className="text-white border-2 border-white border-solid px-6 py-2 m-4 rounded-md text-2xl">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex">
                <a
                  href={project.url}
                  target="_blank"
                  className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl"
                >
                  Live
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl"
                  >
                    Github
                  </a>
                )}
                {project.certificate && (
                  <a
                    href="./assets/FESCertificate.pdf"
                    target="_blank"
                    className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl"
                  >
                    Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
