import {
  AlignJustify,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import ListMenu from "./ListMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 1.5,
        type: "spring",
      }}
      className="!sticky top-0 left-0 h-[7svh] bg-orange-50 flex w-full flex-row justify-between px-8 md:px-40 items-center transition-all duration-200 shadow !z-10"
    >
      <a href="#home" className="flex flex-row items-center gap-2 left">
        <img src="/logo.svg" alt="Logo" className="w-10" />
        <span className="italic font-thin ">RizkiNrp</span>
      </a>
      <div className="right">
        <ul className=" min-[300px]:hidden md:flex flex-row gap-5 justify-center items-center text-xs ">
          <div className="flex flex-row items-center gap-5">
            <a
              href="https://www.linkedin.com/in/rizki-nurpadilah/"
              target="_blank"
            >
              <Linkedin size={16} color="orangered" />
            </a>
            <a href="https://github.com/rizeenf" target="_blank">
              <Github size={16} color="orangered" />
            </a>
            <a href="https://twitter.com/rizenf" target="_blank">
              <Twitter size={16} color="orangered" />
            </a>
            <a href="https://www.facebook.com/rizenf" target="_blank">
              <Facebook size={16} color="orangered" />
            </a>
          </div>
        </ul>

        <div className=" sm:block md:hidden">
          <AlignJustify onClick={handleOpened} className="cursor-pointer " />
        </div>
        <ListMenu isOpened={isOpened} handleOpened={handleOpened} />
      </div>
    </motion.div>
  );
};

export default Navbar;
