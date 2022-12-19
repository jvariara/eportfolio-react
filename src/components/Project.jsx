import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Project = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  return (
    <div className="rounded-lg bg-red-500 overflow-hidden shadow-md">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {project.pictures.map((picture) => (
            <img className="keen-slider__slide" src={picture} alt="" />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
      <div className="bg-red-500">
        <h1 className="text-white text-3xl font-semibold p-4">
          {project.title}
        </h1>
        <p className="text-white text-2xl p-4">{project.description}</p>
        <div className="flex flex-wrap">
          {project.tech.map((tech) => (
            <span className="text-white border-2 border-white border-solid px-6 py-2 m-4 rounded-md text-2xl hidden md:block">
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
