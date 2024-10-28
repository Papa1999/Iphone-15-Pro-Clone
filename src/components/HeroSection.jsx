import { useGSAP } from "@gsap/react";
import { hero, smallHero } from "../assets/videos";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";

export default function HeroSection() {
  useGSAP(() => {
    gsap.to("#heroTitle", { opacity: 1, y: 0, delay: 1.1 });
    gsap.to("#video_wrapper", { opacity: 1, y: 0 });
    gsap.to("#video_wrapper", { opacity: 1 });
    gsap.to("#btn", { opacity: 1, y: 0, delay: 1.1 });
    gsap.to("#paragraph", { opacity: 1, y: 0, delay: 1.1 });
  }, []);

  const [heroVideo, setheroVideo] = useState(
    window.innerWidth < 768 ? smallHero : hero
  );

  const handleSize = () => {
    if (window.innerWidth < 768) {
      setheroVideo(smallHero);
    } else {
      setheroVideo(hero);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <section className="container flex flex-col items-center text-white h-screen justify-evenly">
      <h2 className="title opacity-0" id="heroTitle">
        iPhone 15 Pro
      </h2>
      <div id="video_wrapper" className="opacity-0">
        <video autoPlay loop muted>
          <source src={heroVideo} />
        </video>
      </div>

      <button className="btn opacity-0 translate-y-[50px]" id="btn">
        Buy
      </button>
      <div>
        <p
          id="paragraph"
          className="text-[20px] font-poppins translate-y-[50px] opacity-0"
        >
          From $199/month or $999.
        </p>
      </div>
    </section>
  );
}
