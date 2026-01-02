import { useState, useEffect } from "react";
import movie81_1 from "../assets/projects/movie81_1.jpg";
import movie81_2 from "../assets/projects/movie81_2.jpg";
import movie81_3 from "../assets/projects/movie81_3.jpg";
import movie81_4 from "../assets/projects/movie81_4.jpg";
import quafe_1 from "../assets/projects/quafe_1.png";
import quafe_2 from "../assets/projects/quafe_2.png";
import quafe_3 from "../assets/projects/quafe_3.png";
import conhub from "../assets/projects/conhub.png";
import atk_sinar_pelangi_1 from "../assets/projects/atk_sinar_pelangi_1.png";
import atk_sinar_pelangi_2 from "../assets/projects/atk_sinar_pelangi_2.png";
import atk_sinar_pelangi_3 from "../assets/projects/atk_sinar_pelangi_3.png";
import cover_movie1 from "../assets/projects/cover_movie1.png";
import cover_movie2 from "../assets/projects/cover_movie2.png";
import mockup_belut from "../assets/projects/mockup_belut.png";
import cover_belut1 from "../assets/projects/cover_belut1.png";
import cover_belut2 from "../assets/projects/cover_belut2.png";
import belut1 from "../assets/projects/belut1.png";
import belut2 from "../assets/projects/belut2.png";
import belut3 from "../assets/projects/belut3.png";
import belut4 from "../assets/projects/belut4.png";

