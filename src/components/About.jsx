import React from "react";
import { motion } from "framer-motion";
import { infoList } from "../util/data";


const About = () => {
  return (
    <div id="AboutMe" className="w-[80%] scroll-mt-20 leading-8 font-Ovo mx-auto">
      {/* Heading Section */}
      <div className="w-full px-[12%] text-center">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-700"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl font-bold text-gray-900"
        >
          About Me
        </motion.h2>
      </div>

      {/* Content Section */}
      <div className="flex w-full flex-col lg:flex-row mx-auto gap-20 my-20 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-48 sm:w-80 rounded-3xl border flex items-center justify-center overflow-hidden"
        >
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-full rounded-3xl"
          />

        </motion.div>

        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl text-gray-700">
            Hi, I’m <span className="font-semibold text-black">Yarlanki Suresh</span>, a passionate{" "}
            <span className="font-semibold text-black">frontend developer</span> eager to build innovative and dynamic web experiences.
            As a <span className="font-semibold text-black">recent graduate</span>, I specialize in{" "}
            <span className="font-semibold text-black">HTML, CSS, JavaScript, React, and TailwindCSS</span>, focusing on creating{" "}
            <span className="font-semibold text-black">intuitive, user-friendly, and high-performance</span> web applications.
          </p>

          {/* Skills Section */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                        hover:bg-lightHover transition-all duration-500 shadow-md"
              >
                <img className="w-10 mx-auto" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
