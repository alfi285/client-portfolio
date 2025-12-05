import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaLock,
  FaDatabase,
  FaCloudUploadAlt,
  FaPython,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "Build dynamic, scalable full-stack applications for real-world use.",
      tech: "MERN Stack",
      icon: <FaCode className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "RESTful APIs & Backend",
      desc: "Create secure and efficient API architectures using Node.js & Express.",
      tech: "Node.js, Express",
      icon: <FaServer className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Python & FastAPI Backend",
      desc: "High-performance backend systems and REST APIs using Python and FastAPI.",
      tech: "Python, FastAPI",
      icon: <FaPython className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "MySQL Database Design",
      desc: "Database modeling, optimization & integrations using MySQL.",
      tech: "MySQL",
      icon: <FaDatabase className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "MongoDB Integration",
      desc: "Document modeling, indexing & scalable MongoDB database solutions.",
      tech: "MongoDB, Mongoose",
      icon: <FaDatabase className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Responsive UI",
      desc: "Pixel-perfect, responsive UIs built with React & Tailwind CSS.",
      tech: "React, Tailwind CSS",
      icon: <FaMobileAlt className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Authentication & Security",
      desc: "JWT auth, encrypted passwords, route protection & secure flows.",
      tech: "JWT, Bcrypt",
      icon: <FaLock className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploy web apps on Vercel, Render, or Netlify with CI/CD workflows.",
      tech: "Vercel, Render",
      icon: <FaCloudUploadAlt className="text-4xl text-cyan-400 mb-4" />,
    },
  ];

  return (
   <section id="services" className="py-20 px-4 bg-black overflow-hidden">
 {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
        My Services
      </h2>

      {/* Cards Grid */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group 
              bg-gradient-to-br from-gray-900 via-gray-800 to-black 
              rounded-3xl 
              p-[1px] 
              shadow-lg 
              hover:shadow-cyan-400/40 
              transition 
              transform 
              hover:scale-105 
              hover:-translate-y-2 
              hover:rotate-[0.5deg]
              duration-500 
              animate-card-float
            "
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-3xl h-full p-4 flex flex-col items-center text-center">
              <div className="group-hover:animate-bounce-once">
                {service.icon}
              </div>

              <h3 className="text-xl text-cyan-300 font-semibold mt-2 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-2">{service.desc}</p>

              <p className="text-sm text-gray-500">Tech: {service.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
