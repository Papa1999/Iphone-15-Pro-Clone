import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CloserLook() {
  useGSAP(() => {
    gsap.to(".title", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="container h-screen flex flex-col justify-between items-center">
      <h2 className="title text-white">Take a closer look</h2>
      <div className="closerlook_container h-[75vh] max-sm:h-[80vh]"></div>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-white text-[20px] font-poppins">
          iPhone 15 Pro in Blue Titanium.
        </p>
        <div className="flex  items-center">
          <div
            id="Sliders Icons"
            className="w-[170px] h-[55px] flex gap-[15px] items-center"
          >
            <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
            <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
            <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
            <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          </div>
          <div className="flex gap-[15px]">
            <div className="w-[32px] h-[32px]  opacity-50 rounded-full bg-[#FFFFFF] ">
              <p className="text-white">6.1”</p>
            </div>
            <div className="w-[32px] h-[32px]   rounded-full bg-[#FFFFFF] opacity-50">
              <p className="text-[#FFFFFF]  opacity-90">6.1”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
