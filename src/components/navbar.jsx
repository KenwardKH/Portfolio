import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`h-[10vh] fixed left-0 top-0 w-full flex items-center justify-between px-20 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md  shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-bold">Kenward Keene Hermanto</div>
      <div className="flex text-2xl gap-20">
        <a href="#about">About</a>
        <a href="#achievements">Achievements</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </div>
    </nav>
  );
}
