import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50 bg-transparent">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/"
            className="text-2xl font-bold text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Evoquee Studios
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            <NavLinks />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <NavLinks mobile />
          </motion.div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseClasses = `
    text-black text-base 
    cursor-pointer 
    transition-all duration-300 
    rounded-lg px-4 py-2
    hover:bg-blue-900 hover:text-white
  `;
  const mobileClasses = mobile ? "block w-full text-center" : "";

  return (
    <div className={mobile ? "flex flex-col gap-2" : "flex items-center gap-10"}>
      <a href="#work" className={`${baseClasses} ${mobileClasses}`}>Work</a>
      <a href="#about" className={`${baseClasses} ${mobileClasses}`}>About Me</a>
      <a href="#contact" className={`${baseClasses} ${mobileClasses}`}>Contact</a>
    </div>
  );
}
