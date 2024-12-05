import { pause, playWhite, replay } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightLightLinks, hightlightsSlides } from "../constants";
import { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Highlight() {
  /* Ref and States */
  const videosRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [videoId, setvideoId] = useState(0);
  const [loadedData, setloadedData] = useState([]);

  const [videoOnTrack, setvideoOnTrack] = useState({
    isLastVideo: false,
    startPlay: null,
    onTrack: null,
    isEnd: null,
  });

  const { isLastVideo, startPlay, onTrack, isEnd } = videoOnTrack;

  /* Functionalities  */
  const handleTrack = (state, index) => {
    switch (state) {
      case "next":
        if (videoId === 3)
          setvideoOnTrack((prev) => ({ ...prev, isLastVideo: true }));
        setvideoId((prev) => prev + 1);
        break;
      case "reset":
        setvideoId(0);
        setvideoOnTrack((prev) => ({ ...prev, isEnd: true }));
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

  const handleLoadedMetaData = (i, e) => setloadedData((prev) => [...prev, e]);

  /* Animations and Effect */

  useEffect(() => {
    if ((loadedData.length = 4)) {
      if (onTrack && !isEnd) {
        videosRef.current[videoId].play();
      }
    }
  }, [videoId, onTrack, isEnd, loadedData]);

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${
        videoId === 0 ? -100 : videoId === -1 ? 0 : -100 * videoId
      }%)`,
      duration: 2,
      delay: `${videoId === 0 ? 1 : 0.5}`,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#slider",
        toggleActions: "restart none restart none",
      },
      onComplete: () => {
        videoId !== 3
          ? setvideoId((videoId) => videoId + 1)
          : setvideoId((videoId) => -1);
        setvideoOnTrack((prev) => ({
          ...prev,
          onTrack: false,
          isEnd: true,
        }));
      },
    });
  }, [videoId]);

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
        <div className=" flex justify-between max-md:flex-col max-md:gap-5 ">
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
                  onPlay={() => {
                    setvideoOnTrack((prev) => ({
                      ...prev,
                      onTrack: true,
                      startPlay: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetaData(index, e)}
                  onEnded={() => {
                    isLastVideo
                      ? handleTrack("reset", index)
                      : handleTrack("next", index);
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
                id="video_tracker"
                key={index}
                className="bg-white rounded-full h-[16px] w-[16px] bg-opacity-40"
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
            className=" flex w-[48px] h-[48px] rounded-full bg-white bg-opacity-10 justify-center items-center"
            onClick={() => {
              onTrack
                ? handleTrack("pause", videoId)
                : !isEnd
                ? handleTrack("play", videoId)
                : handleTrack("reset", videoId);
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
