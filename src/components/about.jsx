import { IoLogoJavascript } from "react-icons/io";
import profilePic from "../assets/profile.jpg";
import cv from "../assets/Kenward Keene Hermanto CV.pdf";
import {
  FaCss3Alt,
  FaFigma,
  FaFileDownload,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-fit">
      <div className=" flex w-full flex-col items-center justify-center text-white px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center items-center w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px]"
            >
              <img
                src={profilePic}
                alt="Profile Picture"
                className="max-w-[250px] rounded-xl shadow-lg  "
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between text-justify gap-4 sm:gap-6 max-w-2xl"
            >
              <p className="text-base sm:text-lg max-w-xl leading-relaxed">
                Hello! I’m <span className="font-semibold text-blue-400">Kenward Keene Hermanto</span>, a passionate tech enthusiast
                and aspiring software developer with a strong interest in web
                development, mobile applications, and cybersecurity.
              </p>
              <p className="text-base sm:text-lg max-w-xl leading-relaxed">
                Currently, I’m studying at Universitas Sumatera Utara, where I
                continue to sharpen my skills in programming, problem-solving,
                and system design.
              </p>
              <div>
                <a
                  href={cv}
                  download
                  className="flex gap-2 items-center w-fit border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transform transition-all duration-300"
                >
                  <FaFileDownload /> Download CV
                </a>
              </div>
            </motion.div>
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-white">
              Technologies & Tools I’ve Learned
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
              {/* HTML */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-orange-500/50">
                <FaHtml5 className="text-4xl text-orange-500" />
                <span className="mt-2 text-sm text-gray-200">HTML</span>
              </div>

              {/* CSS */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/50">
                <FaCss3Alt className="text-4xl text-blue-500" />
                <span className="mt-2 text-sm text-gray-200">CSS</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50">
                <IoLogoJavascript className="text-4xl text-yellow-400" />
                <span className="mt-2 text-sm text-gray-200">JavaScript</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-cyan-500/50">
                <RiTailwindCssFill className="text-4xl text-cyan-400" />
                <span className="mt-2 text-sm text-gray-200">Tailwind</span>
              </div>

              {/* {PHP} */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-purple-500/50">
                <FaPhp className="text-4xl text-purple-400" />
                <span className="mt-2 text-sm text-gray-200">PHP</span>
              </div>

              {/* {Laravel} */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-red-500/50">
                <FaLaravel className="text-4xl text-red-400" />
                <span className="mt-2 text-sm text-gray-200">Laravel</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/50">
                <FaReact className="text-4xl text-blue-400" />
                <span className="mt-2 text-sm text-gray-200">React</span>
              </div>

              {/* Kotlin */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50">
                <SiKotlin className="text-4xl text-green-400" />
                <span className="mt-2 text-sm text-gray-200">Kotlin</span>
              </div>

              {/* Flutter */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/50">
                <FaFlutter className="text-4xl text-blue-500" />
                <span className="mt-2 text-sm text-gray-200">Flutter</span>
              </div>

              {/* Python*/}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50">
                <FaPython className="text-4xl text-yellow-500" />
                <span className="mt-2 text-sm text-gray-200">Python</span>
              </div>

              {/* C++ */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-gray-500/50">
                <TbBrandCpp className="text-4xl text-gray-300" />
                <span className="mt-2 text-sm text-gray-200">C++</span>
              </div>

              {/* Figma */}
              <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-white/50">
                <FaFigma className="text-4xl text-white" />
                <span className="mt-2 text-sm text-gray-200">Figma</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
