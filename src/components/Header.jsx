import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { handIcon } from "../util/data";

const Header = () => {
    
    return (
        <div
            id="Home"
            className="w-11/12 max-w-3xl flex flex-col justify-center items-center gap-6 text-center mx-auto h-screen leading-8"
        >
            {/* Profile Image with Animation */}
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-24 xs:w-28 sm:w-32 rounded-full mt-24 xs:mt-28 md:mt-0"
                src="/headerprofile.webp"
                alt="Profile"
            />

            {/* Name and Hand Wave */}
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-2 text-lg xs:text-xl md:text-2xl font-Ovo"
            >
                Hi, I'm Yarlanki Suresh
                <motion.img
                    src={handIcon}
                    alt="Hand Wave"
                    className="w-5 xs:w-6"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </motion.h3>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-2xl xs:text-3xl sm:text-5xl lg:text-[66px] font-Ovo"
            >
                Frontend Web Developer
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="max-w-2xl mx-auto font-Ovo text-gray-700 text-sm xs:text-base"
            >
                A passionate frontend developer skilled in HTML, CSS, JavaScript, React,
                and TailwindCSS. I enjoy building interactive, user-friendly, and
                high-performance web applications. Always eager to learn and innovate
                in the field of web development.
            </motion.p>

            {/* Call to Action Buttons */}

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-6"
            >
                {/* Contact Me Button */}
                <a
                    href="mailto:sureshyarlanki83@gmail.com?subject=Hello Suresh&body=Hi, I would like to connect with you!"
                    className="px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-md"
                >
                    Contact Me <span><FaArrowRight /> </span>
                </a>

                {/* Download Resume Button */}
                <a
                    href="/Yarlanki suresh.pdf"
                    download
                    className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:border-gray-700 transition-all shadow-md"
                >
                    My Resume  <span className="text-2xl"><GoDownload /></span>
                </a>
            </motion.div>
        </div>
    );
};

export default Header;








