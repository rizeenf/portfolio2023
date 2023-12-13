import { AlignRight, Code2, Home, Layers3, UserRound, X } from "lucide-react";
import React from "react";

const ListMenu = ({ isOpened, handleOpened }) => {
  return (
    <>
      <div
        className={`fixed z-10 overflow-auto top-0 right-0 bg-white transition-all duration-500 h-full flex justify-center flex-col max-w-[100dvw] ${
          isOpened ? "w-[20rem]" : "w-[0]"
        }`}
      >
        <X
          onClick={handleOpened}
          className="self-end p-2 mx-2 bg-orange-100 rounded cursor-pointer hover:bg-orange-200"
        />
        <ul className="flex flex-col items-start gap-5 ml-5 ">
          <li>
            <a
              href="#home"
              className="flex items-center justify-center gap-2 border-b"
            >
              <Home size={15} />
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center justify-center gap-2 border-b"
            >
              <UserRound size={15} />
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex items-center justify-center gap-2 border-b"
            >
              <Code2 size={15} />
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 border-b"
            >
              <Layers3 size={15} />
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="p-2 text-xs text-white bg-orange-400 rounded shadow hover:bg-orange-500"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListMenu;
