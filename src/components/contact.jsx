import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4kkocgi",
      "template_owl2iuc",
      form.current,
      "23ElyfZHYFX8HqyHu"
    ).then(
      () => {
        toast.success("Message sent successfully!", {
          duration: 5000,
          style: {
            background: "#1E293B", // slate-800
            color: "#fff",
          }
        });
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send message. Please try again later.", {
          duration: 5000,
          style: {
            background: "#DC2626", // red-600
              color: "#fff",
          }
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section
      id="contacts"
      className="relative w-full flex flex-col items-center justify-center py-16 px-6"
    >
      <Toaster position="top-right"/>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-3 md:mb-10">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-center md:text-start mb-4 md:mb-0 text-gray-300">
            Lets connect! Feel free to contact me for any questions or
            collaborations.
          </p>
          <a
            href="mailto:kenwardkh5@gmail.com"
            className="flex items-center gap-4 text-lg p-4 border border-white/20 rounded-xl hover:border-blue-500 transition-colors duration-300"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-blue-500 text-xl" /> kenwardkh5@gmail.com
          </a>
          <a
            href="https://github.com/KenwardKH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg p-4 border border-white/20 rounded-xl hover:border-blue-500 transition-colors duration-300"
          >
            <FaGithub className="text-blue-500 text-xl" /> kenwardkh5@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kenward-keene-hermanto-054993325/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg p-4 border border-white/20 rounded-xl hover:border-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-blue-500 text-xl" /> Kenward Keene
            Hermanto
          </a>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 shadow-lg"
        >
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              autoComplete="off"
              required
              className="bg-transparent border border-white/20 focus:border-blue-400 p-3 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              autoComplete="off"
              required
              className="bg-transparent border border-white/20 focus:border-blue-400 p-3 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="subject" className="text-xl">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              autoComplete="off"
              required
              className="bg-transparent border border-white/20 focus:border-blue-400 p-3 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              autoComplete="off"
              rows={4}
              required
              className="bg-transparent border border-white/20 focus:border-blue-400 p-3 outline-none rounded-lg"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 transform transition-colors duration-300 hover:opacity-90 text-lg rounded-lg font-medium"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
