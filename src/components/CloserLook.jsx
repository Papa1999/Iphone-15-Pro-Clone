import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { ModelView } from "./";

const Model = () => {
  /* States */
  const [size, setSize] = useState("small");
  const [model, setModel] = useState(models[0]);

  // Angle of rotation for the 3D object
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // Camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Group for the model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // const tl = gsap.timeline();

  /* Functionnalities  */
  const handleSize = (value, model) => {
    setSize(value);
    setModel(model);
  };

  /* 
        Effect and Animation    
  */

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  /* 
        Rendering of the component 
  */
  return (
    <section className="common-padding">
      <div className="container">
        <h1 id="heading" className="opacity-0 translate-y-20 title text-center">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] flex overflow-hidden">
            <ModelView
              index={model === models[0] ? 1 : 2}
              gsapType="view1"
              groupRef={small}
              size={size}
              item={model}
              setRotation={setSmallRotation}
              controlRef={cameraControlSmall}
            />

            <ModelView
              index={2}
              item={model}
              gsapType="view2"
              size={size}
              setRotation={setLargeRotation}
              ref={cameraControlLarge}
              groupRef={large}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <p className="text-xl font-regular text-center mb-5 text-white">
            {model.title}
          </p>
          <div className="mx-auto w-full">
            <div className="flex justify-center gap-[50px]">
              <ul className="flex bg-white bg-opacity-10 px-[18px] py-[20px] rounded-3xl ">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-[20px] h-[20px] rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="flex items-center gap-[10px] bg-white bg-opacity-10 rounded-3xl  px-[10px] ">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className=" flex items-center  w-[32px] h-[32px] rounded-full font-semibold p-[5px]"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
