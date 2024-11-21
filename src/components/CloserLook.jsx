import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { models, sizes } from "../constants";
import { useState } from "react";

export default function CloserLook() {
  /*
          Hooks Section           
  */

  // State and Ref
  const [sizePhone, setSizePhone] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
  });

  const { title } = model;

  // GSAP animation and Effect
  useGSAP(() => {
    gsap.to("#iPhone", {
      opacity: 1,
      y: 0,
    });
  }, []);

  /*
          Functionalities Section           
   */

  /*
          Rendering Part           
   */
  return (
    <section className="container pdy-80 min-h-screen flex flex-col items-center">
      <h2
        className="opacity-0 text-4xl font-medium text-[#86868b] translate-y-20"
        id="iPhone"
      >
        Take a closer look
      </h2>
      <div className="container min-h-[70vh] my-[20px] max-sm:h-[80vh] bg-white">
        {/* <Iphone /> */}
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white text-[20px] font-poppins">{title}.</p>
        <div className="flex  items-center">
          <div
            id="Sliders Icons"
            className="w-[170px] h-[55px] flex gap-[15px] items-center"
          >
            {models.map((singleModel) => (
              <div
                key={singleModel.id}
                className="w-[24px] h-[24px] rounded-full cursor-pointer"
                style={{ backgroundColor: singleModel.color[0] }}
                onClick={() =>
                  setModel((prevModel) => ({
                    ...prevModel,
                    color: singleModel.color[0],
                  }))
                }
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
                    size.value === sizePhone ? "white" : "transparent",
                  color: size.value === sizePhone ? "black" : "white",
                }}
                onClick={() => {
                  setSizePhone((prevSize) => size.value);
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
