import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

//About.jsx

export const infoList = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/732/732212.png", // HTML Icon
      title: "HTML & CSS",
      description: "Building structured, accessible, and responsive web pages."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png", // JavaScript Icon
      title: "JavaScript",
      description: "Creating interactive, dynamic, and optimized web applications."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png", // React Icon
      title: "React.js",
      description: "Developing scalable and reusable UI components with React."
    }
];
  

// Skills

export const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" />, delay: 0.2 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, delay: 0.4 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, delay: 0.6 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, delay: 0.8 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, delay: 1.0 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, delay: 1.2 },
    { name: "Git", icon: <FaGitAlt className="text-red-600" />, delay: 1.4 },
    { name: "GitHub", icon: <FaGithub className="text-black" />, delay: 1.6 },
];
  

// services

export const serviceData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png", // Web Development Icon
      title: "Frontend Web Development",
      description: "Building modern, responsive, and interactive web applications using React.js, JavaScript, and TailwindCSS.",
      link: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135765.png", // Responsive Design Icon
      title: "Responsive Web Design",
      description: "Ensuring websites look great on all screen sizes using HTML, CSS, Bootstrap, and TailwindCSS.",
      link: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/919/919851.png", // React Icon
      title: "React.js Development",
      description: "Developing dynamic and reusable component-based web applications with React.js.",
      link: "#"
    },
    // {
    //   icon: "https://cdn-icons-png.flaticon.com/128/3208/3208676.png", // UI/UX Icon
    //   title: "UI/UX Implementation",
    //   description: "Designing intuitive, user-friendly interfaces with a focus on seamless user experience.",
    //   link: "#"
    // },
    // {
    //   icon: "https://cdn-icons-png.flaticon.com/128/5648/5648510.png", // Performance Icon
    //   title: "Website Performance Optimization",
    //   description: "Optimizing websites for fast loading times and better performance.",
    //   link: "#"
    // },
    // {
    //   icon: "https://cdn-icons-png.flaticon.com/128/609/609803.png", // SPA Icon
    //   title: "Single Page Applications (SPA)",
    //   description: "Creating fast, seamless SPAs using React.js for smooth navigation and enhanced performance.",
    //   link: "#"
    // }
];
  
// My Projects

export const projects = [
    {
      title: "Contact Manager",
      description: "Built a responsive CRUD application using React.js with state management, implementing form validation and local storage persistence.",
      tech: ["React", "Tailwind CSS", "React Icons", "Formik"],
      link: "https://contact-manager-sbiv.vercel.app/",
      github: "https://github.com/SureshYarlanki/contact-manager"
    },
    {
      title: "Modern Restaurant Website",
      description: "Developed a mobile-first restaurant website with animated components and responsive menu using Bootstrap 5.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      github: "https://github.com/SureshYarlanki/delicious-restaurant"
    },
    // {
    //   title: "Task Management Dashboard",
    //   description: "Created an interactive todo list with drag-and-drop functionality using React Beautiful DnD and local storage.",
    //   tech: ["React", "Tailwind", "Framer Motion", "React DnD"],
    //   link: "#",
    //   github: "#"
    // }
];
  
//Blogs

export const blogPosts = [
    {
      title: "My Journey into Frontend Development",
    //   date: "February 2024",
      description: "How I started learning frontend development, the challenges I faced, and how I built my first projects.",
      link: "#",
      image: "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=600&h=400&fit=crop" // Developer working on code
    },
    {
      title: "Why I Chose React for My Projects",
    //   date: "April 2024",
      description: "A deep dive into why React is my go-to framework for building modern and scalable web applications.",
      link: "#",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop" // React & web development
    },
    {
      title: "Building a Responsive Website with TailwindCSS",
    //   date:"" 2024",
      description: "Exploring how TailwindCSS makes web development faster and more efficient with utility-first CSS.",
      link: "#",
      image: "/tailwind.webp" // TailwindCSS & UI design
    }
];
  
//testimonial

export const testimonialsData = [
    {
      name: "John Doe",
      feedback: "Suresh is an excellent frontend developer! His React and TailwindCSS skills are top-notch.",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Working with Suresh was a great experience. He is very dedicated and delivers quality work.",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    }
];
  

export const profileImage = "https://files.oaiusercontent.com/file-7cUFBjtGUVeBzDvayJ3E5i?se=2025-02-24T11%3A46%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De71c3c5e-065d-45a3-a0e5-9bd4e56902bb.webp&sig=KEun43BbxtYetkdzOH8sg8sKZBUnqfXgbRMc4TLIo8U%3D"; // Replace with actual profile image URL
export const handIcon = "data:image/png;base64,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"; // Replace with actual profile image URL
