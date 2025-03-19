import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const projects = [
    {
      image: "/project_1.png",
      title: "Crypto Place",
      description:
        "Crypto Place is a web application that allows users to view real-time prices and detailed information about various cryptocurrencies. Stay updated on market trends, explore in-depth coin data, and make informed decisions with an intuitive and user-friendly interface.",
      liveLink: "https://crypto-place-clone.netlify.app/",
      githubLink: "https://github.com/monru00/crypto-place",
    },
    {
      image: "/project_2.png",
      title: "Netflix Clone",
      description:
        "Netflix Clone is a streaming platform replica built to showcase movies and TV shows with a sleek, user-friendly interface. It features a dynamic homepage, categorized content, and responsive design, mimicking the core functionalities of the popular streaming service.",
      liveLink: "https://monru-projects.netlify.app/",
      githubLink: "https://github.com/monru00/Netflix-Clone",
    },
    {
      image: "/project_3.png",
      title: "Gemini Clone",
      description:
        "Gemini Clone is an AI-powered platform that provides intelligent insights, predictions, and analysis using advanced machine learning algorithms. It simplifies complex data, helping users make informed decisions through a user-friendly interface.",
      liveLink: "https://gemini-clone-monru.netlify.app/",
      githubLink: "https://github.com/monru00/Gemini-Clone",
    },
    {
      image: "/project_4.png",
      title: "Spotify Clone",
      description:
        "Spotify Clone is a music streaming platform that allows users to explore, play, and organize their favorite songs and playlists. With a sleek, responsive design, it replicates the core features of the popular Spotify app, delivering a seamless and engaging listening experience.",
      liveLink: "https://spotify-clone-monru.netlify.app/",
      githubLink: "https://github.com/monru00/Spotify-Clone",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Here are a few projects I have worked on recently.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-2xl lg:max-w-3xl mx-auto my-10" // 32px gap
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center bg-white dark:bg-gray-800 dark:text-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={320} // Base width for Next.js (updated to match default)
              height={192} // Matches h-48
              className="w-full h-48 object-cover rounded-md" // Fluid width
            />
            <h2 className="mt-4 text-xl font-semibold font-Ovo">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
