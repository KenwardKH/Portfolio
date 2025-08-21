import codefess from "../assets/competitions/codefess.jpg";
import mobile_dev from "../assets/competitions/mobile_dev.png";
import dsc_solve from "../assets/competitions/dsc-solve.jpg";

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
  ];
  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Achievements & Competition
        </h1>
        <p className="text-base md:text-lg mt-3 text-gray-300">
          Here are some of my achievements and competitions that I have
          participated in
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-7xl items-center">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 mx-8 md:m-0 h-fit backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
