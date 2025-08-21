import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <motion.div
        className="absolute w-full z-10 flex flex-row items-center justify-center h-full text-white px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Bagian Spline */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[600px] aspect-square">
            {/* <Spline
              scene="https://prod.spline.design/Q4HzUMSbe7NZVFgn/scene.splinecode"
              style={{ pointerEvents: "none" }}
            /> */}
          </div>
        </div>

        {/* Bagian Teks */}
        <div className="flex-1 flex flex-col items-start pl-8">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <br></br>Kenward Keene Hermanto
          </motion.h1>
          <motion.p
            className="text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Welcome to my portfolio! I’m a passionate developer specializing in
            web, mobile, and cybersecurity. Scroll down to explore my projects
            and skills.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
