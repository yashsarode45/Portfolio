import React from "react";
import { technologies } from "../data/ProjectsData";
import { RiHexagonFill } from "react-icons/ri";
import Tilt from "react-parallax-tilt";
import Polygon from "../assets/hexagonskill.png";
import "./Projects.css";
const TechMob = () => {
  return (
    <div className="flex flex-row mx-auto mt-10 flex-wrap justify-center items-center w-[90%] gap-10 sm:hidden">
      {technologies.map((technology) => (
        <Tilt
          perspective={500}
          scale={1.02}
          className="w-28 h-28 relative parallax-effect-glare-scale"
          key={technology.name}
        >
          <img className="absolute inset-0 " src={Polygon} />
          <div
            className={`inner-element absolute z-50 pb-[1px] inset-0 w-full h-full flex justify-center items-center`}
          >
            <img
              className={`w-[60%] ${
                technology.name == "Redux Toolkit" ? " pb-[14px]" : " pb-1"
              } 
              ${technology.name == "Three JS" ? " pl-[8px]" : ""} 
              ${technology.name == "Photoshop" ? " w-[45%]" : ""} 
            object-contain`}
              src={technology.icon}
            />
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default TechMob;
