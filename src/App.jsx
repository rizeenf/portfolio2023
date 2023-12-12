import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-screen overflow-auto snap-mandatory snap-y !scroll-smooth">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
