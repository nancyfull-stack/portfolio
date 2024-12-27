import React from 'react';
import { motion } from 'framer-motion'; // For animations

function Projects() {
  // Example project data (replace with your real projects)
  const projects = [
    {
      title: "Project One",
      description: "Search as you type: Filters out pokemons even in cases of typos using fuzzy-search, Keyboard Accessibility: Press / to quickly focus on the search bar., Shuffle Pokémon: Randomizes Pokémon on every page load using array-shuffle., Bootstrap Components: Built with Bootstrap (because it’s still alive and kicking, lol).",
      technologies: ["html", "CSS", "Javascript", "Node.js"],
      link: "https://github.com/SoniSPprajapati/pokyman",  // Replace with your project link
      image: "https://tse1.mm.bing.net/th?id=OIP.YyqFGve6yDo2qQLxjV1GigHaEy&pid=Api&P=0&h=180", // Replace with project image URL
    },
    {
      title: "Project Two",
      description: "Contact form inspired by the Untitled UI submits to Google Forms, [1] Add controlled input elements [2] React Hook Form [3] Validation [4] Routing: react-router-dom.",
      technologies: ["JavaScript", "Express", "MongoDB"],
      link: "https://github.com/nancyfull-stack/Untitled-UI-Contact-Form-1",  // Replace with your project link
      image: "https://cdn.dribbble.com/userupload/4103465/file/original-16252a20bdb14427e9d60e686802095f.jpg?compress=1&resize=1504x1128", // Replace with project image URL
    },
    {
      title: "Project Three",
      description: "Highly Reusable Accordion Component.",
      technologies: ["Vue", "Firebase", "Tailwind CSS"],
      link: "brandoni.netlify.app/",  // Replace with your project link
      image: "https://i.ytimg.com/vi/SQWMFFhBSaE/maxresdefault.jpg", // Replace with project image URL
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center text-white">
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
