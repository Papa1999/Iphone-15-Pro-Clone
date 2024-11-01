import { hightlightsSlides } from "../constants";

export default function VideoCarousel() {
  return (
    <>
      <div className="flex">
        {hightlightsSlides.map((slide, id) => (
          <div className="flex justify-center items-center  w-[88vw] h-[50vh] bg-black">
            <div className="w-full relative">
              <div key={slide.id} className="">
                <video>
                  <source src={slide.video} />
                </video>
              </div>
              <div className="absolute top-0">
                {slide.textLists.map((text, id) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
