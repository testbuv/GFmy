import React from "react";
import { ImageGenLanding } from "./image-gen-landing";

export const LandingSectionFirst = () => {
  return (
    <main className="p-4 text-center text-slate-900">
      <div className="mt-28">
        <div className="p-8 lg:mt-8 lg:p-16">
          <ImageGenLanding />
        </div>
      </div>
    </main>
  );
};