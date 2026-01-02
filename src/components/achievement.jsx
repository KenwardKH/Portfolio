import codefess from "../assets/competitions/codefess.jpg";
import mobile_dev from "../assets/competitions/mobile_dev.png";
import dsc_solve from "../assets/competitions/dsc-solve.jpg";
import himatif from "../assets/competitions/himatif.jpg";
import compfest from "../assets/competitions/compfest.jpg"
import web_dev from "../assets/competitions/web_development_gdsc.jpeg"
import mobile from "../assets/competitions/mobile_dev_certif.jpg"

export default function Achievement() {
  const achievements = [
    {
      img: codefess,
      title: "Participant – Senior Competitive Programming (CodeFest 001)",
      desc: "Recognized for participation in the Senior Competitive Programming category during CodeFest 001, organized by the Faculty of Computer Science and Information Technology, Universitas Sumatera Utara, on May 14th, 2025.",
    },
    {
      img: mobile_dev,
      title: "1st Place – Mobile Development Pathway",
      desc: "Awarded as the 1st place winner in the Mobile Development Pathway competition, demonstrating exceptional skills and dedication in mobile application development.",
    },
    {
      img: dsc_solve,
      title: "Top 10 Finalist – DSC Solve 2024",
      desc: "Achieved Top 10 Finalist status with the team ABITDIFFERENT in the city-wide competition DSC Solve 2024, organized by Google Developer Student Clubs Medan.",
    },
    {
      img: web_dev,
      title: "Certificate of Appreciation – Web Development",
      desc: "Awarded for successfully completing the Web Development learning path organized by Google Developer Student Clubs Universitas Sumatera Utara, recognizing dedication to learning web development.",
    },
    {
      img: compfest,
      title: "Certificate of Participation – Capture The Flag (COMPFEST 17)",
      desc: "Awarded for participation in the Capture The Flag competition at COMPFEST 17, recognizing problem-solving skills and cybersecurity knowledge.",
    },
    {
      img: mobile,
      title: "Certificate of Completion – Mobile Development Pathway",
      desc: "Awarded for successfully completing the Mobile Development Pathway organized by Google Developer Groups on Campus – Universitas Sumatera Utara, recognizing dedication and strong understanding of mobile application development.",
    },
    {
      img: himatif,
      title: "Member of Spiritual Division – HIMATIF USU",
      desc: "Actively involved in planning and organizing spiritual development programs, promoting ethical values, and supporting a positive organizational culture within HIMATIF USU.",
    },
  ];
  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Achievements & Experiences
        </h1>
        <p className="text-base md:text-lg mt-3 text-gray-300">
          Here are some of my achievements and competitions that I have
          participated in
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-12 w-full max-w-7xl items-center">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-30px)] lg:max-w-[360px] bg-white/10 mx-auto md:m-0 h-fit backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full max-h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
