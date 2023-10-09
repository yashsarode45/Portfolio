import React, { useEffect, useRef } from "react";
import { styles } from "../utils/styles";
import { fadeIn, textVariant } from "../utils/motion";

import { motion, useScroll } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OpenGmail, OpenOutlook } from "react-contact-buttons";
const ContactMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.section
      ref={ref}
      id="contact"
      className={` xl:w-[95%]  xxs:max-xs:w-[90%] xs:max-xl:w-[95%] xxs:max-xs:-mt-16  mx-auto  mb-8`}
      style={{ opacity: scrollYProgress }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
    >
      <div className={`mt-12 contact-section  rounded-[20px]`}>
        <div
          className={`bg-purple-bg rounded-2xl ${styles.padding} flex flex-col gap-4 sm:px-10 min-h-[300px] `}
        >
          <motion.div
            className=" lg:flex flex-col items-center "
            variants={textVariant()}
          >
            <p className={`${styles.sectionSubText}  font-dela_gothic`}>
              Let's Talk!
            </p>
            <h2
              className={`${styles.sectionHeadText} xxs:max-xs:text-[28px] text-slate-200 font-dela_gothic tracking-wide`}
            >
              Contact Me
            </h2>
          </motion.div>
          <div
            className={` bg-richblack-900 flex flex-col xxs:max-xs:w-full xxs:max-xs:px-4 items-center mx-auto gap-10 p-5 px-8 rounded-lg  lg:w-[80%]`}
          >
            <OpenGmail to="yashsarode45@gmail.com">
              <div>
                <p className=" font-dela_gothic xxs:max-lg:text-left text-base md:text-2xl text-pink ">
                  Email:{" "}
                </p>
                <span className=" text-white  font-dela_gothic text-base md:text-2xl ">
                  yashsarode45@gmail.com
                </span>
              </div>
            </OpenGmail>
            <a
              className=" font-dela_gothic cursor-pointer text-base lg:text-2xl mb-5 text-white  underline underline-offset-[10px] decoration-pink hover:text-pink hover:decoration-white
             hover:underline-offset-4 duration-200 "
            >
              Let's connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
