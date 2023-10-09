import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export class Item {
  DOM = {
    el: null,
    titleWrap: null,
    titleUp: null,
    titleDown: null,
    content: null,
    svg: null,
    mask: null,
    image: null,
    clipPath: null,
    knowMore: null,
    overlay: null,
    knwBtn: null,
  };
  flipstate = null;

  constructor(DOM_el, flipTimeline) {
    // Assign DOM elements
    this.DOM.el = DOM_el;
    this.DOM.titleWrap = this.DOM.el.querySelector(".title-wrap");
    // console.log("title is", this.DOM.titleWrap);
    this.DOM.clipPath = this.DOM.el.querySelector(".clip-path");
    this.DOM.knowMore = this.DOM.el.querySelector(".know-more");
    this.DOM.svg = this.DOM.el.querySelector(".content__img");
    this.DOM.mask = this.DOM.svg.querySelector(".mask");
    this.DOM.image = this.DOM.svg.querySelector("image");
    this.DOM.overlay = this.DOM.svg.querySelector(".overlay");

    // Check if the mask element is a circle or a path
    const isCircle = this.DOM.mask.tagName.toLowerCase() === "circle";

    const tlup = gsap.timeline();
    tlup.from(
      this.DOM.titleWrap,
      {
        x: "-115%",
        opacity: 0,
      },
      0
    );

    const tlclip = gsap.timeline();
    tlclip.to(
      this.DOM.clipPath,
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        duration: 2.2,
      },
      0
    );
    tlclip.to(
      this.DOM.knowMore,
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        duration: 1,
      },
      1
    );

    ScrollTrigger.create({
      trigger: this.DOM.titleWrap,
      start: "clamp(top 80%)",
      end: "+=40%",
      // markers: true,
      scrub: 1,
      animation: tlup,
      id: "title",
    });
    ScrollTrigger.create({
      trigger: this.DOM.svg,
      start: "clamp(60% 70%)",
      end: "+=10%",
      // markers: true,
      scrub: 1,
      animation: tlclip,
      id: "clip",
    });
  }
}
