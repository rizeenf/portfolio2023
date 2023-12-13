import "./App.css";
import About from "./components/About";
import FloatingMenu from "./components/FloatingMenu";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-screen overflow-auto !scroll-smooth relative">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <FloatingMenu />
    </div>
  );
}

export default App;
