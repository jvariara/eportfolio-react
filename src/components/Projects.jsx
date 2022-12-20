import React, { useState } from "react";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <div className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-red-500 font-semibold text-3xl items-center">{`<>Projects</>`}</h6>
          <h1 className="text-3xl md:text-5xl my-4 font-bold text-white">
            View my work below.
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-y-12 mx-4">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
