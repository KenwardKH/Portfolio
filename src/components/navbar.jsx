import { useState, useEffect } from "react";
import { FiMenu, FiX} from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`h-[10vh] fixed left-0 top-0 w-full flex items-center justify-between px-6 md:px-12 lg:px-12 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-lg md:text-xl lg:text-2xl font-bold">
        Kenward Keene Hermanto
      </div>
      <div className="hidden lg:flex text-lg gap-12">
        <a className="hover:text-blue-400 transition" href="#about">About</a>
        <a className="hover:text-blue-400 transition" href="#achievements">Achievements</a>
        <a className="hover:text-blue-400 transition" href="#projects">Projects</a>
        <a className="hover:text-blue-400 transition" href="#contacts">Contact</a>
      </div>

      <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-black/80 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#about" onClick={()=>setIsOpen(false)}>About</a>
          <a href="#achievements" onClick={()=>setIsOpen(false)}>Achievements</a>
          <a href="#projects" onClick={()=>setIsOpen(false)}>Projects</a>
          <a href="#contacts" onClick={()=>setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
