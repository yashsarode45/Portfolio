import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import { Item } from "./Item";
import StudyNotion from "../assets/StudyNotion.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import useOnClickOutside from "../utils/useOnClickOutside";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { projectData } from "../data/ProjectsData";
import { animate } from "framer-motion";
import Modal from "./Modal";
import ProjectSwiper from "./ProjectSwiper";
const Projects = () => {
  gsap.registerPlugin(Flip, ScrollTrigger);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toggle, setToggle] = useState(false);
  console.log("Toggle is", toggle);

  useEffect(() => {
    // Create a flip animation for each SVG
    projectData.forEach((project, i) => {
      const flip = gsap.timeline();
      flip.fromTo(
        `.mask-${i}`,
        {
          attr: { r: 0 },
        },
        {
          ease: "none",
          attr: { r: 950 },
        },
        0
      );

      ScrollTrigger.create({
        trigger: `.title-wrap-${i}`,
        ease: "none",
        start: "clamp(top 50%)",
        end: "+=40%",
        // markers: true,
        scrub: 1,
        animation: flip,
      });
    });
  }, [projectData]);

  // useOnClickOutside(ref, () => setToggle(false));

  useEffect(() => {
    [...document.querySelectorAll(".content-wrap")].forEach((element) => {
      new Item(element);
    });
  }, []);

  return (
    <div className="mt-6 flex flex-col gap-5">
      {projectData.map((project, i) => {
        const handleKnowMoreClick = () => {
          setToggle(!toggle);
          setSelectedProject(project); // Store the selected project in state
        };
        return (
          <div
            key={i}
            className=" relative content-wrap mx-auto flex flex-col gap-8 items-center mb-5
            min-[300px]:max-[450px]:w-[80%] min-[300px]:max-[450px]:gap-4
            min-[451px]:max-[640px]:w-[80%] min-[451px]:max-[640px]:gap-6
            sm:w-[80%] sm:gap-6
            lg:gap-8"
          >
            {/* Title */}
            <p
              className={`title-wrap title-wrap-${i} font-dela_gothic text-7xl text-slate-200 self-start
        min-[300px]:max-[450px]:text-3xl
        min-[300px]:max-[450px]:mx-auto
        min-[451px]:max-[640px]:text-5xl
        min-[451px]:max-[640px]:mx-auto
        sm:text-6xl sm:mx-auto
                         lg:text-7xl`}
            >
              {project.title}
            </p>
            {/* Image */}
            <svg
              className={`content__img content__img--2 w-[120%] 
              min-[300px]:max-[450px]:h-[180px]
              min-[451px]:max-[640px]:h-[220px]
              sm:h-[320px] md:h-[345px] min-[850px]:h-[440px]
              lg:h-[470px]
              xl:h-[500px]
            `}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1000 450"
            >
              {/* Your SVG content here */}
              <defs>
                <filter id={`displacementFilter-${i}`}>
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.1"
                    numOctaves="1"
                    result={`noise-${i}`}
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2={`noise-${i}`}
                    result={`displacement-${i}`}
                    scale="100"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                  <feMorphology
                    operator="dilate"
                    radius="2"
                    result={`morph-${i}`}
                    in={`displacement-${i}`}
                  />
                </filter>
                <mask id={`circleMask-${i}`}>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="0"
                    data-value-final="950"
                    fill="white"
                    className={`mask mask-${i}`}
                    style={{ filter: `url(#displacementFilter-${i})` }}
                  />
                </mask>
              </defs>
              <image
                className="shadow-md rounded-lg "
                xlinkHref={project.image}
                width="100%"
                height="100%"
                mask={`url(#circleMask-${i})`}
              />
            </svg>
            {/* Desc */}
            <p
              className=" font-inconsolata text-lg italic text-slate-200 w-1/2 text-center
          min-[300px]:max-[450px]:w-full tracking-tight
          min-[451px]:max-[640px]:w-full
          sm:w-full
          clip-path"
            >
              {project.desc}
            </p>
            {/* Know more button */}
            <motion.a
              animate={{
                x: [-2.5, 10, -2.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: 2,
              }}
              onClick={handleKnowMoreClick}
              className=" flex justify-center items-center gap-2 duration-500 rounded-full cursor-pointer p-5 mx-auto
            hover:bg-pink group bg-purple-bg border border-pink self-start h-10 w-1/2 clip-path know-more
            min-[451px]:max-[640px]:w-[35%]
            min-[451px]:max-[640px]:mx-auto
            sm:w-1/3 sm:h-14 sm:mx-auto 
            lg:w-1/4"
            >
              <span className=" text-pink font-inconsolata lg:text-lg group-hover:text-white duration-500">
                Know More{" "}
              </span>
              <i className=" text-pink group-hover:text-white duration-500">
                <AiOutlineArrowRight />
              </i>
            </motion.a>

            {/* Modal */}
            {toggle && (
              <Modal
                project={selectedProject}
                toggle={toggle}
                setToggle={setToggle}
              />
            )}
          </div>
        );
      })}

      {/* Other projects Swiper */}
      <ProjectSwiper />
    </div>
  );
};

export default Projects;
