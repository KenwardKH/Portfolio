import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-16 px-6 mt flex w-full min-h-screen overflow-hidden items-center justify-center"
    >
      <motion.div
        className="flex flex-col items-start max-w-2xl gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <br></br>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Kenward Keene Hermanto
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Welcome to my portfolio! I’m a passionate developer specializing in
          web, mobile, and cybersecurity. Scroll down to explore my projects and
          skills.
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Learn More
        </motion.a>

        {/* Highlight Skills */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="bg-white/10 px-3 py-2 rounded-full text-base hover:bg-white/30 transition">Web Development</span>
          <span className="bg-white/10 px-3 py-2 rounded-full text-base hover:bg-white/30 transition">Mobile Development</span>
          <span className="bg-white/10 px-3 py-2 rounded-full text-base hover:bg-white/30 transition">UI/UX Design</span>
          <span className="bg-white/10 px-3 py-2 rounded-full text-base hover:bg-white/30 transition">Cyber Security</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
