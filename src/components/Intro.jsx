import { motion } from "framer-motion";
import React, { Suspense, lazy } from "react";

const ImageIntro = lazy(() => import("./ImageIntro"));
const Load = lazy(() => import("./Load"));

const Intro = () => {
  return (
    <div className="h-[93svh]" id="home">
      <div className="flex flex-col-reverse h-full gap-5 px-10 py-10 md:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 left">
          <motion.div
            initial={{
              opacity: 0,
              x: "-10%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
          >
            <h1 className="flex flex-row flex-wrap justify-center gap-3 text-4xl font-extrabold text-center">
              Hi there! I'm{" "}
              <span className="flex flex-row gap-3 tracking-wide text-orange-600">
                Rizki
                <motion.div
                  initial={{
                    rotate: "-10deg",
                  }}
                  animate={{
                    rotate: "10deg",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  👋
                </motion.div>
              </span>
            </h1>
            <h1 className="mt-1 text-lg text-center">
              I'm a Frontend Web developer based in Bekasi, Indonesia
            </h1>
            <div className="flex items-center justify-center gap-5 mt-5 text-center">
              <motion.a
                initial={{
                  rotate: 0,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: "2deg",
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: "0deg",
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                }}
                href="#projects"
                className="p-2 text-xs text-white transition-all duration-300 bg-orange-400 border border-white rounded-lg shadow cursor-default hover:bg-white hover:border-orange-400 hover:text-orange-500"
              >
                My projects
              </motion.a>
              <motion.a
                initial={{
                  rotate: 0,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: "-2deg",
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: "0deg",
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                }}
                target="_blank"
                href="https://drive.google.com/file/d/1c--YL19wz1EjEo0AjzqJXfCtCgs7StzI/view?usp=sharing"
                className="p-2 text-xs text-orange-500 transition-all duration-300 bg-white border border-orange-400 rounded-lg shadow cursor-default hover:bg-orange-500 hover:border-white hover:text-white"
              >
                Get my resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 right">
          <motion.div
            initial={{
              opacity: 0,
              x: "20%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
          >
            <Suspense fallback={<Load />}>
              <ImageIntro />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
