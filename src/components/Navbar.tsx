
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <Shield className="w-8 h-8 text-purple transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold text-gradient">TruthGuard</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-purple transition-colors duration-300">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-purple transition-colors duration-300">How It Works</a>
          <a href="#about" className="text-foreground/80 hover:text-purple transition-colors duration-300">About</a>
        </nav>

        <a href="#scanner" className="btn-primary hidden md:block">
          Scan URL
        </a>

        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
