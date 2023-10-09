import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "../assets/Hero5.png";
import { RxOpenInNewWindow } from "react-icons/rx";
import { animate } from "framer-motion";
import HeroModal from "./HeroModal";
const Hero = () => {
  const sequence = [
    [
      "img",
      { scale: [0, 1] },
      {
        type: "spring",
        delay: 0.4,
        stiffness: 300,
        damping: 24,
        duration: 1,
        ease: "easeInOut",
      },
    ],
  ];
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <section
      className=" relative flex justify-between items-center mx-auto
     max-w-6xl  md:flex-row flex-col-reverse sm:py-16 py-6"
    >
      <motion.div
        animate={{ x: [-700, 0] }}
        transition={{
          type: "spring",
          delay: 0.4,
          stiffness: 300,
          damping: 24,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex-1 flex  flex-col gap-5 
      xl:px-0 sm:px-16 md:max-lg:px-8 px-6"
      >
        <p className=" xxs:max-md:text-center text-4xl font-dela_gothic text-white">
          <span className=" md:max-md-870:block">👋</span> Hi, I'm{" "}
          <span
            id="hero-name"
            className="text-4xl z-[10] cursor-pointer font-dela_gothic text-pink relative group"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Yash
            <motion.div
              animate={{
                x: [-6, 3, -6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 2,
              }}
              className="-z-10 bottom-[5px] rounded-sm duration-300 left-2 absolute w-full h-3 bg-white group-hover:h-[80%] group-hover:-left-1 group-hover:w-[110%] "
            ></motion.div>
          </span>
        </p>
        <p className=" text-xl xxs:max-md:text-center xxs:max-md:w-full w-[90%] md:max-lg:w-full font-inconsolata text-white">
          I'm a dedicated, self-driven full-stack developer with a passion for
          continuous learning and problem-solving.
        </p>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/18EjxImjBRzD0vPeEKP4kEcwvQX7pL6WT/view?usp=sharing"
          target="_blank"
          className="relative inline-flex items-center xxs:max-md:mx-auto justify-center px-4 py-4 overflow-hidden 
          font-medium border border-pink transition-all h-16 rounded-full
           bg-purple-bg  group xxs:max-md:w-[52%] md:w-[70%] lg:w-[45%]  xl:w-[35%]"
        >
          <span
            className="w-48 h-48 rounded rotate-[-40deg] bg-pink absolute bottom-0 left-3 -translate-x-full 
          ease-out duration-500 transition-all translate-y-full mb-9 ml-9  group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 
          xxs:max-md:group-hover:scale-x-150 xxs:max-md:group-hover:w-72 xxs:max-md:group-hover:h-96"
          ></span>
          <span className="relative w-full font-dela_gothic text-xl text-pink transition-colors duration-300 ease-in-out text-center group-hover:text-white">
            Resume <RxOpenInNewWindow className=" inline w-6 h-6 ml-1" />
          </span>
        </a>

        <div className=" flex gap-4 justify-start items-center xxs:max-md:mx-auto">
          <a href="https://github.com/yashsarode45" target="_blank">
            <BsGithub className=" w-10 h-10 text-white hover:text-pink duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/yashsarode/" target="_blank">
            <BsLinkedin className=" w-10 h-10 text-white hover:text-pink duration-200" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 xl:px-0 sm:px-16 md:max-lg:px-8 px-6 image"
        animate={{
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,

          repeatDelay: 1,
          ease: "easeInOut",
        }}
      >
        <img className=" w-[85%] mx-auto" src={Image} />
      </motion.div>

      <motion.div
        animate={{ y: [150, 0] }}
        transition={{
          type: "spring",
          delay: 0.4,
          stiffness: 300,
          damping: 24,
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute xxs:max-md:-bottom-16 min-[1540px]:-bottom-20 bottom-0 w-full flex justify-center items-center"
      >
        {/* scroller */}
        <a href="#projects">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>

      {/* Modal */}
      {toggle && <HeroModal toggle={toggle} setToggle={setToggle} />}
    </section>
  );
};

export default Hero;
