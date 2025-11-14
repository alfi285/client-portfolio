import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen h-14 bg-black font-sans">
      {/* Navbar */}
     <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-blue-100 backdrop-blur-md">

       <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Alfiya A
</div>


        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-blue-700 font-medium sticky-top">
          <li><a href="#home" className="hover:text-blue-900">Home</a></li>
          <li><a href="#services" className="hover:text-blue-900">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-900">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-900">Contact Me</a></li>
          <li><a href="#about" className="hover:text-blue-900">About</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 text-2xl">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-blue-100 text-blue-700 font-medium px-6 py-4 gap-4">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>
      )}

      {/* Hero Section */}
     <section
  id="home"
  className="pt-32 flex flex-col items-center justify-center text-center px-6 py-12"
>

        {/* Profile Image */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-full inline-block hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out drop-shadow-xl">
  <img
    src="/alf.jpg"
    alt="Alfiya A"
    className="w-62 h-62 object-cover rounded-full bg-white"
  />
</div>


        {/* Intro Text */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Hi, I'm Alfiya A
        </h1>
        <p className="text-xl text-gray-500 mb-6">
          Full Stack Developer | MERN | Django |FAST API |Python
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/alfi285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-900 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alfiya-a-bbbb7697/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/918129788436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-blue-900 text-2xl"
          >
            <FaWhatsapp />
          </a>

           <a
            href="mailto:alfiyazon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-blue-900 text-2xl"
          >
            <IoIosMail />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href="/resume_alfiya_a_calicut.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out
"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Hero;
