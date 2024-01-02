import { Suspense, lazy } from "react";
import "./App.css";
const Intro = lazy(() => import("./components/Intro"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Navbar = lazy(() => import("./components/Navbar"));
const FloatingMenu = lazy(() => import("./components/FloatingMenu"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

function App() {
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
