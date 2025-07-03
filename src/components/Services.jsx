import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaLock,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "Build dynamic full-stack web apps using MERN tailored to your business needs.",
      tech: "MERN Stack",
      icon: <FaCode className="text-4xl text-indigo-400 mb-4" />,
    },
    {
      title: "RESTful API & Backend",
      desc: "Create secure RESTful APIs with Node.js, Express and efficient middleware handling.",
      tech: "Node.js, Express",
      icon: <FaServer className="text-4xl text-indigo-400 mb-4" />,
    },
    {
      title: "MongoDB Integration",
      desc: "Schema design, indexing, and integration with live MongoDB databases.",
      tech: "MongoDB, Mongoose",
      icon: <FaDatabase className="text-4xl text-indigo-400 mb-4" />,
    },
    {
      title: "Responsive UI",
      desc: "Responsive, mobile-first UIs built with React, Tailwind, and accessibility in mind.",
      tech: "React, Tailwind CSS",
      icon: <FaMobileAlt className="text-4xl text-indigo-400 mb-4" />,
    },
    {
      title: "Authentication & Security",
      desc: "JWT, password encryption, route protection, and secure session handling.",
      tech: "JWT, Bcrypt",
      icon: <FaLock className="text-4xl text-indigo-400 mb-4" />,
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploy full-stack apps on Vercel, Render or Netlify with CI/CD pipelines.",
      tech: "Vercel, Render",
      icon: <FaCloudUploadAlt className="text-4xl text-indigo-400 mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
        My Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-1 shadow-xl transition transform hover:scale-105"
          >
            <div className="bg-black rounded-3xl h-full p-6 flex flex-col items-center text-center group-hover:shadow-md transition-all duration-300 ease-in-out">
              <div className="animate-bounce-once">
                {service.icon}
              </div>
              <h3 className="text-xl text-indigo-300 font-semibold mt-2 mb-2">
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
