
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-portland-dark py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl md:text-3xl font-display">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1b67f968-c8b6-4133-a68d-1629c5e36295.png" 
                alt="FODAI Logo" 
                className="h-8 md:h-10 border-2 border-[#8A898C] rounded-md"
              />
              <div className="flex">
                <span className="text-portland-green">F</span>
                <span className="text-portland-pink ml-1">O</span>
                <span className="text-portland-orange ml-0.5">D</span>
                <span className="text-portland-blue ml-0.5">A</span>
                <span className="text-portland-purple ml-0.5">I</span>
              </div>
            </Link>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link to="/about" className="hover:text-portland-green transition-colors">about</Link>
          <Link to="/services" className="hover:text-portland-green transition-colors">services</Link>
          <Link to="/governance" className="hover:text-portland-green transition-colors">governance</Link>
          <Link to="/projects" className="hover:text-portland-green transition-colors">projects</Link>
          <Link to="/clients" className="hover:text-portland-green transition-colors">clients</Link>
          <Link to="/#contact" className="hover:text-portland-green transition-colors">contact</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-portland-dark text-white py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/about" className="hover:text-portland-green transition-colors">about</Link>
            <Link to="/services" className="hover:text-portland-green transition-colors">services</Link>
            <Link to="/governance" className="hover:text-portland-green transition-colors">governance</Link>
            <Link to="/projects" className="hover:text-portland-green transition-colors">projects</Link>
            <Link to="/clients" className="hover:text-portland-green transition-colors">clients</Link>
            <Link to="/#contact" className="hover:text-portland-green transition-colors">contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
