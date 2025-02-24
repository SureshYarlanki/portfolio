import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../util/data";



const Testimonials = () => {
  return (
    <section id="Testimonials" className="w-full px-[12%] py-20 text-center ">
      <div>
        <h4 className="text-lg text-gray-700">What People Say</h4>
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 border border-gray-300"
              />
              {/* Feedback */}
              <p className="italic text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
