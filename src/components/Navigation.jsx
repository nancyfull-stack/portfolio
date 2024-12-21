
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex justify-between items-center p-3 bg-blue-500 text-white fixed top-0 left-0 right-0 z-10">
      {/* Logo on the left */}
      <div className="text-2xl font-bold">
        <Link to="/">My Portfolio</Link>
      </div>

      {/* Navigation Links on the right */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
