import { useGSAP } from "@gsap/react";
import { pause, playWhite, replay } from "../utils";
import gsap from "gsap";
import { hightLightLinks, hightlightsSlides } from "../constants";
import { useRef, useEffect, useState } from "react";

export default function Highlight() {
  const videosRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);
  const [videoOnTrack, setvideoOnTrack] = useState({
    isLastVideo: false,
    videoId: 0,
    onTrack: false,
    isEnd: false,
    isPlaying: false,
  });

  const { onTrack, isLastVideo, isEnd, isPlaying, videoId } = videoOnTrack;

  const handleTrack = (state) => {
    switch (state) {
      case "pause":
        alert("Pause the video");
        break;
      case "play":
        setvideoOnTrack((prev) => ({ ...prev, isPlaying: true }));
        alert("Play the video");
        break;
      case "replay":
        setvideoOnTrack((prev) => ({ ...prev, videoId: 0 }));
        alert("Replay the video");
        break;
    }
  };

  useEffect(() => {
    console.log(videosRef);
    console.log(videoDivRef);
    console.log(videoSpanRef);
  }, []);

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1 });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      delay: 1,
      duration: 1,
    });
    gsap.to("#Carousel_container", { opacity: 1, delay: 1.5 });
  });

  return (
    <section
      id="Hightlight"
      className="w-full h-screen text-white flex flex-col bg-[#232323] justify-around"
    >
      <div className="container flex  max-md:flex-col max-md:gap-5 justify-between">
        <h2 id="title" className="title">
          Get The Hightlight.
        </h2>
        <div className="flex gap-5 ">
          {hightLightLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-2 link opacity-0 translate-y-20"
            >
              <a href="/" className="text-[#2997FF] text-[15px]">
                {link.text}
              </a>
              <div>
                <img src={link.icon} alt="play button" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="Carousel_layer">
        <div
          id="Carousel_container"
          className="w-[60%] mx-auto flex overflow-x-scroll gap-5 max-lg:w-[75%] max-md:gap-10 max-md:w-[80%] opacity-0"
        >
          {hightlightsSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="h-[70vh] min-w-[90%] bg-black rounded-3xl flex items-center justify-center text-lg font-semibold max-lg:h-[55vh] max-sm:min-w-[100%] max-md:min-w-[90%]"
            >
              <div className="relative h-[70%] w-[90%] flex items-center">
                <div>
                  <video
                    preload="auto"
                    playsInline={true}
                    autoPlay
                    muted
                    ref={(el) => (videosRef.current[index] = el)}
                    // onPlay={setvideoOnTrack((prev) => ({
                    //   ...prev,
                    //   onTrack: true,
                    // }))}
                  >
                    <source type="video/mp4" src={slide.video} />
                  </video>
                </div>
                <div className="absolute top-0 left-0">
                  {slide.textLists.map((text, id) => (
                    <div key={id}>
                      <p className="md:text-2xl text-xl">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex gap-2 h-[48px] bg-white bg-opacity-50 rounded-full justify-center  items-center px-[35px]">
          {hightlightsSlides.map((slide, index) => (
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
          onClick={
            isLastVideo
              ? () => {
                  handleTrack("replay");
                }
              : !isLastVideo && onTrack
              ? () => {
                  handleTrack("pause");
                }
              : () => {
                  handleTrack("play");
                }
          }
        >
          <img
            src={onTrack ? pause : isLastVideo ? replay : playWhite}
            alt={onTrack ? "pause" : isLastVideo ? "replay" : "play"}
          />
        </button>
      </div>
    </section>
  );
}
