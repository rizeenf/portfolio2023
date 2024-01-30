import { motion } from "framer-motion";
import { BookUser, Code2, Home, Layers3, UserRound } from "lucide-react";
import React from "react";

const FloatingMenu = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "300%",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      className="fixed flex flex-row md:flex-col gap-2 p-1 bg-transparent border rounded-full min-[300px]:bottom-10 min-[300px]:left-1/3 md:bottom-1/2 md:left-3
    "
    >
      <motion.a
        initial={{
          rotate: "-5deg",
          scale: 1,
        }}
        animate={{
          rotate: "5deg",
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        whileHover={{
          scale: 1.3,
          color: "white",
        }}
        whileTap={{
          scale: 0.6,
        }}
        href="#home"
        className="p-1 bg-transparent border rounded-full hover:bg-orange-400 hover:scale-[1.03]"
      >
        <Home size={15} />
      </motion.a>
      <motion.a
        initial={{
          rotate: "-5deg",
          scale: 1,
        }}
        animate={{
          rotate: "5deg",
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        whileHover={{
          scale: 1.3,
          color: "white",
        }}
        whileTap={{
          scale: 0.6,
        }}
        href="#about"
        className="p-1 bg-transparent border rounded-full hover:bg-orange-400 hover:scale-[1.03]"
      >
        <UserRound size={15} />
      </motion.a>
      <motion.a
        initial={{
          rotate: "-5deg",
          scale: 1,
        }}
        animate={{
          rotate: "5deg",
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        whileHover={{
          scale: 1.3,
          color: "white",
        }}
        whileTap={{
          scale: 0.6,
        }}
        href="#skills"
        className="p-1 bg-transparent border rounded-full hover:bg-orange-400 hover:scale-[1.03]"
      >
        <Code2 size={15} />
      </motion.a>
      <motion.a
        initial={{
          rotate: "-5deg",
          scale: 1,
        }}
        animate={{
          rotate: "5deg",
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        whileHover={{
          scale: 1.3,
          color: "white",
        }}
        whileTap={{
          scale: 0.6,
        }}
        href="#projects"
        className="p-1 bg-transparent border rounded-full hover:bg-orange-400 hover:scale-[1.03]"
      >
        <Layers3 size={15} />
      </motion.a>
      <motion.a
        initial={{
          rotate: "-5deg",
          scale: 1,
        }}
        animate={{
          rotate: "5deg",
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        whileHover={{
          scale: 1.3,
          color: "white",
        }}
        whileTap={{
          scale: 0.6,
        }}
        href="#contact"
        className="p-1 bg-transparent border rounded-full hover:bg-orange-400 hover:scale-[1.03]"
      >
        <BookUser size={15} />
      </motion.a>
    </motion.div>
  );
};

export default FloatingMenu;
