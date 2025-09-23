import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-green-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-black" />
            </div>
    
            <div>
              <h1 className="text-xl font-bold text-white">REVA IDC</h1>
              <p className="text-xs text-green-400">CHAPTER</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Team', 'Events', 'Hackathons', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-green-400/20">
            {['Home', 'About', 'Team', 'Events', 'Hackathons', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;