import { useGSAP } from "@gsap/react";
import { play, playWhite, right } from "../assets/images";
import gsap from "gsap";
import { hightlightsSlides } from "../constants";

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
    gsap.to("#Carousel", {opacity:1, delay:1.50 })
  });
  return (
    <section
      id="Hightlight"
      className="w-full h-screen text-white flex flex-col justify-evenly  bg-[#232323] overflow-hidden "
    >
      <div className="container flex  max-md:flex-col max-md:gap-5 justify-between ">
        <h2 id="title" className="title">
          Get The Hightlight.
        </h2>
        <div className="flex gap-5 ">
          <div className="flex items-center gap-2 link opacity-0 translate-y-20">
            <a href="/" className="text-[#2997FF] text-[15px]">
              Watch the Film
            </a>
            <div>
              <img src={play} alt="play button" />
            </div>
          </div>
          <div className="flex items-center  gap-2 link opacity-0 translate-y-20">
            <a href="/" className="text-[#2997FF] text-[15px] ">
              Watch the event
            </a>
            <div>
              <div className="h-[20px] w-[20px] flex justify-start items-center">
                <img src={right} alt="right button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Carousel" className="flex overflow-x-scroll gap-5 lg:pl-[250px] md:pl-[250px] sm:w-5/6 sm:mx-auto opacity-0">
        {hightlightsSlides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="bg-black md:w-[540px] md:h-[316px] rounded-3xl flex justify-center items-center ">
              <video autoPlay muted playsInline={true} loop className="w-3/5">
                <source src={slide.video} type="video/mp4" />
              </video>
            </div>
            <div className="absolute top-[50px] left-[20px]">
              {slide.textLists.map((textList, index) => (
                <p key={index} className="text-xl font-medium">{textList}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[250px] h-[55px] flex justify-around items-center gap-[20px] self-center ">
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
      </div>
    </section>
  );
}
