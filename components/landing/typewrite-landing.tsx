"use client";
import Typewriter from "typewriter-effect";

export const TypewriterLandingComponent = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Growth Fast.io.").start();
      }}
    />
  );
};
