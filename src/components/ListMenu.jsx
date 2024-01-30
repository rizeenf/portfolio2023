import { Code2, Home, Layers3, UserRound, X } from "lucide-react";
import React from "react";

const ListMenu = ({ isOpened, handleOpened }) => {
  return (
    <>
      <div
        className={`fixed z-10 overflow-auto top-0 right-0 bg-white transition-all duration-500 h-full flex justify-between flex-col max-w-[100svw] ${
          isOpened ? "w-[20rem]" : "w-[0]"
        }`}
      >
        <X
          onClick={handleOpened}
          size={32}
          className="self-end p-2 m-2 bg-orange-100 rounded cursor-pointer hover:bg-orange-200"
        />
        <div className="flex flex-col flex-[10] items-start justify-center gap-5 ml-10 ">
          <div className="flex flex-col items-start gap-5 ">
            <a
              aria-label="Menu"
              href="#home"
              className="flex items-center justify-center gap-2 duration-150 hover:scale-105"
            >
              <Home size={15} />
              Home
            </a>
            <a
              aria-label="Menu"
              href="#about"
              className="flex items-center justify-center gap-2 duration-150 hover:scale-105"
            >
              <UserRound size={15} />
              About me
            </a>
            <a
              aria-label="Menu"
              href="#skills"
              className="flex items-center justify-center gap-2 duration-150 hover:scale-105"
            >
              <Code2 size={15} />
              Skills
            </a>
            <a
              aria-label="Menu"
              href="#projects"
              className="flex items-center justify-center gap-2 duration-150 hover:scale-105"
            >
              <Layers3 size={15} />
              Projects
            </a>
          </div>
        </div>
        <div className="flex-[5] self-center">
          <a
            aria-label="Menu"
            href="#contact"
            className="p-2 text-xs text-orange-500 transition-all duration-300 bg-white border border-orange-400 rounded-lg shadow hover:bg-orange-500 hover:border-white hover:text-white"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
