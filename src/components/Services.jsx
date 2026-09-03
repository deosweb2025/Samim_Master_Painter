import { motion } from "framer-motion";
import { Paintbrush, Home, Droplets, Sparkles, Layers, Umbrella, Palette, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Interior Painting",
      description: "Transform your living spaces with our premium interior painting. We ensure smooth finishes and vibrant colors.",
      icon: <Home size={32} />,
      color: "bg-blue-50 text-blue-600",
      hex: "#2563eb"
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with weather-resistant paints that stand the test of time.",
      icon: <Paintbrush size={32} />,
      color: "bg-accent/10 text-accent",
      hex: "#f59e0b"
    },
    {
      title: "Texture Painting",
      description: "Add depth and character to your walls with our specialized texture and pattern painting techniques.",
      icon: <Droplets size={32} />,
      color: "bg-green-50 text-green-600",
      hex: "#16a34a"
    },
    {
      title: "Wood & Metal Polish",
      description: "Restore the shine of your wooden furniture and metal fixtures with our professional polishing services.",
      icon: <Sparkles size={32} />,
      color: "bg-purple-50 text-purple-600",
      hex: "#9333ea"
    },
    {
      title: "Wall Putty & Primer",
      description: "Ensure a flawless, smooth base for your walls to increase the longevity and vibrancy of the paint.",
      icon: <Layers size={32} />,
      color: "bg-indigo-50 text-indigo-600",
      hex: "#4f46e5"
    },
    {
      title: "Waterproofing Solutions",
      description: "Protect your home from moisture, leaks, and dampness with our advanced waterproofing treatments.",
      icon: <Umbrella size={32} />,
      color: "bg-cyan-50 text-cyan-600",
      hex: "#0891b2"
    },
    {
      title: "Stencil Painting",
      description: "Personalize your space with custom, creative stencil designs that turn walls into unique artwork.",
      icon: <Palette size={32} />,
      color: "bg-pink-50 text-pink-600",
      hex: "#db2777"
    },
    {
      title: "Commercial Painting",
      description: "Professional, large-scale painting services for offices, shops, and other commercial properties.",
      icon: <Building2 size={32} />,
      color: "bg-orange-50 text-orange-600",
      hex: "#ea580c"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            What We Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Premium Services for Your Home
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We provide a comprehensive range of painting services tailored to meet your specific needs and exceed your expectations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="relative group hover:-translate-y-2 transition-transform duration-300 rounded-3xl p-[2px] overflow-hidden bg-transparent"
            >
              {/* Rotating snake/radar border effect */}
              <div 
                className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{ 
                  background: `conic-gradient(from 0deg, transparent 70%, ${service.hex} 100%)`
                }}
              />
              
              {/* Subtle persistent border fallback when not hovering */}
              <div className="absolute inset-0 rounded-3xl border border-gray-100 group-hover:border-transparent transition-colors duration-300 z-0"></div>

              {/* Inner card content */}
              <div className="relative z-10 bg-white rounded-[calc(1.5rem-2px)] p-8 h-full shadow-lg shadow-gray-200/50">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
