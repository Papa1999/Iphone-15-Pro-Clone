import { useGSAP } from "@gsap/react";
import { heroVid, smallHero } from "../utils";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";

export default function HeroSection() {
  useGSAP(() => {
    gsap.to("#Store", { opacity: 1, y: 0, delay: 1.1 });
    gsap.to("#video_wrapper", { opacity: 1, y: 0 });
    gsap.to("#video_wrapper", { opacity: 1 });
    gsap.to("#btn", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to("#paragraph", { opacity: 1, y: 0, delay: 1.8 });
  }, []);

  const [heroVideo, setheroVideo] = useState(
    window.innerWidth < 768 ? smallHero : heroVid
  );

  const handleSize = () => {
    if (window.innerWidth < 768) {
      setheroVideo(smallHero);
    } else {
      setheroVideo(heroVid);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <section className="max-w-full flex justify-center  text-white">
      <div className="container md-padding-x h-screen flex flex-col justify-center max-lg:justify-around">
        <h2 className="title opacity-0 text-center xl:mb-2" id="Store">
          iPhone 15 Pro
        </h2>
        <div id="video_wrapper" className="opacity-0">
          <video
            className="pointer-events-none"
            autoPlay
            loop
            muted
            playsInline={true}
            key={heroVideo}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col items-center gap-[10px]">
          <button
            className="btn opacity-0 translate-y-[80px]  hover:bg-transparent hover:border-[#2997FF] hover:border hover:text-[#2997FF]"
            id="btn"
          >
            Buy
          </button>
          <p
            id="paragraph"
            className="text-[20px] font-poppins translate-y-[80px] opacity-0"
          >
            From $199/month or $999.
          </p>
        </div>
      </div>
    </section>
  );
}
