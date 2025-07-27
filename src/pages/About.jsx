import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center px-4 py-20">
      <motion.div
        className="max-w-4xl w-full text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-base md:text-lg text-white mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hello! I'm Soni Prajapati, a passionate web developer with a keen interest in creating dynamic and responsive websites. I specialize in building applications using modern JavaScript frameworks like React and backend technologies like Node.js. I am always eager to learn new technologies and improve my skills.
        </motion.p>

        {/* Skills */}
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {["React", "JavaScript", "Node.js", "Tailwind CSS", "HTML & CSS", "MongoDB"].map((skill) => (
            <span
              key={skill}
              className="bg-white bg-opacity-20 rounded-full px-4 py-2 font-semibold text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Education */}
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Education
        </motion.h2>

        <motion.p
          className="text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Bachelor of Computer Science (B.Sc-CS) - Mumbai University (2017-2019)
        </motion.p>

        {/* Work Experience */}
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.p
          className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          Amazon Seller Account Manager at Sunrise Luxury Company: E-Commerce (2022-Present)
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
