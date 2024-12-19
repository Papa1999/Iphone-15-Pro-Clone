import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const gsapAnimate = (target, animationsProps, scrollProps) => {
  gsap.to(target, {
    ...animationsProps,
    scrollTrigger: {
      ...scrollProps,
      trigger: target,
    },
  });
};

export const gsapTranslate = (target, id) => {
  gsap.to(target, {
    x: `${id === 4 ? 0 : -id * 106}%`,
    ease: "power2.inOut",
    duration: 1.3,
  });
};

