import React from 'react';
import { serviceData } from '../util/data';

const Services = () => {
    return (
        <div id='Service' className="w-full px-[12%] py-16 font-Ovo scroll-mt-20">
            <div className="text-center">
                <h4 className="mb-2 text-lg text-gray-700">What I Offer</h4>
                <h2 className="text-5xl font-bold text-gray-900">My Services</h2>
                <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
                    As a <span className="font-semibold">frontend developer</span>, I specialize in building{" "}
                    <span className="font-semibold">responsive, fast, and user-friendly</span> websites using
                    <span className="font-semibold"> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I love creating
                    clean and modern web experiences that provide a <span className="font-semibold">smooth user experience</span>.
                </p>
            </div>

            {/* Services List */}
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-6">
                    {serviceData.map(({ icon, title, description, link }, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-8 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center w-[300px]"
                        >
                            <img src={icon} alt={title} className="w-14 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                            <p className="text-sm text-gray-600 leading-6">{description}</p>
                            <a href={link} className="flex items-center justify-center gap-2 text-sm text-blue-600 mt-5 hover:underline">
                                Read more <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Arrow" className="w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
