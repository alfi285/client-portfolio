import { useState } from "react";

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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
        className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 text-center md:text-left"
      >
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Hi, I'm Alfiya A</h1>
          <p className="text-xl text-gray-700">Full Stack Developer | MERN & Django</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/resume_alfiya_a_calicut.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/alfiya_a.png" // ✅ Must be in public/
            alt="Alfiya A"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-600 shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
