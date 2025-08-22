import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden md:py-0 py-16"
    >
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white px-6 md:px-16 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Bagian Spline */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[400px] md:max-w-[600px] aspect-square">
            <Spline
               scene="https://prod.spline.design/7WfmWtcJgm7nt8zR/scene.splinecode"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Bagian Teks */}
        <div className="flex-1 flex flex-col items-start pl-8">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
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
            className="text-base md:text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Welcome to my portfolio! I’m a passionate developer specializing in
            web, mobile, and cybersecurity. Scroll down to explore my projects
            and skills.
          </motion.p>

          <motion.a
            href="#about"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
