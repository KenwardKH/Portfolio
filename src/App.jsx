import About from "./components/about";
import Achievement from "./components/achievement";
import Contact from "./components/contact";
import Hero from "./components/hero";
import MouseCursor from "./components/mouseCursor";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
function App() {
  return (
    <div className="min-h-screen bg-[#27233e] text-white">
      <MouseCursor />
      <Navbar />
      <Hero />
      <About />
      <Achievement />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
