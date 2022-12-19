import React from "react";

const Project = ({ project }) => {
  return (
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
            className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl hover:opacity-75 duration-300"
          >
            Live
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl hover:opacity-75 duration-300"
            >
              Github
            </a>
          )}
          {project.certificate && (
            <a
              href="./assets/FESCertificate.pdf"
              target="_blank"
              className="text-red-500 bg-white px-8 py-2 m-4 rounded-md text-2xl hover:opacity-75 duration-300"
            >
              Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
