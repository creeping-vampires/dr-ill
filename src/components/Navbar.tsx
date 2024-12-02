import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Purchase', 'Chart', 'Twitter', 'Telegram'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#FFFEFA] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center space-x-4">
            <div className="float-animation">
              <Brain className="h-14 w-14 text-primary" />
            </div>
            <span className="text-4xl font-bold text-primary">$DrILL</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl text-gray-800 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-2xl text-gray-800 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;