import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import { navLinks } from "../utils/constants";
import { menu, close } from "../assets";
import { motion, Variants } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      animate={{ y: [-150, 0] }}
      transition={{
        type: "spring",
        delay: 0.4,
        stiffness: 300,
        damping: 24,
        duration: 1,
        ease: "easeInOut",
      }}
      className={`${styles.paddingX} w-full flex  items-center py-7 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <div
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[22px] cursor-pointer flex items-baseline">
            <span className=" font-dela_gothic"> Yash&nbsp;{""} </span>
            <span className="text-pink font-dela_gothic">Sarode</span>
          </p>
        </div>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white duration-200 text-[20px]  font-medium cursor-pointer`}
              onClick={() => {
                // setActive(nav.title);
              }}
            >
              <a
                className=" link link-metis font-dela_gothic"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Navbutton */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="md:hidden flex flex-1 justify-end items-center"
        >
          <motion.button
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
              className="w-[28px] h-[28px] object-contain"
            />
          </motion.button>
          <motion.ul
            className={`${
              !isOpen ? "hidden" : "block"
            } p-6 bg-gradient-to-r from-[#242635] to-black border border-pink
             absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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
                className={`font-medium cursor-pointer mt-1 text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
