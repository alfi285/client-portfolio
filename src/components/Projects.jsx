import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management",
      desc: "Built a web app to manage employee records with role-based login and CRUD operations using Django.",
      tech: "Django",
      image: "/employee_management.png",
      readMore: "https://github.com/alfi285/Employee-Management-System-django-crud-sqllite",
    },
    {
      title: "Hospital Management",
      desc: "Developed a hospital management web app with patient registration, doctor scheduling, and admin dashboard.",
      tech: "Django",
      image: "/hospital.png",
      readMore: "https://github.com/alfi285/Metro-Med-Hospital--Django",
    },
    {
      title: "Social Media Platform",
      desc: "Full-featured MERN social media app with authentication, posts, likes, and profile management.",
      tech: "MERN Stack",
      image: "/moonlight.png",
      readMore: "https://github.com/alfi285/Moonlight-ClientNew",
    },
    {
      title: "Expense Tracker",
      desc: "Full stack tracker with JWT auth, category filtering, and real-time budget insights.",
      tech: "MERN Stack",
      image: "/expense.png",
      readMore: "https://github.com/alfi285/MERN-Expense-Tracker",
    },
    {
      title: "Smart City Feedback",
      desc: "Portal for city service feedback implementing core MERN features and real-time usability tracking.",
      tech: "MERN Stack",
      image: "/smartcity.png",
      readMore: "https://github.com/alfi285/Smart-City-Service",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
          Project Portfolio
        </h2>
        <p className="text-gray-600 font-medium">
          Click the card stack to cycle through my latest work.
        </p>
      </div>

      <div className="relative h-[550px] w-full max-w-7xl mx-auto flex items-center justify-center overflow-x-clip">
        <AnimatePresence initial={false}>
          {projects.map((proj, i) => {
            const diff = i - index;
            const isCenter = diff === 0;
            const isLeft = diff === -1 || (index === 0 && i === projects.length - 1);
            const isRight = diff === 1 || (index === projects.length - 1 && i === 0);
            
            if (!isCenter && !isLeft && !isRight) return null;

            const cardWidth = 320;
            let xValue = 0;
            if (isLeft) xValue = -220; // Positioned so ~50% is visible
            if (isRight) xValue = 220; // Positioned so ~50% is visible

            return (
              <motion.div
                key={i}
                className="absolute w-[320px] h-[450px] bg-white rounded-[40px] border border-black/5 shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => {
                  if (isLeft) setIndex((prev) => (prev - 1 + projects.length) % projects.length);
                  else if (isRight) setIndex((prev) => (prev + 1) % projects.length);
                  else nextProject();
                }}
                initial={{ scale: 0.5, opacity: 0, x: isLeft ? -500 : 500 }}
                animate={{
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.6,
                  x: xValue,
                  zIndex: isCenter ? 50 : 20,
                  rotateY: isCenter ? 0 : (isLeft ? 25 : -25),
                }}
                exit={{ scale: 0.5, opacity: 0, x: isLeft ? -500 : 500 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                style={{ perspective: 1000 }}
              >
                <div className="relative h-48 bg-gray-100">
                  {proj.video ? (
                    <video
                      src={proj.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-900 border border-black/5 shadow-sm">
                    {proj.tech}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {proj.desc}
                  </p>
                  
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between"
                    >
                      <a
                        href={proj.readMore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;


