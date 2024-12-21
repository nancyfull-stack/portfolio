import React from 'react';
import { motion } from 'framer-motion'; // For animations

function About() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center text-white">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Profile Section */}
        <motion.div
          className="flex justify-center items-center mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="src/assets/profile picture.jpeg"  // Replace with your profile picture
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-gray-300"
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.p
          className="text-md text-white-700 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hello! I'm Soni Prajapati, a passionate web developer with a keen interest in creating dynamic and responsive websites. I specialize in building applications using modern JavaScript frameworks like React and backend technologies like Node.js. I am always eager to learn new technologies and improve my skills.
        </motion.p>

        {/* Skills Section */}
        <motion.h2
          className="text-xl font-semibold text-white-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Skills
        </motion.h2>
        
        <motion.div
          className="flex justify-center gap-4 flex-wrap mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="text-white-700 font-semibold">React</span>
          <span className="text-white-700 font-semibold">JavaScript</span>
          <span className="text-white-700 font-semibold">Node.js</span>
          <span className="text-white-700 font-semibold">Tailwind CSS</span>
          <span className="text-white-700 font-semibold">HTML & CSS</span>
          <span className="text-white-700 font-semibold">MongoDB</span>
        </motion.div>

        {/* Education Section (Optional) */}
        <motion.h2
          className="text-xl font-semibold text-white-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Education
        </motion.h2>
        
        <motion.p
          className="text-md text-white-700 mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Bachelor of Computer Science (B.Sc-CS) - Mumbai University (2017-2019)
        </motion.p>

        {/* Experience Section (Optional) */}
        <motion.h2
          className="text-xl font-semibold text-white-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.p
          className="text-md text-white-600 mb-6 max-w-3xl mx-auto"
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
