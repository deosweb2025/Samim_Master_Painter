import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "../assets/logos/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img src={logoImg} alt="Samim Master Painter Logo" className="h-10 md:h-14 w-auto object-contain bg-white/80 rounded-xl p-1 backdrop-blur-sm" />
              <span className={`text-xl md:text-2xl font-bold tracking-tighter ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                SAMIM <span className="text-accent">MASTER PAINTER</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-accent transition-colors ${
                  scrolled ? "text-gray-700" : "text-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919830707488"
              className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium hover:bg-yellow-500 transition-colors shadow-lg shadow-accent/20"
            >
              <Phone size={16} />
              <span>9830707488</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-accent hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919830707488"
                className="flex items-center justify-center gap-2 mt-4 bg-accent text-white px-5 py-3 rounded-xl font-medium w-full"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
