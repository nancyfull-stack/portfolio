import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile picture.jpeg'; // Replace with your profile picture

function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center text-white">
      <div className="text-center">
        {/* Profile Picture with animation */}
        <motion.img 
          src={profilePic}
          alt="Soni Prajapati"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white transition-all duration-300 hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Intro Text with animation */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Running Text with animation */}
        <motion.p
          className="text-lg font-light"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 5 }}
        >
          I am a passionate web developer, creating amazing websites and applications.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
