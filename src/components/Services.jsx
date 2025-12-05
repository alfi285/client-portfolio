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
      desc: "Build dynamic full-stack web apps tailored to real-world needs.",
      tech: "MERN Stack",
      icon: <FaCode className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "RESTful APIs & Backend",
      desc: "Create secure RESTful APIs with Node.js and Express.",
      tech: "Node.js, Express",
      icon: <FaServer className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "Python & FastAPI Backend",
      desc: "High-performance APIs using Python & FastAPI.",
      tech: "Python, FastAPI",
      icon: <FaPython className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "MySQL Database Design",
      desc: "Schema design, query optimization and secure integrations.",
      tech: "MySQL",
      icon: <FaDatabase className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "MongoDB Integration",
      desc: "Scalable NoSQL schemas with indexing & optimization.",
      tech: "MongoDB, Mongoose",
      icon: <FaDatabase className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "Responsive UI",
      desc: "Clean, responsive UI with React + Tailwind.",
      tech: "React, Tailwind CSS",
      icon: <FaMobileAlt className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "Authentication & Security",
      desc: "JWT, bcrypt, route protection and secure sessions.",
      tech: "JWT, Bcrypt",
      icon: <FaLock className="text-4xl text-emerald-400 mb-4" />,
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploy full-stack apps with CI/CD workflows.",
      tech: "Vercel, Render",
      icon: <FaCloudUploadAlt className="text-4xl text-emerald-400 mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20 px-10 bg-black overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-12 animate-fade-slide">
        My Services
      </h2>

      {/* Grid */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group 
              bg-gradient-to-br from-slate-900/60 to-gray-800/40 
              backdrop-blur-lg 
              rounded-2xl 
              p-[1px] 
              shadow-lg 
              transition 
              transform 
              hover:scale-105 
              hover:-translate-y-2 
              hover:shadow-emerald-500/20 
              duration-300 
              animate-card-fade
            "
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <div
              className="
                bg-black/60 
                rounded-2xl 
                p-5 
                h-full 
                flex 
                flex-col 
                items-center 
                text-center 
                gap-2 
                transition-all 
                duration-300
                group-hover:bg-black/80
                group-hover:rotate-[1deg]
              "
            >
              {/* Icon Animation */}
              <div className="group-hover:animate-wiggle">{service.icon}</div>

              <h3 className="text-lg text-emerald-300 font-semibold mt-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">{service.desc}</p>

              <p className="text-xs text-gray-500">Tech: {service.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-slide {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-slide {
          animation: fade-slide 0.7s ease forwards;
        }

        @keyframes card-fade {
          from { opacity: 0; transform: translateY(25px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-card-fade {
          animation: card-fade 0.6s ease forwards;
        }

        @keyframes wiggle {
          0%,100% { transform: rotate(0deg); }
          50%     { transform: rotate(6deg); }
        }

        .animate-wiggle {
          animation: wiggle 0.4s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
