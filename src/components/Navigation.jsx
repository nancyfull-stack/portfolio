function Navigation() {
  return (
    <nav className="flex justify-between items-center p-2 bg-blue-500 text-white fixed top-0 left-0 right-0 z-10">
      {/* Logo on the left */}
      <div className="text-2xl font-bold">
        <a href="#home">My Portfolio</a> {/* Scrolls to #home section */}
      </div>

      {/* Navigation Links on the right */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-yellow-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
