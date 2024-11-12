import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { models, sizes } from "../constants";
import { useState } from "react";

export default function CloserLook() {
  /*
          Hooks Section           
  */

  // State and Ref
  const [sizePhone, setSizePhone] = useState('6.1"');
  const [model, setModel] = useState({
    size: '6.1"',
    color: null,
    name: null,
  });

  // GSAP animation and Effect
  useGSAP(() => {
    gsap.to(".title", {
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
            {models.map((model) => (
              <div
                key={model.id}
                className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full cursor-pointer"
                style={{ backgroundColor: model.color[0] }}
              ></div>
            ))}
          </div>
          <button className="flex gap-[15px] bg-white bg-opacity-50 rounded-3xl p-2">
            {sizes.map((size) => (
              <div
                key={size.value}
                className="flex justify-center items-center w-[32px] h-[32px]   rounded-full text-white"
                style={{
                  backgroundColor:
                    size.label === model.size ? "white" : "transparent",
                  color: size.label === model.size ? "black" : "white",
                }}
                onClick={() => {
                  setModel((model) => ({ ...model, size: size.label }));
                  setSizePhone(size.label);
                }}
              >
                {size.label}
              </div>
            ))}
          </button>
        </div>
      </div>
    </section>
  );
}
