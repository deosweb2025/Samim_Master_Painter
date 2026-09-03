import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

const Home = () => {
  return (
    <div className="relative overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <VideoSection />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
