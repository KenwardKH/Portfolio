import { useState, useEffect } from "react";

export default function MouseCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-64 h-64 rounded-full bg-blue-600 opacity-30 blur-2xl"
      style={{
        left: pos.x - 128 + "px",
        top: pos.y - 128 + "px",
      }}
    ></div>
  );
}
