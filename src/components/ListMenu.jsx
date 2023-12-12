import { AlignRight, X } from "lucide-react";
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
        <ul className="flex flex-col items-center gap-5 ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
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
