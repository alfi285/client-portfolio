import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaCloud,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiFastapi,
} from "react-icons/si";

export const Iconsection = () => {
  const icons = [
    { icon: <FaReact />, color: "#61DBFB" },
    { icon: <FaNodeJs />, color: "#539E43" },
    { icon: <SiExpress />, color: "#FFFFFF" },
    { icon: <SiMongodb />, color: "#4DB33D" },
    { icon: <SiMysql />, color: "#00758F" },
    { icon: <SiFastapi />, color: "#009688" },
    { icon: <FaPython />, color: "#FFD43B" },
    { icon: <FaDatabase />, color: "#F29111" },
    { icon: <FaHtml5 />, color: "#E34F26" },
    { icon: <FaCss3Alt />, color: "#1572B6" },
    { icon: <SiTailwindcss />, color: "#38BDF8" },
    { icon: <FaGithub />, color: "#EDEDED" },
    { icon: <FaGitAlt />, color: "#F1502F" },
    { icon: <FaJava />, color: "#EA2D2E" },
    { icon: <FaCloud />, color: "#79BEEE" },
  ];

  const random = (min, max) => Math.random() * (max - min) + min;

  return (
    <section className="relative py-16 bg-black overflow-hidden h-[350px] w-full">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
        Technologies I Use
      </h2>

      <div className="absolute inset-0 pointer-events-none">
        {icons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            initial={{
              x: random(0, 100) + "vw",
              y: random(0, 100) + "vh",
            }}
            animate={{
              x: random(0, 100) + "vw",
              y: random(0, 100) + "vh",
              rotate: random(-40, 40),
            }}
            transition={{
              duration: random(6, 12),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: random(0, 2),
            }}
          >
            <div
              className="text-4xl opacity-95"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
