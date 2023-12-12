import React from "react";

const Intro = () => {
  return (
    <div className="h-[93svh] snap-end" id="home">
      <div className="flex h-full px-10 wrapper">
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
              className="p-2 text-xs text-white bg-orange-400 border border-white rounded-lg shadow hover:bg-orange-500"
            >
              My projects
            </a>
            <a
              href="/RIZKI NURPADILAH - CV REACT JS.pdf"
              className="p-2 text-xs bg-white border border-orange-400 rounded-lg shadow hover:bg-orange-50"
              download
            >
              Get my resume
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 right">
          <div className="min-[300px]:h-48 min-[300px]:w-40 md:h-64 md:w-56 imageBlob"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
