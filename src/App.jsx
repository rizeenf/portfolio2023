import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Loader2 } from "lucide-react";
const Intro = lazy(() => import("./components/Intro"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Navbar = lazy(() => import("./components/Navbar"));
const FloatingMenu = lazy(() => import("./components/FloatingMenu"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <div className="h-screen overflow-x-hidden !scroll-smooth relative">
          <Navbar />
          <Suspense fallback={"Loading .."}>
            <Intro />
            <About />
          </Suspense>
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
      <FloatingMenu />
    </>
  );
}

const Preloader = () => {
  return (
    <motion.div
      transition={{
        type: "spring",
        duration: 1,
      }}
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        opacity: 1,
        x: "-100%",
      }}
      className="relative flex flex-col items-center justify-center w-screen h-screen gap-5 overflow-hidden"
    >
      <span className="flex flex-row gap-2 mb-10 text-4xl text-orange-300">
        Hi
        <motion.div
          initial={{
            rotate: "0deg",
          }}
          animate={{
            rotate: ["-10deg", "10deg", "-10deg", "10deg", "-10deg", "10deg"],
          }}
          transition={{
            duration: 3,
          }}
        >
          👋
        </motion.div>
      </span>
      <Loader2
        className="absolute text-orange-300 animate-spin bottom-36"
        size={32}
      />
      <div className="absolute flex flex-row gap-3 mx-auto bottom-24">
        <span className="ml-3 text-orange-300 animate-bounce ">
          Welcome ..<span className="animate-ping">..</span>
        </span>
      </div>
    </motion.div>
  );
};

export default App;
