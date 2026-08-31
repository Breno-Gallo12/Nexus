// src/components/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navLinks = [
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Projetos', href: '/#projetos' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary tracking-tighter">
              NEXUS
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-textSec hover:text-primary transition-colors duration-200 font-semibold text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Divisor */}
            <div className="h-6 w-px bg-border"></div>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Breno-Gallo12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-textSec hover:text-textMain transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/breno-gallo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-textSec hover:text-primary transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Botão Menu Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textSec hover:text-textMain focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-textSec hover:text-primary hover:bg-background transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-4 mt-2 border-t border-border">
              <a href="https://github.com" className="text-textSec hover:text-textMain">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-textSec hover:text-primary">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}