import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";

const images = [pic1, pic2, pic3];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Professional Master Painters",
    "High-Quality Materials",
    "On-time Project Completion",
    "Clean & Safe Work Environment"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-gray-100">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  alt="Samim Master Painter at work" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-50 rounded-full z-0 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/20 rounded-full z-0 blur-2xl"></div>
            
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-100">
              <div className="text-4xl font-black text-primary-600 mb-1">10+</div>
              <div className="text-sm text-gray-600 font-medium">Years of Excellence in Home Painting</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Don't Just Paint Walls, We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Masterpieces.</span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Samim Master Painter, we believe that colors define the mood of your home. With years of experience and a passion for perfection, our team delivers premium painting services that breathe new life into your spaces.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
            >
              Explore Our Services 
              <span className="w-8 h-[2px] bg-primary-600 block group-hover:w-12 transition-all"></span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
