import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../util/data";



const Blog = () => {
  return (
    <div id="Blog" className="w-full px-[12%] py-16 font-Ovo">
      {/* Section Header */}
      <div className="text-center">
        <h4 className="mb-2 text-lg text-gray-700">Insights & Experiences</h4>
        <h2 className="text-5xl font-bold text-gray-900">My Blog</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
          Sharing my thoughts, experiences, and lessons learned as I grow as a frontend developer.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 duration-500 bg-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Blog Image */}
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.description}</p>
              <a
                href={post.link}
                className="inline-block mt-4 px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
