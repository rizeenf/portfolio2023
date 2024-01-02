import { Suspense, lazy } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingMenu from "./components/FloatingMenu";
// import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Intro = lazy(() => import("./components/Intro"));

function App() {
  return (
    <div className="h-screen overflow-auto !scroll-smooth relative">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingMenu />
    </div>
  );
}

export default App;
