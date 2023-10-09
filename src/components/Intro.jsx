import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Information from "./Information";
const Intro = () => {
  return (
    <div className="absolute top-0 w-full">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Intro;
