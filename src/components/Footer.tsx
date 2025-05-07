
import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-portland-dark text-white py-12 border-t border-white/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1b67f968-c8b6-4133-a68d-1629c5e36295.png" 
                alt="FODAI Logo" 
                className="h-8 md:h-10 border-2 border-[#8A898C] rounded-md"
              />
              <h2 className="font-display text-3xl">
                <span className="text-portland-green">F</span>
                <span className="text-portland-pink ml-1">O</span>
                <span className="text-portland-orange ml-0.5">D</span>
                <span className="text-portland-blue ml-0.5">A</span>
                <span className="text-portland-purple ml-0.5">I</span>
              </h2>
            </Link>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="http://x.com/freeopsdao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portland-green transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://t.me/freeopsdao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portland-green transition-colors">
              <span className="sr-only">Telegram</span>
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <Link to="/about" className="text-portland-green hover:underline">about</Link>
          </div>
          <div>
            <Link to="/services" className="text-portland-green hover:underline">services</Link>
          </div>
          <div>
            <Link to="/governance" className="text-portland-green hover:underline">governance</Link>
          </div>
          <div>
            <Link to="/projects" className="text-portland-green hover:underline">projects</Link>
          </div>
          <div>
            <Link to="/clients" className="text-portland-green hover:underline">clients</Link>
          </div>
          <div>
            <Link to="/#contact" className="text-portland-green hover:underline">contact</Link>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-center">
          <p>2025 CC-BY-SA</p>
        </div>
      </div>
    </footer>
  );
}
