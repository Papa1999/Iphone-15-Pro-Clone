import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explore, explore1, explore2 } from "../utils";

export default function FullStory() {
  /*
          Hooks Section           
  */

  // State and Ref

  /*
          Functionalities Section           
   */

  // GSAP animation and Effect
  useGSAP(() => {
    gsap.to("#FullStory", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#FullStory",
      },
    });
    gsap.to("#Bento", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#Bento",
        start: "top 80%",
      },
    });
    gsap.to("#ScaleImg", {
      scale: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#ScaleImg",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  /*
          Rendering Part           
   */
  return (
    <section className="max-w-full xl-padding-y min-h-screen pdy-128 text-white bg-[#232323]">
      <div className="container">
        <h2
          className="opacity-0 text-4xl font-medium text-[#86868b] translate-y-20"
          id="FullStory"
        >
          Explore the full Story.
        </h2>
        <div className="w-10/12 mx-auto mt-[100px] ">
          <p
            id="FullStory"
            className="text-5xl text-white font-semibold opacity-0 translate-y-20"
          >
            iPhone. <br /> forged in titanium.{" "}
          </p>
          <div
            id="Bento"
            className="my-[60px] grid grid-rows-2 grid-cols-2 opacity-0"
          >
            <div className="col-span-2">
              <video
                playsInline={true}
                autoPlay
                loop
                muted
                className="h-full w-full object-cover object-center"
              >
                <source src={explore} type="video/mp4" />
              </video>
            </div>
            <div className="flex overflow-hidden">
              <img
                id="ScaleImg"
                src={explore1}
                alt="eplore 1"
                className="h-full w-full object-fill object-center scale-150"
              />
            </div>
            <div className="flex overflow-hidden">
              <img
                id="ScaleImg"
                src={explore2}
                alt="eplore 2"
                className="h-full w-full object-cover object-center scale-150"
              />
            </div>
          </div>
          <div className="w-full flex gap-10 max-lg:gap-5">
            <p className="text-[#86868b] font-semibold text-xl">
              Iphone 15 Pro is{" "}
              <span className="text-white">
                the first iPhone to an aerospace-grade titanium design,
              </span>{" "}
              using the same alloy that spacecraft use for mission to Mars.{" "}
            </p>
            <p className="text-[#86868b] font-semibold text-xl">
              Titanium has one of the best strength-to-weight ratios of any
              metal, making these our{" "}
              <span className="text-white">lightest Pro models ever</span>.
              You’ll notice the difference the moment you pick one up.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
