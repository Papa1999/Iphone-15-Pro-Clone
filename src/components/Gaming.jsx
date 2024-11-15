import { chip, frameImg } from "../utils";

export default function Gaming() {
  return (
    <section className="container min-h-screen pdy-128 text-white">
      <div style={{ width: "320px", height: "320px" }} className="mx-auto">
        <img src={chip} alt="A17 Pro" />
      </div>
      <p className="text-center">A17 Pro chip.</p>
      <p className="text-center">A Monster win for gaming.</p>
      <p className="text-center">
        It's Here The biggest design in history of Apple GPUs.{" "}
      </p>
      <div className="w-full px-10">
        <img src={frameImg} alt="" />
      </div>
      <p className="text-center">Honkai: Star Rail</p>
      <div className="flex justify-between">
        <div>
          <p className="max-w-[452px]">
            A17 Pro is an entirely new class of iPhone chip that delivers our
            best graphics performance by far.
          </p>
          <p className="max-w-[452px]">
            Mobile games will look and feel so immersive, with incredibly
            detailed environments and more realistic characters. And with
            industry-leading speed and efficiency, A17 Pro takes fast and runs
            with it.
          </p>
        </div>
        <div className="max-w-[452px]">
          <p>
            New <br />
            <span>Pro-class GPU</span> <br />
            with 6 cores
          </p>
        </div>
      </div>
    </section>
  );
}
