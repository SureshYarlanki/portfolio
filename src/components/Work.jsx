import React from "react";
import { motion } from "framer-motion";
import { projects } from "../util/data";



const MyProjects = () => {
  return (
    <div id="MyWork" className="w-full px-[12%] py-16 font-Ovo scroll-mt-20">
      {/* Section Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <h4 className="mb-2 text-lg text-gray-700">My Portfolio</h4> */}
        <h2 className="text-5xl font-bold text-gray-900">My Latest Projects</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
          Explore my frontend development projects showcasing clean code practices,
          responsive design implementations, and modern web development techniques.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100 w-[350px] bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            viewport={{ once: true }}
          >
            {/* Project Content */}
            <div className="p-6 text-center">
              <h2 className="font-semibold text-xl text-gray-800 mb-3">{project.title}</h2>
              <p className="text-gray-600 text-sm min-h-[80px]">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 justify-center mt-6">
                {project.link && (
                  <motion.a
                    href={project.link}
                    className="inline-block px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                )}

                <motion.a
                  href={project.github}
                  className="inline-block px-5 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  GitHub
                </motion.a>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Want to See More?
        </h3>
        <motion.a
          href="https://github.com/SureshYarlanki"
          className="inline-block px-8 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
        >
          Visit My GitHub Profile
        </motion.a>
      </motion.div>
    </div>
  );
};

export default MyProjects;
