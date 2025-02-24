import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [showHidden, setShowHidden] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const handleMobileView = () => {
        setShowHidden((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar Background Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="fixed top-0 right-0 -z-10 translate-y-[-80%]"
            >
                <img src="/header-bg-color.png" alt="" className="w-full" />
            </motion.div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`fixed mx-auto border-b w-full flex justify-between items-center py-4 z-50 md:px-15 px-8 transition duration-300 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-md" : "bg-transparent"
                    }`}
            >
                {/* Logo */}
                <a href="/" className="font-Ovo flex gap-1 items-center">
                    <h1 className="text-3xl font-bold">Suresh</h1>
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-3"></div>
                </a>

                {/* Desktop Menu */}
                <ul
                    className={`hidden md:flex gap-5 font-Ovo text-black px-6 py-3 rounded-full transition ${isScroll ? "" : "bg-opacity-50 bg-white shadow-sm"
                        }`}
                >
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#AboutMe">About Me</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Service">Service</a></li>
                    <li><a href="#MyWork">My Projects</a></li>
                    <li><a href="#ContactMe">Contact Me</a></li>
                </ul>

                {/* Icons & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Contact Button */}
                    <a
                        href="mailto:sureshyarlanki83@gmail.com?subject=Hello Suresh&body=Hi, I would like to connect with you!"
                        className="hidden font-Ovo md:flex px-8 py-2 rounded-full border border-gray-500 gap-3 items-center hover:bg-gray-200 transition"
                    >
                        Contact  <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" className="w-5 h-5" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button onClick={handleMobileView} className="block md:hidden">
                        <CiMenuFries className="w-9 h-7 text-black " strokeWidth={2} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {showHidden && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                        onClick={handleMobileView}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end"
                    >
                        <motion.ul
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-4 py-20 px-10 bg-white w-64 sm:w-96 h-full shadow-lg"
                        >

                            {/* Close Button */}
                            <button className="absolute top-6 right-8">
                                <IoMdClose className="w-6 h-6" />
                            </button>

                            <li><a href="#Home">Home</a></li>
                            <li><a href="#AboutMe">About Me</a></li>
                            <li><a href="#Service">Service</a></li>
                            <li><a href="#MyWork">My Work</a></li>
                            <li><a href="#ContactMe">Contact Me</a></li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
