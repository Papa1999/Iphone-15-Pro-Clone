export default function CloserLook() {
  return (
    <section className="container h-screen text-white flex flex-col justify-evenly items-center">
      <h2 className="title">
        Take a closer look
      </h2>
      <div></div>
      <p>iPhone 15 Pro in Blue Titanium. </p>
      <div className="closerlook_container h-[70vh] border-solid border-2 border-white "></div>
      <div className="flex">
        <div id="Sliders Icons" className="w-[170px] h-[55px] flex gap-[15px]">
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
        </div>
        <div className="flex gap-[15px]">
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF] opacity-90 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
