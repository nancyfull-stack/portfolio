import React from 'react';
import { FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-6 sm:mb-8 font-semibold">Connect with me:</p>
        
        <div className="flex justify-center gap-8 mb-6 sm:mb-8 text-3xl">
          {/* Email Icon */}
          <a
            href="mailto:your-email@example.com"  // Replace with your email
            className="hover:text-purple-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/yourphonenumber"  // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          
          {/* Twitter Icon */}
          <a
            href="https://twitter.com/yourusername"  // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/yourusername"  // Replace with your Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Soni Prajapati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
