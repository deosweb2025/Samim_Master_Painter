import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to transform your home?
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              Contact us today for a free consultation and estimate. Let's discuss how we can bring color and life to your spaces.
            </p>

            <div className="space-y-6">
              <a href="tel:+919830707488" className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Call Us</div>
                  <div className="text-2xl font-bold text-gray-900">+91 9830707488</div>
                </div>
              </a>

              <a href="mailto:sa1389933@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Email Us</div>
                  <div className="text-xl font-bold text-gray-900 break-all">sa1389933@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8 relative z-10">Request a Call Back</h4>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Required</label>
                <select 
                  id="service" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                >
                  <option value="" className="text-gray-900">Select a Service</option>
                  <option value="interior" className="text-gray-900">Interior Painting</option>
                  <option value="exterior" className="text-gray-900">Exterior Painting</option>
                  <option value="texture" className="text-gray-900">Texture Painting</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent text-white font-bold text-lg rounded-xl px-4 py-4 hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Send Request
                <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
