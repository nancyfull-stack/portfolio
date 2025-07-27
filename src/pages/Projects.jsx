import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Search as you type: Filters out pokemons even in cases of typos using fuzzy-search, Keyboard Accessibility: Press / to quickly focus on the search bar., Shuffle Pokémon: Randomizes Pokémon on every page load using array-shuffle., Bootstrap Components: Built with Bootstrap (because it’s still alive and kicking, lol).",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://github.com/SoniSPprajapati/pokyman",
      image: "https://tse1.mm.bing.net/th?id=OIP.YyqFGve6yDo2qQLxjV1GigHaEy&pid=Api&P=0&h=180",
    },
    {
      title: "Project Two",
      description: "Contact form inspired by the Untitled UI submits to Google Forms, [1] Add controlled input elements [2] React Hook Form [3] Validation [4] Routing: react-router-dom.",
      technologies: ["JavaScript", "Express", "MongoDB"],
      link: "https://github.com/nancyfull-stack/Untitled-UI-Contact-Form-1",
      image: "https://cdn.dribbble.com/userupload/4103465/file/original-16252a20bdb14427e9d60e686802095f.jpg?compress=1&resize=1504x1128",
    },
    {
      title: "Project Three",
      description: "Highly Reusable Accordion Component.",
      technologies: ["Vue", "Firebase", "Tailwind CSS"],
      link: "https://brandoni.netlify.app/",
      image: "https://i.ytimg.com/vi/SQWMFFhBSaE/maxresdefault.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center py-12 px-4 text-white">
      <motion.div
        className="container max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-white mb-12">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h2>
                <p className="text-gray-700 flex-grow mb-4 text-sm">{project.description}</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">
                  <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
