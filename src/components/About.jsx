import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="h-[93svh] snap-end" id="about">
      <div className="flex min-[300px]:flex-col md:flex-row h-full gap-5 py-20 px-10 md:px-40 wrapper">
        <div className="flex flex-col items-center justify-center flex-[2] right">
          <motion.img
            initial={{
              opacity: 0,
              x: "-100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1.5,
              type: "spring",
            }}
            src="/work.gif"
            alt="Work"
            className="object-cover w-56 md:w-96 min-w-[12rem] aspect-square"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-[3] left">
          <motion.h1
            initial={{
              opacity: 0,
              x: "100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1.5,
              type: "spring",
            }}
            className="max-w-md text-sm text-center"
          >
            <span className="flex items-center gap-4 text-base text-left md:text-lg">
              I&apos;ve been working with some frontend technologies such as
              React.js, Next.js, Tailwind and others.
              <motion.img
                initial={{
                  rotate: "-10deg",
                  scale: 1,
                }}
                animate={{
                  scale: 1,
                  rotate: "10deg",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{
                  scale: 2,
                }}
                src="/terminal.png"
                alt="terminal"
                className="object-cover h-6 aspect-square"
              />
            </span>
            <br />
            <br />
            <span className="flex items-center gap-4 text-base text-right md:text-lg">
              <motion.img
                initial={{
                  rotate: "10deg",
                  scale: 1,
                }}
                animate={{
                  scale: 1,
                  rotate: "-10deg",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{
                  scale: 2,
                }}
                src="/book.png"
                alt="book"
                className="object-cover h-8 aspect-square"
              />
              My educational background as an Information Technology college
              student
            </span>
            <br />
            <br />
            <span className="flex items-center gap-4 text-base text-left md:text-lg">
              I&apos;m reliable person, motivated and able to adapt quickly to
              new technologies and exploring new things.
              <motion.img
                initial={{
                  rotate: "-10deg",
                  scale: 1,
                }}
                animate={{
                  scale: 1,
                  rotate: "10deg",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{
                  scale: 2,
                }}
                src="/research.png"
                alt="research"
                className="object-cover h-6 aspect-square"
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default About;
