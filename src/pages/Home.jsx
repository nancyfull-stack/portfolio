import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile picture.jpeg'; 

function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center px-4 text-white">
      <div className="text-center max-w-lg">
        {/* Profile Picture with animation */}
        <motion.img
          src={profilePic}
          alt="Soni Prajapati"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Intro Text with animation */}
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <p className="text-2xl font-semibold mb-6">Hi, I am Soni here</p>

        {/* Running Text with animation */}
        <motion.p
          className="text-lg font-light whitespace-nowrap overflow-hidden"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 10, ease: 'linear' }}
        >
          I am a passionate web developer, creating amazing websites and applications.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
