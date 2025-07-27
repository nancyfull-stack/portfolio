function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <a href="#home">My Portfolio</a>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-base font-medium">
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
      </div>
    </nav>
  );
}

export default Navigation;
