import { play, right } from "../assets/images";
import Carousel from "./Carousel";

export default function Highlight() {
  return (
    <section
      id="Hightlight"
      className=" w-full h-screen text-white flex flex-col justify-evenly  bg-[#232323] overflow-hidden "
    >
      <div className="container flex  max-md:flex-col max-md:gap-5 justify-between ">
        <h2 className="title">Get The Hightlight.</h2>
        <div className="flex gap-5 ">
          <div className="flex items-center gap-2">
            <a href="/">Watch the Film</a>
            <div>
              <img src={play} alt="play button" />
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <a href="/">Watch the event</a>
            <div>
              <img src={right} alt="right button" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="Carousel Container"
        className="carousel my-10 xl:pl-[70px] lg:pl-[175px] md:pl-[175px] flex gap-[40px] overflow-hidden "
      >
        <Carousel />
        <Carousel />
      </div>
      <div className="w-[250px] h-[55px] flex justify-around items-center self-center ">
        <div
          id="Sliders Icons"
          className="w-[170px] h-[55px] flex  justify-evenly items-center gap-[15px] "
        >
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
        </div>
        <div className="flex items-center ">
          <img src={play} alt="play icon" />
        </div>
      </div>
    </section>
  );
}
