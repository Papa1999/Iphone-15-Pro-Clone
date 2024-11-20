import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explore, explore1, explore2 } from "../utils";

export default function FullStory() {
  /*
          Hooks Section           
  */

  // State and Ref

  // GSAP animation and Effect
  useGSAP(() => {
    gsap.to("#FullStory", {
      y: 0,
      opacity: 1,
    });
  }, []);
  /*
          Functionalities Section           
   */

  /*
          Rendering Part           
   */
  return (
    <section className="container min-h-screen pdy-128 text-white bg-[#232323]">
      <h2
        className="opacity-0 text-4xl font-medium text-[#86868b] translate-y-20"
        id="FullStory"
      >
        Explore the full Story.
      </h2>
      <div className="w-4/5 mx-auto mt-[100px]">
        <p className="text-5xl text-white font-semibold">
          iPhone. <br /> forged in titanium.{" "}
        </p>
        <div className="my-[60px] grid grid-rows-2 grid-cols-2">
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
          <div>
            <img
              src={explore1}
              alt="eplore 1"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src={explore2}
              alt="eplore 2"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full flex gap-10">
          <p className="text-[#86868b] font-semibold text-xl">
            Iphone 15 Pro is{" "}
            <span className="text-white">
              the first iPhone to an aerospace-grade titanium design,
            </span>{" "}
            using the same alloy that spacecraft use for mission to Mars.{" "}
          </p>
          <p className="text-[#86868b] font-semibold text-xl">
            Titanium has one of the best strength-to-weight ratios of any metal,
            making these our{" "}
            <span className="text-white">lightest Pro models ever</span>. You’ll
            notice the difference the moment you pick one up.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
