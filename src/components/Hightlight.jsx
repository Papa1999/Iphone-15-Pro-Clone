import { useGSAP } from "@gsap/react";
import { playWhite } from "../utils";
import gsap from "gsap";
import { hightLightLinks } from "../constants";
import VideoCarousel from "./VideoCarousel";

export default function Highlight() {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1 });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      delay: 1,
      duration: 1,
    });
    gsap.to("#Carousel", { opacity: 1, delay: 1.5 });
  });
  return (
    <section
      id="Hightlight"
      className="w-full text-white flex flex-col justify-evenly bg-[#232323]"
    >
      <div className="container flex  max-md:flex-col max-md:gap-5 justify-between ">
        <h2 id="title" className="title">
          Get The Hightlight.
        </h2>
        <div className="flex gap-5 ">
          {hightLightLinks.map((link) => (
            <div className="flex items-center gap-2 link opacity-0 translate-y-20">
              <a href="/" className="text-[#2997FF] text-[15px]">
                {link.text}
              </a>
              <div>
                <img src={link.icon} alt="play button" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoCarousel />
      {/* <div id="Carousel" className="">
        <div className="w-[60%] mx-auto bg-black ">
          <div className="bg-black flex w-full">
            {hightlightsSlides.map((slide) => (
              <div key={slide.id} >
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <video autoPlay muted playsInline={true} loop>
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="absolute top-[0px] left-[20px]">
                    {slide.textLists.map((textList, index) => (
                      <p key={index} className="text-xl font-medium">
                        {textList}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="w-[250px] h-[55px] flex justify-around items-center gap-[20px] self-center ">
        <div
          id="Sliders Icons"
          className="w-[170px] h-[55px] flex  justify-evenly items-center gap-[15px]rounded-lg"
        >
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center h-[45px] w-[45px]  opacity-50 rounded-full ">
          <img src={playWhite} alt="play icon" />
        </div>
      </div> */}
    </section>
  );
}
