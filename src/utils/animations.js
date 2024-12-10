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
    x: `${id === 4 ? 0 : -id * 100}%`,
    ease: "power2.inOut",
    duration: 1.3,
  });
};

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      ...scrollProps,
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
