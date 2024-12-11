import { pause, playWhite, replay } from "../utils";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
import { hightLightLinks, hightlightsSlides } from "../constants";
import { useRef, useEffect, useState } from "react";
import { gsapTranslate } from "../utils/animations";
import { gsapAnimate } from "../utils/animations";
import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);

export default function Highlight() {
  /* 
        Data 
                  */

  const videosRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [videoOnTrack, setvideoOnTrack] = useState({
    videoId: 0,
    onTrack: false,
    isLastVideo: false,
    startPlay: null,
    isEnd: null,
  });

  const { videoId, startPlay, onTrack, isEnd } = videoOnTrack;

  const [loadedData, setloadedData] = useState([]);

  /*
        Functionalities
                            */

  const handleTrack = (state) => {
    switch (state) {
      case "start":
        setvideoOnTrack((prev) => ({
          ...prev,
          isEnd: false,
          onTrack: true,
        }));
        break;
      case "pause_play":
        setvideoOnTrack((prev) => ({
          ...prev,
          onTrack: !prev.onTrack,
        }));
        break;
      case "next":
        setvideoOnTrack((prev) => ({
          ...prev,
          videoId: prev.videoId + 1,
        }));
        break;
      case "mark-last":
        setvideoOnTrack((prev) => ({
          ...prev,
          onTrack: true,
          isLastVideo: true,
        }));
        break;
      case "mark-end":
        setvideoOnTrack((prev) => ({
          ...prev,
          isEnd: true,
          videoId: 0,
          onTrack: false,
        }));
        break;
      case "reset":
        setvideoOnTrack((prev) => ({ ...prev, isEnd: true }));
        break;
      default:
        return videoOnTrack;
    }
  };

  const handleLoadedMetaData = (i, e) => setloadedData((prev) => [...prev, e]);

  /* 
        Animations and Effect 
                                  */

  // Classic GSAP animations
  useGSAP(() => {
    gsapAnimate(
      "#Mac",
      { opacity: 1, y: 0, duration: 0.8 },
      { togglActions: "restart reverse restart reverse", start: "top 80%" }
    );
    gsapAnimate(
      ".link",
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        delay: 0.5,
        duration: 0.8,
      },
      { toggleAction: "restart reverse restart reverse", start: "top 80%" }
    );
    gsapAnimate("#Carousel_container", { opacity: 1, delay: 0.8 });
    gsapAnimate(
      "#slider",
      {
        onStart: () => {
          handleTrack("start");
        },
      },
      { start: "top 80%" }
    );
  });

  // Slider Animation
  useEffect(() => {
    gsapTranslate("#slider", videoId);
    gsap.fromTo(
      videoSpanRef.current[videoId],
      {
        width: "0px",
      },
      {
        width: "50px",
        duration: hightlightsSlides[videoId].videoDuration + 0.5,
      }
    );
  }, [videoId]);

  // Control of the video
  useEffect(() => {
    if (loadedData[videoId] && onTrack) {
      videosRef.current[videoId].play();
    } else if (loadedData[videoId] && !onTrack) {
      videosRef.current[videoId].pause();
    }
  }, [videoId, startPlay, onTrack, loadedData]);

  /* 
        HMTL return by the component
                                         */
  return (
    <section
      id="Hightlight"
      className="max-w-full min-h-screen text-white flex flex-col bg-[#232323] justify-center xl-padding-y"
    >
      <div className="container">
        <div className=" flex justify-between max-md:flex-col max-md:gap-5 ">
          <h2
            id="Mac"
            className="opacity-0 text-6xl max-sm:text-4xl font-medium text-[#86868b] translate-y-20 "
          >
            Get the hightlight.
          </h2>
          <div className="flex gap-5 ">
            {hightLightLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 link opacity-0 translate-y-20"
              >
                <a
                  href="/"
                  className="text-[#2997FF] text-xl font-normal max-sm:text-lg "
                >
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
          className="w-full h-[440px] px-[80px] max-lg:px-[40px] mx-auto flex gap-10 max-md:gap-10 opacity-0 my-[40px] overflow-hidden"
        >
          {hightlightsSlides.map((slide, index) => (
            <div
              id="slider"
              key={slide.id}
              className="min-w-[80%] h-full bg-black rounded-3xl flex items-center justify-center text-lg font-semibold max-sm:min-w-[100%] max-md:min-w-[90%] relative "
            >
              <div className="h-full flex items-center justify-center">
                <video
                  id="video"
                  className="h-full rounded-3xl"
                  preload="auto"
                  playsInline={true}
                  muted
                  ref={(el) => (videosRef.current[index] = el)}
                  onLoadedMetadata={(e) => handleLoadedMetaData(index, e)}
                  onPlay={() => {
                    videoId < 3
                      ? handleTrack("start")
                      : handleTrack("mark-last");
                  }}
                  onEnded={() => {
                    videoId < 3 ? handleTrack("next") : handleTrack("mark-end");
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
          <div className="flex gap-2 h-[48px] bg-white bg-opacity-10 rounded-full justify-center  items-center px-[35px]">
            {hightlightsSlides.map((_, index) => (
              <div
                id={`div_${index}`}
                key={index}
                className={`bg-white rounded-full h-[16px]  bg-opacity-40`}
                ref={(el) => (videoDivRef.current[index] = el)}
                style={{ width: !isEnd && videoId === index ? "50px" : "16px" }}
              >
                <span
                  id="video_progress"
                  key={index}
                  className="block rounded-full h-[16px] w-0"
                  ref={(el) => (videoSpanRef.current[index] = el)}
                  style={{
                    backgroundColor:
                      !isEnd && videoId === index ? "white" : "transparent",
                  }}
                ></span>
              </div>
            ))}
          </div>
          <button
            id="play_pause_replay"
            className=" flex w-[48px] h-[48px] rounded-full bg-white bg-opacity-10 justify-center items-center"
            onClick={() => {
              onTrack || !onTrack
                ? handleTrack("pause_play", videoId)
                : isEnd && handleTrack("reset", videoId);
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
