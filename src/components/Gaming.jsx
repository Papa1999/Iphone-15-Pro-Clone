import { chip, frameImg, frameVid } from "../utils";

export default function Gaming() {
  return (
    <section className="container min-h-screen pdy-128 text-white">
      <div
        style={{ width: "180px", height: "180px" }}
        className="mx-auto mb-[100px]"
      >
        <img src={chip} alt="A17 Pro" />
      </div>
      <p className="text-5xl text-white font-semibold text-center">
        A17 Pro chip.
      </p>
      <p className="text-5xl text-white font-semibold text-center">
        A Monster win for gaming.
      </p>
      <p className="text-2xl text-center text-[#86868b] font-semibold mt-[50px]">
        It's Here The biggest design in history of Apple GPUs.{" "}
      </p>
      <div className="relative w-full px-10 mt-[100px]">
        <img src={frameImg} alt="frame" className="mx-auto" />
        <div className=" mx-auto flex justify-center absolute top-[25px] pl-[50px] ">
          <video
            playsInline={true}
            autoPlay
            muted
            loop
            className="rounded-[80px] max-w-3/5"
          >
            <source src={frameVid} type="video/mp4" />
          </video>
        </div>
      </div>
      <p className="text-lg text-center text-[#86868b] font-semibold mb-[50px]">
        Honkai: Star Rail
      </p>
      <div className="flex justify-between">
        <div>
          <p className="max-w-[452px] text-[#86868b] font-semibold text-xl mb-[30px]">
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-white">
              best graphics performance by far.
            </span>
          </p>
          <p className="max-w-[512px] text-[#86868b] font-semibold text-xl">
            Mobile
            <span className="text-white">
              {" "}
              games will look and feel so immersive{" "}
            </span>
            , with incredibly detailed environments and more realistic
            characters. And with industry-leading speed and efficiency, A17 Pro
            takes fast and runs with it.
          </p>
        </div>
        <div className="max-w-[512px] flex-1">
          <p className=" text-[#86868b] font-semibold text-xl">
            New <br />
            <span className="font-bold text-5xl my-2 block text-white ">
              Pro-class GPU
            </span>
            with 6 cores
          </p>
        </div>
      </div>
    </section>
  );
}
