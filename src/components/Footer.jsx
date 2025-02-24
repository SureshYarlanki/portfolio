import React from 'react';

// Online Icons
const emailIcon = "https://cdn-icons-png.flaticon.com/128/732/732200.png"; // Email icon
const githubIcon = "https://cdn-icons-png.flaticon.com/128/2111/2111432.png"; // GitHub icon
const linkedinIcon = "https://cdn-icons-png.flaticon.com/128/145/145807.png"; // LinkedIn icon

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <h1 className="flex items-center justify-center text-3xl font-bold font-Ovo mb-3">
          Suresh <span className="w-2 h-2 mt-2 ml-1 rounded-full bg-orange-500"></span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <img src={emailIcon} alt="Email" className="w-4" />
          <span>sureshyarlanki83@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 mx-[10%] mt-10 pt-6 text-gray-600 text-sm mb-4">
        <p>© 2025 Yarlanki Suresh. All rights reserved.</p>
        <ul className="flex items-center gap-6 mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/SureshYarlanki" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-5 inline-block mr-1" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yarlanki-suresh-aa0296255/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 inline-block mr-1" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
