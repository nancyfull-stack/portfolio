import React from 'react';
import { FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6 mb-4">
          {/* Email Icon */}
          <a
            href="mailto:your-email@example.com"  // Replace with your email
            className="text-2xl hover:text-purple-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/yourphonenumber"  // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          
          {/* Twitter Icon */}
          <a
            href="https://twitter.com/yourusername"  // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/yourusername"  // Replace with your Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Soni Prajapati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
