import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="relative w-full flex flex-col items-center justify-center py-16 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-3">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full">
        <div className="flex flex-col gap-4">
          <p className="text-lg ">
            Lets connect! Feel free to contact me for any questions or
            collaborations.
          </p>
          <span className="flex items-center gap-3 w-full text-lg p-4 border border-white shadow-lg rounded-xl ">
            <FaPhoneAlt /> +62 85761259083
          </span>
          <span className="flex items-center gap-3 w-full text-lg p-4 border border-white shadow-lg rounded-xl ">
            <MdEmail /> kenwardkh5@gmail.com
          </span>
        </div>
        <form action="" className="w-full border border-white rounded-xl p-4">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name" className="text-xl">Name</label>
            <input type="text" name="name" id="name" placeholder="your name" required className="bg-transparent border border-white/50 p-2 text-base rounded-lg"/>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="text-xl">Email</label>
            <input type="email" name="email" id="email" placeholder="email@gmail.com" required className="bg-transparent border border-white/50 p-2 text-base rounded-lg"/>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="message" className="text-xl">Message</label>
            <textarea name="message" id="message" placeholder="message" required className="h-32 bg-transparent border border-white/50 p-2 text-base rounded-lg"></textarea>
          </div>
          <div>
            <button type="submit" className="flex py-2 px-4 bg-blue-500 transform transition-colors duration-300 hover:bg-blue-800 text-lg rounded-lg">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
