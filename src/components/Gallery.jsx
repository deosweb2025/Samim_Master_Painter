import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";

import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import pic4 from "../assets/images/pic4.jpeg";
import pic5 from "../assets/images/pic5.jpeg";
import pic6 from "../assets/images/pic6.jpeg";
import pic7 from "../assets/images/pic7.jpeg";
import pic8 from "../assets/images/pic8.jpeg";
import pic9 from "../assets/images/pic9.jpeg";
import pic10 from "../assets/images/pic10.jpeg";
import pic11 from "../assets/images/pic11.jpeg";
import pic12 from "../assets/images/pic12.jpeg";
import pic13 from "../assets/images/pic13.jpeg";
import pic14 from "../assets/images/pic14.jpeg";
import pic15 from "../assets/images/pic15.jpeg";

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, 
  pic9, pic10, pic11, pic12, pic13, pic14, pic15
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(images.length);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    // Optionally scroll back up to the gallery section
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A Glimpse of Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Recent Work</span>
            </h3>
          </div>
          <p className="text-lg text-gray-600 max-w-md">
            Browse through our gallery to see the quality and precision we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {images.slice(0, visibleCount).map((img, idx) => (
              <motion.div
                key={img} // Use img src as key to help with animation consistency
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Gallery work ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Buttons */}
        <div className="mt-12 flex justify-center">
          {visibleCount < images.length ? (
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-primary-50 text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-100 transition-all flex items-center justify-center gap-2 group"
            >
              Load More
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-8 py-4 bg-gray-50 text-gray-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
            >
              Show Less
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
