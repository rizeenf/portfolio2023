import React from "react";
import { motion } from "framer-motion";

const skill = [
  {
    id: 1,
    image: "html.svg",
    name: "html 5",
  },
  {
    id: 2,
    image: "/css.svg",
    name: "css",
  },
  {
    id: 3,
    image: "/sass.svg",
    name: "sass",
  },
  {
    id: 4,
    image: "/JS.png",
    name: "javascript",
  },
  {
    id: 5,
    image: "/react.svg",
    name: "react",
  },
  {
    id: 6,
    image: "/bootstrap.svg",
    name: "bootstrap",
  },
  {
    id: 7,
    image: "/tailwind.svg",
    name: "tailwind",
  },
  {
    id: 8,
    image: "/git.svg",
    name: "git",
  },
  {
    id: 9,
    image: "/vitejs.svg",
    name: "vite",
  },
  {
    id: 10,
    image: "/mysql.svg",
    name: "mysql",
  },
];

const skillLearning = [
  {
    id: 1,
    image: "next-js.svg",
    name: "next js",
  },
  {
    id: 2,
    image: "typescript.svg",
    name: "typescript",
  },
  {
    id: 3,
    image: "mongodb.svg",
    name: "mongodb",
  },
];

const Skills = () => {
  return (
    <div
      className="h-[100svh] snap-end flex justify-center items-center"
      id="skills"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: "20%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="flex flex-col items-center justify-center header"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-base font-bold text-gray-400"
          >
            TECH STACK
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center gap-2 md:text-3xl min-[300px]:text-2xl text-center text-gray-700"
          >
            <motion.img
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
                scale: 1.1,
              }}
              src="/terminal.png"
              alt="terminal"
              className="object-cover h-10 aspect-square"
            />
            <h1 className="md:text-3xl min-[300px]:text-2xl text-center text-gray-700">
              My skills, my journey.
            </h1>
          </motion.div>
        </div>

        <h1 className="mt-5 text-base text-gray-700 uppercase">Using Now : </h1>
        <div className="flex mt-5 flex-row flex-wrap items-center min-[300px]:max-w-xs md:max-w-xl justify-around gap-10">
          {skill.map((item) => (
            <motion.div
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.2,
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-8 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-700 uppercase">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
        <h1 className="my-5 text-base text-gray-600 uppercase">learning :</h1>
        <div className="flex flex-row flex-wrap items-center min-[300px]:max-w-xs md:max-w-xl justify-around gap-10">
          {skillLearning.map((item) => (
            <motion.div
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.2,
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-8 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-600 uppercase">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
