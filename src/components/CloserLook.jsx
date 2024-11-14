import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { models, sizes } from "../constants";
import { useState } from "react";
import Iphone from "./iPhone";

export default function CloserLook() {
  /*
          Hooks Section           
  */

  // State and Ref
  const [sizePhone, setSizePhone] = useState("small");
  const [model, setModel] = useState({
    img: null,
    color: null,
    title: "iPhone 15 Pro in Natural Titanium",
  });

  const { color, img, title } = model;

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
      <h2 className="title text-white" id="iPhone">
        Take a closer look
      </h2>
      <div className="closerlook_container h-[75vh] max-sm:h-[80vh]">
        {/* <Iphone /> */}
      </div>
      <div className="flex flex-col gap-5 items-center">
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
