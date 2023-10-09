import React, { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { aboutMe } from "../data/ProjectsData";
const HeroModal = ({ toggle, setToggle }) => {
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
        className="w-4/5 z-[1000] xxs:max-sm:max-h-[95%]  max-h-[85%]  relative rounded-lg flex flex-col gap-5 border border-pink bg-purple-bg p-8 xxs:max-xs:p-4
              "
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setToggle(false);
          }}
          className=" absolute right-0 top-0 text-pink p-4 cursor-pointer "
        >
          <AiOutlineClose className=" w-8 h-8" />
        </button>

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
          About Me
        </p>

        <div className=" text-slate-200 font-dela_gothic flex flex-col gap-4 xxs:max-xs:gap-2 min-[451px]:max-[640px]:gap-5">
          {aboutMe.map((abt, i) => (
            <p
              key={i}
              className="flex items-center font-dela_gothic text-xl gap-2  min-[300px]:max-[399px]:text-sm min-[400px]:max-[450px]:text-sm
             text-slate-200 tracking-wide"
            >
              <BsFillCaretRightFill className="  min-[300px]:max-[450px]:hidden min-[451px]:max-[640px]:hidden w-10 h-10  text-pink" />
              <span className=" min-[640px]:w-[95%]">{abt}</span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroModal;