import { FaCss3Alt, FaExternalLinkAlt, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiKotlin, SiMysql, SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";
import { a, button, div, pre } from "framer-motion/client";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // State untuk menyimpan proyek yang dipilih
  const [currentIndex, setCurrentIndex] = useState(0); // State untuk menyimpan index gambar yang sedang ditampilkan
  const [hoverIndex, setHoverIndex] = useState(null); // State untuk menyimpan index proyek yang sedang di-hover
  const [hoverImageIndex, setHoverImageIndex] = useState(0); // State untuk menyimpan index gambar yang ditampilkan saat hover

  const projects = [
    {
      cover_img: [quafe_1, quafe_2, quafe_3],
      img: [quafe_1, quafe_2, quafe_3],
      title: "Quafe – Coffee Shop Website",
      desc: "A stylish coffee shop website that allows customers to order menu items online, while owners manage menus and track order history effortlessly.",
      tech: [
        {
          icon: <FaHtml5 />,
          name: "HTML",
          color: "text-orange-500",
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS",
          color: "text-blue-500",
        },
        {
          icon: <IoLogoJavascript />,
          name: "Javascript",
          color: "text-yellow-400",
        },
        {
          icon: <FaPhp />,
          name: "PHP",
          color: "text-purple-400",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
          color: "text-blue-700",
        },
      ],
      link: "https://github.com/KenwardKH/Project_Proweb",
    },
    {
      cover_img: [conhub],
      img: [conhub],
      title: "ConHub – Live Concert Platform",
      desc: "A modern platform for booking concert tickets online, with an admin panel to manage and update concert schedules in real time.",
      tech: [
        {
          icon: <FaLaravel />,
          name: "Laravel",
          color: "text-red-400",
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS",
          color: "text-blue-500",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
          color: "text-blue-700",
        },
      ],
      link: "https://github.com/KenwardKH/Project-PPWL",
    },
    {
      cover_img: [atk_sinar_pelangi_1, atk_sinar_pelangi_2, atk_sinar_pelangi_3],
      img: [atk_sinar_pelangi_1, atk_sinar_pelangi_2, atk_sinar_pelangi_3],
      title: "Sinar Pelangi – Smart Stationery Store",
      desc: "An online store where customers can easily order stationery products, while owners manage operations and inventory efficiently.",
      tech: [
        {
          icon: <FaLaravel />,
          name: "Laravel",
          color: "text-red-400",
        },
        {
          icon: <RiTailwindCssFill />,
          name: "Tailwind CSS",
          color: "text-cyan-400",
        },
        {
          icon: <FaReact />,
          name: "React",
          color: "text-blue-400",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
          color: "text-blue-700",
        },
      ],
      link: "https://github.com/KenwardKH/Project_IMK",
    },
    {
      cover_img: [cover_movie1, cover_movie2],
      img: [movie81_1, movie81_2, movie81_3, movie81_4],
      title: "Movie 81 – Movie Discovery App",
      desc: "A mobile application showcasing now-playing and popular movies with ratings, designed for quick and engaging browsing.",
      tech: [
        {
          icon: <SiKotlin />,
          name: "Kotlin",
          color: "text-green-400",
        },
      ],
      link: "https://github.com/KenwardKH/MobileDevProject",
    },
    {
      cover_img: [mockup_belut, cover_belut1, cover_belut2],
      img: [belut1, belut2, belut3, belut4],
      title: "BELUT — UTBK Learning App",
      desc: "A mobile learning application designed to help students prepare for UTBK through interactive practice questions, detailed score analysis, and engaging tryout simulations.",
      tech: [
        {
          icon: <SiKotlin />,
          name: "Kotlin",
          color: "text-green-400",
        },
        {
          icon: <SiFirebase />,
          name: "Firebase",
          color: "text-red-400",
        }
      ],
      link: "https://github.com/Drakenvei/TubesPM",
    },
  ];

  // Slideshow ketika hover
  useEffect(() => {
    let interval;
    if (hoverIndex !== null) {
      const imgs = projects[hoverIndex].cover_img;
      if (imgs.length > 1) {
        interval = setInterval(() => {
          // Update hoverImageIndex untuk menampilkan gambar berikutnya
          setHoverImageIndex((prev) =>
            prev === imgs.length - 1 ? 0 : prev + 1
          );
        }, 2000);
      }
    }
    return () => clearInterval(interval);
  }, [hoverIndex]);

  const handleOpenModal = (project) => {
    setSelectedProject(project); // Set proyek yang dipilih
    setCurrentIndex(0); // Reset index gambar saat membuka modal
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.img.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.img.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Projects
        </h1>
        <p className="text-base md:text-lg mt-3 text-gray-300">
          Here are some of my projects that I have worked on.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-14 w-full max-w-7xl">
        {projects.map((item, index) => {
          // Fungsi untuk menentukan gambar mana yang ditampilkan di card
          const getCardImage = () => {
            const isMultipleImages = Array.isArray(item.cover_img);

            // Jika sedang di-hover, tampilkan gambar sesuai index slideshow
            if (hoverIndex === index && isMultipleImages) {
              return item.cover_img[hoverImageIndex];
            }

            // Jika ada banyak gambar tapi tidak di-hover → pakai gambar pertama
            if (isMultipleImages) {
              return item.cover_img[0];
            }

            // Jika hanya ada satu gambar → langsung tampilkan
            return item.cover_img;
          };

          const showImg = getCardImage();

          return (
            <div
              key={index}
              className="w-full md:w-[calc(50%-30px)] lg:max-w-[550px] bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => {
                setHoverIndex(index); // Set index proyek saat hover
                setHoverImageIndex(0); // Reset index gambar saat hover
              }}
              onMouseLeave={() => {
                setHoverIndex(null); // Reset hover index saat mouse keluar
                setHoverImageIndex(0); // Reset index gambar saat mouse keluar
              }}
              onClick={() => handleOpenModal(item)}
            >
              <div className="overflow-hidden">
                <motion.img
                  key={showImg}
                  src={showImg}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm ${tech.color} shadow-sm`}
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal untuk menampilkan detail proyek */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-auto">
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl w-full max-w-4xl p-10 mt-12 mb-12 animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-3xl font-bold hover:text-red-500 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full">
                <img
                  key={selectedProject.img[currentIndex]}
                  src={selectedProject.img[currentIndex]}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl mb-6 transition-opacity duration-700 ease-in-out"
                />
              </div>
              {selectedProject.img.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                    onClick={handlePrev}
                  >
                    &lt;
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                    onClick={handleNext}
                  >
                    &gt;
                  </button>
                </>
              )}
            </div>
            <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
            <p className="text-gray-300 mt-2">{selectedProject.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm ${tech.color} shadow-sm`}
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 bg-blue-500 px-6 py-2 rounded-lg items-center gap-2 hover:bg-blue-700 transform transition-colors hover:scale-105 duration-300 "
              >
                View Project <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
