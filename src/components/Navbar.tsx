
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cream-500/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        <a href="/" className="flex items-center">
          <span className="font-heading text-primary-500 text-xl md:text-2xl font-bold">RCT Workshop</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary-500" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary-500 transition-colors">About</a>
          <a href="#details" className="text-foreground hover:text-primary-500 transition-colors">Workshop Details</a>
          <a href="#speakers" className="text-foreground hover:text-primary-500 transition-colors">Speakers</a>
          <Button asChild className="bg-primary-500 hover:bg-primary-600">
            <a href="#register">Register Now</a>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-cream-500 border-t border-accent-200 py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#details" 
                className="text-foreground hover:text-primary-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Workshop Details
              </a>
              <a 
                href="#speakers" 
                className="text-foreground hover:text-primary-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Speakers
              </a>
              <Button asChild className="bg-primary-500 hover:bg-primary-600 w-full">
                <a href="#register" onClick={toggleMenu}>Register Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
