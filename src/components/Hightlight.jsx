import { play, playWhite, right } from "../assets/images";
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
            <a href="/" className="text-[#2997FF] text-[15px]">
              Watch the Film
            </a>
            <div>
              <img src={play} alt="play button" />
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <a href="/" className="text-[#2997FF] text-[15px]">
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
      <div
        id="Carousel Container"
        className="carousel my-10 xl:pl-[70px] lg:pl-[175px] md:pl-[175px] flex gap-[40px] overflow-hidden "
      >
        <Carousel />
        <Carousel />
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
