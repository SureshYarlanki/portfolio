import React from "react";
import { motion } from "framer-motion";
import { skills } from "../util/data";



const Skills = () => {
  return (
    <div id="Skills" className="w-full px-[12%] py-16 ">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h4 className="mb-2 text-lg text-gray-700">Skills & Technologies</h4>
        <h2 className="text-5xl font-bold text-gray-900">My Skills</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
          Here are the technologies I use to build <span className="font-bold text-black"> responsive</span> and 
          <span className="font-bold text-black"> interactive</span>
          websites.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, delay: skill.delay }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
