import React, { useEffect, useState } from "react";
import ThreeJSComp from "./components/ThreeJSComp";
import Intro from "./components/Intro";
import Information from "./components/Information";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCursor from "react-animated-cursor";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  // Lenis smooth scroll
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // You can adjust the screen width threshold as needed
    console.log("isMobile", isMobile);
    let lenis = null;
    if (isMobile) {
      lenis = new Lenis({
        smoothTouch: true,
        touchMultiplier: 2,
      });
    } else {
      lenis = new Lenis({
        lerp: 0.1, // Adjust the lerp value for mobile
        smoothWheel: true, // Disable smooth scrolling for mouse wheel events on mobile
        // Disable smooth scrolling for touch events on mobile
      });
    }

    lenis.on("scroll", () => ScrollTrigger.update());

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="app" className=" home relative">
      <AnimatedCursor
        className="z-50"
        showSystemCursor={true}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #fff",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: "#hero-name",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
            innerStyle: {
              backgroundColor: "#dc2c5a",
            },
            outerStyle: {
              border: "3px solid #dc2c5a",
            },
          },
        ]}
      />
      <Analytics />
      <div
        className="webgl w-full max-[380px]:h-[810px] min-[381px]:max-[420px]:h-[910px]     min-[421px]:max-[767px]:h-[1150px]
        md:max-lg:h-[650px]  h-[100vh]
      min-[1540px]:h-[910px]"
      >
        <ThreeJSComp />
        <div className=" w-full webgl2">
          <Information />
        </div>
      </div>
      <Intro main-container />
    </div>
  );
};

export default App;
