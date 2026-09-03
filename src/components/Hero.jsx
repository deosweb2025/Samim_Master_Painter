import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import hero1 from "../assets/images/hero image 1.png";
import hero2 from "../assets/images/hero image 2.png";
import hero3 from "../assets/images/hero image 3.png";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] w-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="Painting Work"
        />
      </AnimatePresence>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium tracking-wider uppercase">Premium Painting Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Transforming Spaces With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">Master Craftsmanship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Samim Master Painter offers top-tier home painting services. We bring colors to life, ensuring flawless finishes that elevate your home's aesthetics and value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
