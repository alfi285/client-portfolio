import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/30 blur-[120px] rounded-full -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-black/5 bg-white/40">
        <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          ALFIYA A
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-gray-600 font-bold text-xs tracking-widest uppercase">
          <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-black transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-black transition-colors">Projects</a></li>
          <li><a href="#services" className="hover:text-black transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 flex flex-col items-center justify-center gap-8 text-2xl text-gray-900 font-black uppercase md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="pt-40 pb-20 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Profile Image */}
        <div className="relative group mb-10">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500" />
          <div className="relative bg-white p-2 rounded-full shadow-2xl overflow-hidden border-4 border-white">
            <img
              src="/alf.jpg"
              alt="Alfiya A"
              className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-full transform transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-gray-900 leading-none">
            ALFIYA A
          </h1>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight mb-8">
            Python Full Stack Developer
          </p>
          
          <p className="text-xl md:text-2xl text-gray-500 font-bold leading-relaxed max-w-2xl mx-auto uppercase tracking-wide mb-10">
            <span className="text-gray-900 underline decoration-indigo-400 decoration-4 underline-offset-4">MERN</span> | 
            <span className="text-gray-900 underline decoration-pink-400 decoration-4 underline-offset-4 ml-2">Django</span> | 
            <span className="text-gray-900 underline decoration-purple-400 decoration-4 underline-offset-4 ml-2">FastAPI</span>
          </p>
          
          
        </div>

        {/* Social Links */}
        <div className="flex gap-10">
          {[
            { Icon: FaGithub, href: "https://github.com/alfi285", color: "hover:text-black" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/alfiya-a-bbbb7697/", color: "hover:text-blue-600" },
            { Icon: FaWhatsapp, href: "https://wa.me/918129788436", color: "hover:text-green-600" },
            { Icon: IoIosMail, href: "mailto:alfiyazon@gmail.com", color: "hover:text-red-500" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 transition-all duration-300 text-3xl ${social.color} transform hover:scale-125`}
            >
              <social.Icon />
            </a>
          ))}
        </div>

        {/* Resume Download */}
        <a
          href="/resume_alfiya_a_calicut.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-14 px-10 py-4 bg-black text-white font-black rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-widest text-xs"
        >
          Download CV
        </a>
      </section>
    </div>
  );
};

export default Hero;
