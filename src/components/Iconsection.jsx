import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPhp,
  FaBootstrap,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiDjango,
  SiPostgresql,
  SiCplusplus,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const BouncingIcon = ({ item }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 80,
    y: Math.random() * 80,
  });
  
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 0.15,
    y: (Math.random() - 0.5) * 0.15,
  });

  useEffect(() => {
    let animationFrame;
    
    const move = () => {
      setPosition((prev) => {
        let nextX = prev.x + velocity.x;
        let nextY = prev.y + velocity.y;
        let nextVelX = velocity.x;
        let nextVelY = velocity.y;

        if (nextX <= 0 || nextX >= 90) {
          nextVelX = -velocity.x;
          nextX = prev.x + nextVelX;
        }
        if (nextY <= 0 || nextY >= 80) {
          nextVelY = -velocity.y;
          nextY = prev.y + nextVelY;
        }

        if (nextVelX !== velocity.x || nextVelY !== velocity.y) {
          setVelocity({ x: nextVelX, y: nextVelY });
        }

        return { x: nextX, y: nextY };
      });
      
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [velocity]);

  return (
    <motion.div
      className="absolute p-4 rounded-3xl bg-white shadow-lg border border-black/5 group hover:shadow-2xl transition-all cursor-pointer backdrop-blur-sm"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        color: item.color,
      }}
      whileHover={{ scale: 1.2, zIndex: 50 }}
    >
      <div className="text-4xl md:text-5xl">
        {item.icon}
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[9px] font-black uppercase px-2 py-1 rounded-full whitespace-nowrap tracking-widest">
        {item.name}
      </div>
    </motion.div>
  );
};

const Iconsection = () => {
  const icons = [
    { icon: <FaReact />, color: "#61DBFB", name: "React" },
    { icon: <FaNodeJs />, color: "#539E43", name: "Node.js" },
    { icon: <SiExpress />, color: "#000000", name: "Express" },
    { icon: <SiDjango />, color: "#092E20", name: "Django" },
    { icon: <SiPostgresql />, color: "#336791", name: "PostgreSQL" },
    { icon: <SiFastapi />, color: "#009688", name: "FastAPI" },
    { icon: <SiRedis />, color: "#DC382D", name: "Redis" },
    { icon: <SiCelery />, color: "#387D17", name: "Celery" },
    { icon: <FaDocker />, color: "#2496ED", name: "Docker" },
    { icon: <SiMongodb />, color: "#4DB33D", name: "MongoDB" },
    { icon: <SiMysql />, color: "#4479A1", name: "MySQL" },
    { icon: <FaPython />, color: "#3776AB", name: "Python" },
    { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
    { icon: <SiCplusplus />, color: "#00599C", name: "C++" },
    { icon: <SiOpenai />, color: "#10a37f", name: "ChatGPT" },
    { icon: <SiGooglegemini />, color: "#8E75C2", name: "Gemini" },
    { icon: <VscVscode />, color: "#007ACC", name: "VS Code" },
    { icon: <FaRobot />, color: "#546E7A", name: "AI Tools" },
  ];

  return (
    <section id="services" className="relative py-12 overflow-hidden w-full h-[450px]">
      <div className="max-w-6xl mx-auto px-6 relative z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black text-center text-gray-900 uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none leading-none opacity-20">
          TECHNICAL <br /> SKILLSET
        </h2>
      </div>

      <div className="absolute inset-0 m-6 border-4 border-dashed border-black/5 rounded-[40px] overflow-hidden bg-white/10 backdrop-blur-[1px]">
        {icons.map((item, idx) => (
          <BouncingIcon key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Iconsection;
