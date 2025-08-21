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
          <div className="flex flex-row gap-2 w-full">
            <div className="flex flex-row p-4 w-full border">
                <FaUser />
              <input type="text" name="" id="" />
            </div>
            <div className="flex flex-row p-4 w-full">
                <MdEmail />
              <input type="text" name="" id="" />
            </div>
          </div>
          <div>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </div>
    </section>
  );
}
