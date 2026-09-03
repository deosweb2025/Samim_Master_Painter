import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Located in the Heart of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Kolkata</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              Visit our office to discuss your project requirements or simply drop a message. We are always ready to help you bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    222 BLOCK A NEAR AXIS MALL<br/>
                    (LANDMARK: 16 NO WATER TANK)<br/>
                    North 24 Parganas, West Bengal, 700156
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/qfwxFaEJdwmf6cPc7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] relative border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.636006422312!2d88.4552097!3d22.5731307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275323a675b5b%3A0xc48c0379eaee903a!2sAxis%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
