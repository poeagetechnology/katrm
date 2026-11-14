
import React from "react";
import Sea from "../Asset/70796-538877060.mp4";

export default function Intro({ onEnter }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <video
        src={Sea}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-40 w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">

          <button
            onClick={onEnter}
            className="text-white text-8xl md:text-9xl font-extrabold mx-40 cursor-pointer hover:text-gray-300 transition"
          >
            KATRM
          </button>

        </div>
      </div>

    </div>
  );
}
