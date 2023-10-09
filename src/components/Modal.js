import React, { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Modal = ({ toggle, setToggle, project }) => {
  const ref = useRef(null);
  const outerDivRef = useRef();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const handleClickOutside = (event) => {
    if (outerDivRef.current && !outerDivRef.current.contains(event.target)) {
      setToggle(!toggle);
    }
  };

  //   useOnClickOutside(ref, () => setToggle(false));
  return (
    <motion.div
      onClick={(e) => {
        // Check if the clicked element is the outer div (backdrop)
        if (e.target === outerDivRef.current) {
          setToggle(false); // Close the modal
        }
      }}
      ref={outerDivRef}
      initial={{ x: "-100%" }}
      animate={toggle ? "open" : "closed"}
      exit="exit"
      transition={{
        ease: "linear",
        duration: 0.1,
      }}
      variants={variants}
      className={`fixed inset-0 z-[100]  !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        className="w-4/5 z-[1000]  max-h-[85%]  relative rounded-lg flex flex-col gap-5 border border-pink bg-purple-bg p-8 
                "
      >
        {/* Close Button */}
        <i
          onClick={() => {
            setToggle(false);
          }}
          className=" absolute right-0 top-0 text-pink p-4 cursor-pointer "
        >
          <AiOutlineClose className=" w-8 h-8" />
        </i>

        {/* Project Title */}
        <p
          className={`font-dela_gothic text-7xl text-slate-200 self-start
                  min-[300px]:max-[450px]:text-3xl
                  min-[300px]:max-[450px]:mx-auto
                  min-[451px]:max-[640px]:text-5xl
                  min-[451px]:max-[640px]:mx-auto
                  sm:text-5xl 
                  lg:text-6xl`}
        >
          {project.title}
        </p>

        <div className=" text-slate-200 font-dela_gothic flex flex-wrap items-center">
          <p className=" text-pink text-2xl min-[300px]:max-[399px]:text-sm min-[400px]:max-[450px]:text-base">
            Tech Stack :
          </p>
          {project.modalData.stack.map((tech, i) => (
            <span
              key={i}
              className=" font-dela_gothic text-2xl min-[300px]:max-[399px]:text-sm min-[400px]:max-[450px]:text-base text-slate-200 tracking-wide"
            >
              <span>&nbsp;</span>
              {tech}
              {i < project.modalData.stack.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>

        <div className=" text-slate-200 font-dela_gothic flex flex-col gap-2 min-[451px]:max-[640px]:gap-5">
          <p className=" text-2xl text-pink min-[300px]:max-[399px]:text-sm min-[400px]:max-[450px]:text-base">
            Features:
          </p>
          {project.modalData.features.map((tech, i) => (
            <p
              key={i}
              className="flex items-center font-dela_gothic text-2xl gap-2  min-[300px]:max-[399px]:text-sm min-[400px]:max-[450px]:text-base
               text-slate-200 tracking-wide"
            >
              <BsFillCaretRightFill className="  min-[300px]:max-[450px]:hidden min-[451px]:max-[640px]:hidden w-9 h-9 text-pink" />
              <span className=" min-[640px]: w-[95%]">{tech}</span>
            </p>
          ))}
        </div>

        <div className=" flex gap-3 items-center">
          <a
            href={`${project.modalData.github}`}
            target="_blank"
            className=" flex justify-center cursor-pointer text-slate-200 items-center rounded-full hover:bg-purple-bg hover:text-pink
             hover:border-pink group duration-300 xl:w-[15%]  min-[300px]:max-[450px]:w-[45%] min-[451px]:max-[640px]:w-[35%] sm:max-md:w-[35%]
             md:max-lg:w-[25%] lg:w-[25%]
           bg-pink border border-slate-200 gap-2 p-3"
          >
            <BsGithub className=" w-[15%] h-[15%] min-[300px]:max-[450px]:hidden text-slate-200 duration-300 group-hover:text-pink" />
            <p className="font-dela_gothic text-lg min-[300px]:max-[399px]:text-sm tracking-wide">
              Github
            </p>
          </a>
          <a
            href={`${project.modalData.demo}`}
            target="_blank"
            className=" flex justify-center cursor-pointer text-slate-200 items-center rounded-full xl:w-[15%]
            hover:bg-purple-bg hover:text-pink min-[300px]:max-[450px]:w-[45%] min-[451px]:max-[640px]:w-[35%] sm:max-md:w-[35%]
             md:max-lg:w-[25%] lg:w-[25%]
             hover:border-pink group duration-300 
           bg-pink border border-slate-200 gap-2 p-3"
          >
            <IoMdOpen className=" w-[15%] h-[15%] duration-300 min-[300px]:max-[450px]:hidden  text-slate-200 group-hover:text-pink" />
            <p className=" font-dela_gothic text-lg min-[300px]:max-[399px]:text-sm  tracking-wide">
              Demo
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
