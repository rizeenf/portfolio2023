import { AlignJustify, AlignRight, List } from "lucide-react";
import React, { useState } from "react";
import ListMenu from "./ListMenu";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className=" sticky top-0 left-0 h-[7svh] bg-orange-50 flex w-full flex-row justify-between min-[300px]:px-[2rem] md:px-40 items-center transition-all duration-200 shadow z-10">
      <a href="#home" className="flex flex-row items-center gap-2 left">
        <img src="/logo.svg" alt="Logo" className="w-10" />
        <span className="italic font-thin ">RizkiNrp</span>
      </a>
      <div className="right">
        <ul className=" min-[300px]:hidden md:flex flex-row gap-5 justify-center items-center text-xs ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li className="flex flex-row items-center justify-center">
            <a
              href="#contact"
              className="self-center p-2 text-xs text-white bg-orange-400 rounded-lg shadow hover:bg-orange-500"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className=" sm:block md:hidden">
          <AlignJustify onClick={handleOpened} className="cursor-pointer " />
        </div>
        <ListMenu isOpened={isOpened} handleOpened={handleOpened} />
      </div>
    </div>
  );
};

export default Navbar;
