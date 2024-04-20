import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-orange-600 flex flex-col items-center justify-end mt-3 md:mt-10">
      <div className="flex items-center space-x-6 text-slate-100">
        <div className="flex space-x-4">
          <a href="#">
            <FaInstagram className="text-xl md:text-2xl lg:text-3xl transition duration-300 transform hover:scale-110" />
          </a>
          <a href="#">
            <FaFacebook className="text-xl md:text-2xl lg:text-3xl transition duration-300 transform hover:scale-110" />
          </a>
          <a href="#">
            <FaYoutube className="text-xl md:text-2xl lg:text-3xl transition duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>
      <div className="text-slate-100 italic font-serif text-sm mt-2">
        Designed by{" "}
        <a
          className="text-slate-100 italic font-serif text-sm mt-2 hover:underline"
          href="https://muratcan23.github.io/myportfolio/"
          target="_blank"
        >
          MC
        </a>
      </div>
      <div className="text-slate-100 mt-1">
        All rights reserved {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
