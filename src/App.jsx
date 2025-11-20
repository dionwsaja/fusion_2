import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import WorkflowCarousel from "./components/WorkflowCarousel";
import Value from "./components/Value";
import ServiceSection from "./sections/ServiceSection";
import FAQsection from "./components/FAQsection";
import Products from "./sections/Products";
import Contact from "./sections/Contact";
import Animation2 from "./components/Animation2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkflowCarousel />
      <Value />
      <ServiceSection />
      <FAQsection />
      <Products />
      <Animation2 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
