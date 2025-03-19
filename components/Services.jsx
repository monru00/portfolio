import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const firstRow = serviceData.slice(0, serviceData.length - 5);
  const secondRow = serviceData.slice(serviceData.length - 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skillsets
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a full stack engineer and specialize in Mern stack (MongoDB,
        Express, React, Node) and other skills
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {firstRow.map(({ icon, name }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border rounded-lg px-4 py-4 max-w-xs hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col items-center"
          >
            <Image
              src={icon}
              alt={name}
              className={`w-16 mx-auto ${name === "Express" ? "mb-2" : ""}`}
            />
            <span className="mt-2 px-2 py-1 text-sm text-gray-700 dark:text-white">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        {secondRow.map(({ icon, name }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border rounded-lg px-4 py-4 max-w-xs hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col items-center"
          >
            <Image
              src={icon}
              alt={name}
              className={`w-16 mx-auto ${name === "Express" ? "mb-7" : ""}`}
            />
            <span className="mt-2 px-2 py-1 text-sm font-Ovo text-gray-700 dark:text-white">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
