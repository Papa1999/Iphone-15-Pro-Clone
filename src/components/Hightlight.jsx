import { useGSAP } from "@gsap/react";
import { pause, playWhite, replay } from "../utils";
import gsap from "gsap";
import { hightLightLinks, hightlightsSlides } from "../constants";
import { useRef, useEffect, useState } from "react";

export default function Highlight() {
  /* Ref and States */
  const videosRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [videoId, setvideoId] = useState(0);

  const [videoOnTrack, setvideoOnTrack] = useState({
    isLastVideo: videoId === 3 ? true : false,
    startPlay: false,
    onTrack: false,
    isEnd: false,
  });

  const { isLastVideo, startPlay, onTrack, isEnd } = videoOnTrack;

  /* Functionalities  */
  const handleTrack = (state, index) => {
    switch (state) {
      case "next":
        setvideoId(() => index + 1);
        break;
      case "reset":
        setvideoId(0);
        break;
      case "pause":
        setvideoOnTrack((prev) => ({
          ...prev,
          onTrack: !prev.onTrack,
        }));
        break;
      case "play":
        setvideoOnTrack((prev) => ({
          ...prev,
          onTrack: !prev.onTrack,
        }));
        break;
      default:
        return videoOnTrack;
    }
  };

  /* Animations and Effect */

  useEffect(() => {
    console.log(videoOnTrack);
  });

  useGSAP(() => {
    gsap.to("#Mac", { opacity: 1, y: 0, duration: 0.8 });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      delay: 0.5,
      duration: 0.8,
    });
    gsap.to("#Carousel_container", { opacity: 1, delay: 1.5 });
  });

  return (
    <section
      id="Hightlight"
      className="max-w-full min-h-screen text-white flex flex-col bg-[#232323] justify-center xl-padding-y"
    >
      <div className="container">
        <div className="flex  max-md:flex-col max-md:gap-5 justify-between">
          <h2
            id="Mac"
            className="opacity-0 text-6xl font-medium text-[#86868b] translate-y-20 "
          >
            Get the hightlight.
          </h2>
          <div className="flex gap-5 ">
            {hightLightLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 link opacity-0 translate-y-20"
              >
                <a href="/" className="text-[#2997FF] text-xl font-normal ">
                  {link.text}
                </a>
                <div>
                  <img src={link.icon} alt="play button" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="Carousel_container"
          className="container h-[440px] flex overflow-x-scroll gap-5 max-md:gap-10  opacity-0 my-[40px]"
        >
          {hightlightsSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-[90%] h-full bg-black rounded-3xl flex items-center justify-center text-lg font-semibold max-sm:min-w-[100%] max-md:min-w-[90%] relative "
            >
              <div className="h-full flex items-center justify-center">
                <video
                  className="h-4/5"
                  preload="auto"
                  playsInline={true}
                  muted
                  ref={(el) => (videosRef.current[index] = el)}
                  onPlay={() => {
                    setvideoOnTrack((prev) => ({
                      ...prev,
                      onTrack: true,
                    }));
                  }}
                  onEnded={() => {
                    !isLastVideo
                      ? handleTrack("next", index)
                      : handleTrack("reset", index);
                  }}
                >
                  <source type="video/mp4" src={slide.video} />
                </video>
              </div>
              <div className="absolute top-8 left-12">
                {slide.textLists.map((text, id) => (
                  <div key={id}>
                    <p className="md:text-2xl text-xl font-semibold">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex gap-2 h-[48px] bg-white bg-opacity-50 rounded-full justify-center  items-center px-[35px]">
            {hightlightsSlides.map((_, index) => (
              <div
                id="video_tracker"
                key={index}
                className="bg-white rounded-full h-[16px] w-[16px]"
                ref={(el) => (videoDivRef.current[index] = el)}
              >
                <span
                  id="video_progress"
                  key={index}
                  className="block rounded-full h-[16px] w-[16px]"
                  ref={(el) => (videoSpanRef.current[index] = el)}
                ></span>
              </div>
            ))}
          </div>
          <button
            id="play_pause_replay"
            className=" flex w-[48px] h-[48px] rounded-full bg-white bg-opacity-50 justify-center items-center"
            onClick={() => {
              onTrack
                ? handleTrack("pause", videoId)
                : !isEnd
                ? handleTrack("play", videoId)
                : handleTrack("restart", videoId);
            }}
          >
            <img
              src={onTrack ? pause : isEnd ? replay : playWhite}
              alt={onTrack ? "pause" : isEnd ? "replay" : "play"}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
