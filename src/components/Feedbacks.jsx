import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../data/ProjectsData";

import { styles } from "../utils/styles";
import { staggerContainer } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <Tilt
      tiltReverse={true}
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-richblack-900 p-5 px-8 rounded-3xl xs:max-lg:w-[280px] lg:w-[320px] w-full"
    >
      <p className="text-white font-black  text-[48px]">"</p>

      <div className="mt-1 flex flex-col justify-between gap-7">
        <p
          className={`text-white tracking-normal font-inconsolata text-[18px] ${
            index > 0 ? " mb-[22px]" : ""
          }`}
        >
          {testimonial}
        </p>

        <div className=" flex justify-between items-center gap-1">
          <div
            className={`flex-1 flex flex-col ${
              index == 0 ? " mb-[15px]" : ""
            } `}
          >
            <p className="text-slate-200 font-medium font-dela_gothic text-[16px]">
              {name}
            </p>
            <p className="mt-1 text-secondary font-inconsolata tracking-tight text-[14px]">
              {designation}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.section
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="recommendations"
      className={` xl:w-[95%] xxs:max-xs:mx-3 xs:max-xl:w-[95%]  mx-auto recommendations-section`}
    >
      <div className={`mt-12   rounded-[20px]`}>
        <div
          className={`bg-purple-bg rounded-2xl ${styles.padding} sm:px-10 min-h-[300px] `}
        >
          <motion.div
            className=" lg:flex flex-col items-center "
            variants={textVariant()}
          >
            <p className={`${styles.sectionSubText}  font-dela_gothic`}>
              What others say
            </p>
            <h2
              className={`${styles.sectionHeadText} xxs:max-xs:text-[28px] text-slate-200 font-dela_gothic tracking-wide`}
            >
              Recommendations
            </h2>
          </motion.div>
        </div>
        <div
          className={`-mt-40 md:-mt-20 pb-14 ${styles.paddingX} sm:px-10 xl:px-5 mx-auto flex justify-center flex-wrap gap-4`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feedbacks;
