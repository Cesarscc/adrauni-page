"use client";
import { Substrack } from "@/assets/Substrack";
import React, { useState } from "react";

const Video = ({ video }) => {
  const [playvideo, setPlayvideo] = useState(false);

  return (
    <div className="relative">
      <video
        src={video.url}
        controls={playvideo}
        className="w-[289px] sm:w-[320px] md:w-[520px] h-[114px] sm:h-[190px] md:h-[300px] lg:w-full lg:h-full"
      ></video>
      <div
        className={`absolute inset-0 mix-blend-color ${playvideo ? "bg-transparent opacity-100 -z-10 " : " bg-[#008CDB] opacity-55 z-0"}`}
      ></div>
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          const video = document.querySelector("video");
          video.play();
          setPlayvideo(!playvideo);
        }}
      >
        {!playvideo && (
          <>
            <Substrack />
            <p className="text-[14px] md:text-[24px] font-semibold text-[#008CDB] font-rubik">
              Ver Vídeo
            </p>
          </>
        )}
      </button>
    </div>
  );
};

export default Video;
