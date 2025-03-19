import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toolNames = [
    "vscode",
    "git",
    "github",
    "bash",
    "firebase",
    "postman",
    "figma",
  ];

  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-[12%] py-10 scroll-mt-20" // Reduced padding on small screens
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl font-Ovo" // Smaller on small screens
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-10 sm:gap-20 mt-10 sm:mt-20" // Adjusted gaps
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full"
        >
          <p className="mb-6 sm:mb-10 font-Ovo text-center sm:max-w-2xl mx-auto">
            Hello! My name is Mohammed, a Passionate Full-Stack Developer who is
            a computer science degree program dropout from University of Saint
            Mary, denying the impractical way of learning to achieve his goals
            by learning in his own method.
          </p>
          <p className="mb-6 sm:mb-10 font-Ovo text-center sm:max-w-2xl mx-auto">
            I believe in learning by building rather than any other method, so
            I’m a building enthusiast with a strong foundation in tools I use
            like (JavaScript, React, Node, Express, and more...). I build
            scalable, high-performance web applications using the MERN stack
            (MongoDB, Express, React, Node.js). Experienced in both frontend and
            backend development, ensuring seamless user experiences and
            efficient server-side functionality.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto w-full" // Centered, smaller gap on small
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? icon : icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3 mx-auto" // Centered icon
                />
                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-center">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80 text-center">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80 text-center" // Centered, no lg offsets
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-5 mx-auto w-full" // Wrap and center tools
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-100"
                key={index}
              >
                <Image
                  src={tool}
                  alt={toolNames[index]}
                  className="w-4 sm:w-5 md:w-7" // Scaled icon sizes
                />
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10 dark:bg-gray-600 pointer-events-none"
                    >
                      {toolNames[index]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
