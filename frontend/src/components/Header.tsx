import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollHeader } from '../hooks/useScrollHeader';
import { useScrollToSection } from '../hooks/useScrollSection';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isScrolled = useScrollHeader();
  const scrollToSection = useScrollToSection();

  const navLinks = [
    { label: 'Inicio', to: 'inicio', type: 'scroll' as const },
    { label: 'Quiénes Somos', to: 'quiénes-somos', type: 'scroll' as const },
    { label: 'Servicios', to: '/servicios', type: 'route' as const },
    { label: 'Información', to: '/informacion', type: 'route' as const },
    { label: 'Contacto', to: 'contacto', type: 'scroll' as const },
  ];

  const handleNavigation = (to: string, type: 'scroll' | 'route') => {
    scrollToSection(to, type);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed w-full shadow-md z-50"
      initial={{ height: 80 }}
      animate={{
        height: isScrolled ? 64 : 80,
        backgroundColor: isScrolled ? 'rgba(255, 231, 168, 0.95)' : '#ffe7a8',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div
            className="font-serif text-gray-800 md:h-15"
            animate={{
              fontSize: isScrolled ? '1.25rem' : '1.5rem',
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-auto ml-2 md:h-20 sm:h-16 h-14"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 font-bold mr-56 md:mr-32">
            {navLinks.map(({ label, to, type }) => (
              <motion.div
                key={label}
                animate={{
                  fontSize: isScrolled ? '0.9rem' : '1rem',
                  paddingTop: isScrolled ? '0.5rem' : '1rem',
                  paddingBottom: isScrolled ? '0.5rem' : '1rem',
                }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => handleNavigation(to, type)}
                  className="hover:text-gray-900 transition-colors text-[19px]"
                >
                  {label}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0 }} 
              animate={{ height: 'auto' }} 
              exit={{ height: 0 }}
              transition={{ duration: 0.5}}
            >
              <div className="border-t-[5px] border-gray-500 border-opacity-100 "></div>
              <nav className="flex flex-col bg-custom-yellow px-8 font-medium">
                <div className='my-5'>
                  {navLinks.map(({ label, to, type }) => (
                    <motion.div
                      key={label}
                      className="p-2 border-b-[1px] border-gray-400 border-opacity-10 bg-gray-400 bg-opacity-0 transition-all hover:bg-opacity-10"
                    >
                      <button
                        onClick={() => handleNavigation(to, type)}
                        className="text-[15px] text-gray-800 block w-full text-left py-1 px-3 transition-all hover:bg-[rgba(169, 169, 169, 0.2)]"
                      >
                        {label}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;