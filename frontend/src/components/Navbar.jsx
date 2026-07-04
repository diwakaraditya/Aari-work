import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-secondary bg-primary/10 group-hover:bg-primary/20 dark:bg-secondary/15 transition-colors">
              <Sparkles className="w-5 h-5 text-primary dark:text-secondary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-primary dark:text-secondary leading-none">
                Aari Aaradhya
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-muted-light dark:text-muted-dark leading-none mt-1">
                Maggam & Embroidery Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative py-2 text-sm font-medium tracking-wide uppercase group text-text-light dark:text-text-dark"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? 'text-primary dark:text-secondary font-semibold'
                        : 'group-hover:text-primary dark:group-hover:text-secondary'
                    }`}
                  >
                    {link.name}
                  </span>
                  
                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Btn */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDark}
              className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden glass-effect border-t border-primary/5 dark:border-secondary/5 mt-3 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white dark:bg-secondary dark:text-bg-dark font-semibold'
                        : 'text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
