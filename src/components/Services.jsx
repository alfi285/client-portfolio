import React from "react";
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
      title: "Backend Architecture",
      desc: "Designing scalable server-side systems using Django and FastAPI with optimized SQL/NoSQL databases.",
      tech: "Python, Django, FastAPI",
      icon: <FaServer />,
    },
    {
      title: "Full Stack Development",
      desc: "Building high-performance, responsive web applications using the MERN stack and modern CSS frameworks.",
      tech: "MERN, Tailwind, Bootstrap",
      icon: <FaCode />,
    },
    {
      title: "Async & AI Solutions",
      desc: "Implementing background task workers with Celery/Redis and integrating AI Assistants into production apps.",
      tech: "Celery, Redis, OpenAI",
      icon: <FaCloudUploadAlt />,
    },
    {
      title: "Enterprise Systems",
      desc: "Developing production-level ERP solutions with role-based auth and complex data management.",
      tech: "Docker, PostgreSQL, JWT",
      icon: <FaDatabase />,
    },
  ];

  return (
   <section id="services" className="py-24 px-4 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
          What I Do
        </h2>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">
          Specialized Services for Modern Web Solutions
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group 
              bg-white/60
              backdrop-blur-xl
              rounded-[32px] 
              p-8
              border border-black/5
              shadow-xl
              hover:shadow-indigo-500/10 
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            <div className="text-gray-900 mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
              {React.cloneElement(service.icon, { className: "text-5xl text-black" })}
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
              {service.desc}
            </p>

            <div className="mt-auto">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded-md">
                {service.tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
