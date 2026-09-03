import logoImg from "../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <a href="#" className="mb-6 flex items-center gap-3">
              <img src={logoImg} alt="Samim Master Painter Logo" className="h-16 w-auto object-contain bg-white/10 rounded-xl p-2" />
              <span className="text-3xl font-bold tracking-tighter text-white">
                SAMIM <span className="text-accent">MASTER PAINTER</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-lg mb-6 leading-relaxed">
              Transforming spaces with master craftsmanship. We are Kolkata's premier choice for residential and commercial painting. 
              With over 10 years of excellence, we specialize in interior and exterior painting, decorative textures, wall putty, wood polishing, and waterproofing. 
              Our commitment is to deliver flawless finishes, on-time project completion, and complete customer satisfaction. Let us bring color to your life.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Mobile: +91 9830707488</li>
              <li>Email: sa1389933@gmail.com</li>
              <li>Address: 222 Block A, Near Axis Mall, North 24 Parganas, WB 700156</li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-center text-sm text-gray-500 w-full">
          <p>
            Design and develop by 
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
