import React from "react";

import BallCanvas from "./Ball";
import SectionWrapper from "./SectionWrapper";
import { technologies } from "../data/ProjectsData";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 xxs:max-sm:hidden ">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// export default Tech;
export default SectionWrapper(Tech, "");
