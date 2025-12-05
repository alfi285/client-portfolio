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

export default function FloatingSkills() {
  const icons = [
    { icon: FaReact, color: "#61DBFB" },
    { icon: FaNodeJs, color: "#539E43" },
    { icon: SiExpress, color: "#FFFFFF" },
    { icon: SiMongodb, color: "#4DB33D" },
    { icon: SiMysql, color: "#00758F" },
    { icon: SiFastapi, color: "#009688" },
    { icon: FaPython, color: "#FFD43B" },
    { icon: FaDatabase, color: "#F29111" },
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: FaGithub, color: "#EDEDED" },
    { icon: FaGitAlt, color: "#F1502F" },
    { icon: FaJava, color: "#EA2D2E" },
    { icon: FaCloud, color: "#79BEEE" },
  ];

  const random = (min, max) => Math.random() * (max - min) + min;

  return (
    <section className="relative py-20 bg-black overflow-hidden w-full h-[300px] md:h-[380px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
        Technologies I Use
      </h2>

      <div className="absolute inset-0 pointer-events-none">
        {icons.map((Item, idx) => {
          const IconTag = Item.icon;

          return (
            <motion.div
              key={idx}
              className="absolute"
              initial={{
                x: `${random(10, 90)}vw`,
                y: `${random(10, 90)}vh`,
              }}
              animate={{
                x: `${random(10, 90)}vw`,
                y: `${random(10, 90)}vh`,
                rotate: random(-25, 25),
              }}
              transition={{
                duration: random(4, 8),
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: random(0, 2),
              }}
            >
              <IconTag
                className="opacity-95"
                style={{
                  fontSize: "2.3rem",
                  color: Item.color,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
