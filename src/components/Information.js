import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import TechMob from "./TechMob";
import Tech from "./Tech";
import Feedbacks from "./Feedbacks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../utils/constants";
import { menu, close } from "../assets";
import { Variants } from "framer-motion";
import { BiSolidArrowToTop } from "react-icons/bi";
import ContactMe from "./ContactMe";
const Information = () => {
  const [data, setData] = useState("Projects");
  const tabData = ["Projects", "Experience"];
  const [isOpen, setIsOpen] = useState(false);
  const [isWindowSizeSmall, setIsWindowSizeSmall] = useState(
    window.innerWidth > 700
  );
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  useEffect(() => {
    // Function to update isWindowSizeSmall when the window is resized
    function handleResize() {
      setIsWindowSizeSmall(window.innerWidth > 500);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const tlup = gsap.timeline();
    tlup.from(
      ".nav-button",
      {
        x: "240%",
      },
      0
    );

    tlup.from(
      ".top-button",
      {
        x: "240%",
      },
      0
    );

    ScrollTrigger.create({
      trigger: ".nav-button",
      start: "700px 80%",
      end: "+=30%",
      // markers: true,
      scrub: 1,
      animation: tlup,
      id: "nav-button",
    });
  }, []);

  return (
    <div
      className={`max-w-6xl min-h-[1080px]  ${
        data == "Projects"
          ? "xxs:max-[500px]:min-h-[5800px]"
          : "xxs:max-[500px]:min-h-[6500px]"
      }   mx-auto flex flex-col`}
    >
      {/* Nav button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-10 h-10 border flex justify-center z-[500] items-center border-pink bg-purple-bg rounded-lg fixed right-10 top-10 nav-button "
      >
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex flex-1 justify-end items-center"
        >
          <motion.button
            className={`w-full ${isOpen ? " mb-1" : ""}`}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setIsOpen(!isOpen);
              // setToggle(!toggle);
            }}
          >
            <motion.img
              src={isOpen ? close : menu}
              alt="menu"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className="w-[28px] h-[28px] mx-auto object-contain"
            />
          </motion.button>
          <motion.ul
            className={`${
              !isOpen ? "hidden" : "block"
            } p-6 bg-gradient-to-r from-[#242635] to-black border border-pink
             absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-[2000] rounded-xl`}
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {navLinks.map((nav) => (
              <motion.li
                variants={itemVariants}
                key={nav.id}
                className={`font-medium cursor-pointer mt-1 text-[16px] text-secondary `}
                onClick={() => {
                  setIsOpen(!isOpen);
                  // setToggle(!toggle);
                  // setActive(nav.title)
                }}
              >
                <a className=" font-dela_gothic" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </motion.div>

      {/* To the top button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="w-10 h-10 border flex justify-center z-[500] items-center border-pink bg-purple-bg rounded-lg fixed right-10 bottom-10 top-button "
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <BiSolidArrowToTop className=" w-[95%] h-[95%] text-white" />
      </motion.button>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        id="projects"
        className="flex bg-richblack-800 p-1 gap-x-1 my-6 mx-auto mt-20 justify-between
         xs:w-[80%] min-[600px]:w-[60%]
        lg:w-[35%] md:w-[50%] xxs:w-[90%] rounded-full border border-pink"
      >
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setData(tab)}
            className={`${
              data === tab
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
            } py-7 px-5 w-[50%] rounded-full transition-all text-xl font-dela_gothic duration-200`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {data == "Projects" ? <Projects /> : <Experience />}
      <TechMob />
      {isWindowSizeSmall && <Tech />}

      <Feedbacks data={data} />
      <ContactMe data={data} />
    </div>
  );
};

export default Information;
