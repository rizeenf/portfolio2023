import React, { Suspense, lazy } from "react";
import Load from "./Load";

const ImageIntro = lazy(() => import("./ImageIntro"));

const Intro = () => {
  return (
    <div className="h-[93svh] snap-end" id="home">
      <div className="flex h-full gap-5 px-10 wrapper">
        <div className="flex flex-col items-center justify-center flex-1 left">
          <h1 className="text-3xl font-extrabold text-center">
            Hi there! I'm{" "}
            <span className="tracking-wide text-orange-600 "> Rizki </span>
          </h1>
          <h1 className="md:text-base min-[300px]:text-sm text-center">
            I'm a Frontend Web developer based in Bekasi, Indonesia
          </h1>
          <div className="flex gap-5 mt-5 text-center">
            <a
              href="#projects"
              className="p-2 text-xs text-white transition-all duration-300 bg-orange-400 border border-white rounded-lg shadow hover:bg-white hover:border-orange-400 hover:text-orange-500"
            >
              My projects
            </a>
            <a
              href="/RIZKI NURPADILAH - CV REACT JS.pdf"
              className="p-2 text-xs text-orange-500 transition-all duration-300 bg-white border border-orange-400 rounded-lg shadow hover:bg-orange-500 hover:border-white hover:text-white"
              download
            >
              Get my resume
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 right">
          <Suspense fallback={<Load />}>
            <ImageIntro />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Intro;
