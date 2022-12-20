import React from "react";
import { technologies } from "../data";

const Tech = () => {
  return (
    <section>
      <div className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-red-500 font-semibold text-3xl items-center">{`<>Tech Stack</>`}</h6>
          <h1 className="text-3xl md:text-5xl my-4 font-bold text-white">
            View my skills and technologies below.
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-y-12 mx-4">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-[#333333] rounded-md overflow-hidden hover:bg-red-500 hover:cursor-pointer duration-500 ease-in-out shadow-md p-6">
              <figure className="p-4 relative flex flex-col items-center group">
                <img className="w-[80px] " src={tech.picture} alt="" />
                <span className="text-white absolute bottom-[-10px] scale-0 duration-300 ease-in-out font-bold group-hover:scale-100 ">
                  {tech.language}
                </span>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
