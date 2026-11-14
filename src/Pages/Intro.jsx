
import React from "react";
import Sea from "../Asset/70796-538877060.mp4";

export default function Intro({ onEnter }) {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black">

      {/* Background Video */}
      <video
        src={Sea}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* KATRM Text */}
      <div className="absolute inset-x-0 bottom-[45%] overflow-hidden flex justify-center">

        <div className="flex whitespace-nowrap animate-marquee">
          {[1].map((item) => (
            <button
              key={item}
              onClick={onEnter}
              className="
                text-white
                text-5xl
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
                font-extrabold
                tracking-wider
                px-8
                sm:px-16
                cursor-pointer
                hover:text-gray-300
                transition-colors
              "
            >
              KATRM
            </button>
            
          ))}
        </div>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-0 w-full text-center">
       
      </div>

    </div>
  );
}
