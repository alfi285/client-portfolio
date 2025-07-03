import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-blue-100">
        <div className="text-2xl font-bold text-blue-800">Alfiya A</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-blue-700 font-medium">
          <li><a href="#home" className="hover:text-blue-900">Home</a></li>
          <li><a href="#services" className="hover:text-blue-900">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-900">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-900">Contact Me</a></li>
          <li><a href="#about" className="hover:text-blue-900">About Us</a></li>
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
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
        </ul>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-12"
      >
        {/* Profile Image */}
        <img
          src="/alfiya_profile.jpg"
          alt="Alfiya A"
          className="w-72 h-72 object-cover rounded-full border-4 border-blue-600 shadow-lg mb-6"
        />

        {/* Intro Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Alfiya A
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Full Stack Developer | MERN & Django
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/alfi285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/alfiya-a-bbbb7697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/918129788436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href="/resume_alfiya_a_calicut.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Hero;
