import { Suspense, lazy, useEffect, useState } from "react";
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
    }, 3000);

    return () => clearInterval(timeout);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Loader2 className="text-orange-300 animate-spin" size={32} />
            <div className="flex flex-row gap-3">
              <span className="text-orange-300 animate-bounce">
                Loading ..<span className="animate-ping">.</span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="h-screen overflow-auto !scroll-smooth relative snap-mandatory snap-y">
      <Navbar />
      <Suspense fallback={"Loading .."}>
        <Intro />
        <About />
      </Suspense>
      <Skills />
      <Projects />
      <Contact />
      <FloatingMenu />
    </div>
  );
}

export default App;
