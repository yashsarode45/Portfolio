import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-vertical-timeline-component/style.min.css";
import "./Projects.css";
import { styles } from "../utils/styles";
import { experiences } from "../data/ProjectsData";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className=""
      contentStyle={{
        background: "#242635",
        color: "#dc2c5a",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={experience.date}
      iconClassName="vertical-timeline.vertical-timeline-custom-line"
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-dela_gothic">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold font-inconsolata tracking-tight"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[16px] pl-1 font-inconsolata "
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  useEffect(() => {
    const tlup = gsap.timeline();
    tlup.from(
      ".title-experience",
      {
        x: "-115%",
        opacity: 0,
      },
      0
    );

    ScrollTrigger.create({
      trigger: ".title-experience",
      start: "clamp(top 80%)",
      end: "+=40%",
      // markers: true,
      scrub: 1,
      animation: tlup,
      id: "title-exp",
    });
  }, []);

  return (
    <>
      <div className="title-experience ">
        <p className={`${styles.sectionSubText} text-center font-dela_gothic`}>
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center font-dela_gothic`}
        >
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="costum-line" lineColor={"#dc2c5a"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
// export default Experience;
