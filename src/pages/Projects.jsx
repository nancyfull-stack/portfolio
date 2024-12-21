import React from 'react';
import { motion } from 'framer-motion'; // For animations

function Projects() {
  // Example project data (replace with your real projects)
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One. It includes some awesome features.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://github.com/yourusername/project-one",  // Replace with your project link
      image: "https://via.placeholder.com/400", // Replace with project image URL
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two. It includes some great functionality.",
      technologies: ["JavaScript", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project-two",  // Replace with your project link
      image: "https://via.placeholder.com/400", // Replace with project image URL
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three. It's a full-stack application.",
      technologies: ["Vue", "Firebase", "Tailwind CSS"],
      link: "https://github.com/yourusername/project-three",  // Replace with your project link
      image: "https://via.placeholder.com/400", // Replace with project image URL
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Technologies: {project.technologies.join(', ')}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
