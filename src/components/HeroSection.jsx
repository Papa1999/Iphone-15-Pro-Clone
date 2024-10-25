import { useGSAP } from "@gsap/react";
import { hero } from "../assets/videos";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(() => {
    gsap.to("#heroTitle", {opacity:1, y:0, delay:1.1});
    gsap.to("#video_wrapper", { opacity: 1, y: 0 });
    gsap.to("#video_wrapper", { opacity: 1 });
    gsap.to("#btn", { opacity: 1, y:0,  delay: 1.1 });
  }, []);

  return (
    <section className="container flex flex-col items-center text-white h-screen justify-evenly">
      <h2 className="title opacity-0" id="heroTitle">
        iPhone 15 Pro
      </h2>
      <div id="video_wrapper" className="opacity-0">
        <video autoPlay loop muted>
          <source src={hero} />
        </video>
      </div>

      <button className="btn opacity-0 translate-y-[-20px]" id="btn">Buy</button>
      <div>
        <p className="text-[20px] font-poppins">From $199/month or $999. </p>
      </div>
    </section>
  );
}
