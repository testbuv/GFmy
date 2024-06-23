"use client";
import Typewriter from "typewriter-effect";

export const TypewriterLandingComponent = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Growth Fast.io",
          "Empowering Creators.",
          "Unleash Your Creativity.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 100,
        cursor: "|",
        cursorClassName: "typewriter-cursor",
        wrapperClassName: "typewriter-wrapper",
      }}
    />
  );
};