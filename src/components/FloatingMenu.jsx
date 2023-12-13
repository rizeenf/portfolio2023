import { Code2, Home, Layers3, UserRound } from "lucide-react";
import React from "react";

const FloatingMenu = () => {
  return (
    <div
      className="fixed flex min-[300px]:flex-row md:flex-col gap-2 p-1 bg-transparent border rounded-full md:top-1/3 md:left-3 
    "
    >
      <a href="#home" className="p-1 bg-transparent border rounded-full ">
        <Home size={15} />
      </a>
      <a href="#about" className="p-1 bg-transparent border rounded-full ">
        <UserRound size={15} />
      </a>
      <a href="#skills" className="p-1 bg-transparent border rounded-full ">
        <Code2 size={15} />
      </a>
      <a href="#projects" className="p-1 bg-transparent border rounded-full ">
        <Layers3 size={15} />
      </a>
    </div>
  );
};

export default FloatingMenu;
