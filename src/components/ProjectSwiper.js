import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cardData } from "../data/ProjectsData";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { github } from "../assets";
import "./Projects.css";
import { IoMdOpen } from "react-icons/io";
// import required modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectSwiper = () => {
  useEffect(() => {
    const tlother = gsap.timeline();
    tlother.from(
      ".title-other",
      {
        x: "-115%",
        opacity: 0,
      },
      0
    );
    tlother.from(
      ".swiper-container",
      {
        opacity: 0,
      },
      0
    );
    ScrollTrigger.create({
      trigger: ".title-other",
      start: "clamp(top 80%)",
      end: "+=40%",
      // markers: true,
      scrub: 1,
      animation: tlother,
      id: "other-projects",
    });
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.75)}
      className=" flex flex-col gap-8 w-full max-w-6xl items-center"
    >
      <p
        className={`font-dela_gothic text-7xl text-slate-200 self-start
        min-[300px]:max-[450px]:text-3xl title-other
        min-[300px]:max-[450px]:mx-auto 
        min-[451px]:max-[640px]:text-5xl
        min-[451px]:max-[640px]:mx-auto
        sm:text-6xl sm:mx-auto lg:text-7xl`}
      >
        Other Projects
      </p>
      <div className=" xxs:max-xs:w-[90%] lg:max-xl:w-[90%]  xxs:max-lg:max-w-maxContentTab xl:max-w-full mt-3 swiper-container">
        <Swiper
          spaceBetween={25}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
          breakpoints={{
            // When the viewport width is less than or equal to 767px (mobile and tablet size)
            767: {
              slidesPerView: 1,
            },
            // Default configuration for larger screens (width greater than 767px)
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              centeredSlides: 1,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {cardData.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className=" bg-purple-bg  
                flex flex-col p-5 gap-4 rounded-2xl lg:w-[360px] w-full"
                >
                  {/* Image and icons */}
                  <div className="relative w-full h-[230px] md:max-lg:min-h-[330px]">
                    <img
                      src={card.image}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute gap-2 inset-0 flex justify-end m-3 card-img_hover">
                      <a
                        href={card.github}
                        target="_blank"
                        className=" bg-purple-bg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={github}
                          alt="source code"
                          className="w-2/3 h-2/3 object-contain"
                        />
                      </a>

                      <a
                        href={card.demo}
                        target="_blank"
                        className="bg-purple-bg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <IoMdOpen className="w-[55%] h-[55%] object-contain text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Title and desc */}
                  <div className="">
                    <h3 className="text-slate-200 font-dela_gothic text-[24px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px] font-inconsolata tracking-tight">
                      {card.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, i) => (
                      <p
                        key={i}
                        className={`text-[14px] text-pink font-inconsolata`}
                      >
                        #{tag}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ProjectSwiper;
