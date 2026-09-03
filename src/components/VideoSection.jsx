import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import videoFile from "../assets/videos/videos1.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.3 }); // Trigger when 30% visible

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-gray-900 to-gray-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm mb-3"
          >
            See Us In Action
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Experience The Process
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent/10 border border-white/10 aspect-video max-w-5xl mx-auto"
        >
          <video 
            ref={videoRef}
            src={videoFile} 
            controls 
            muted // Required for autoplay to work in browsers
            loop
            playsInline
            className="w-full h-full object-cover bg-black"
            poster="../assets/images/pic14.jpeg"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
      </div>
    </section>
  );
};

export default VideoSection;
