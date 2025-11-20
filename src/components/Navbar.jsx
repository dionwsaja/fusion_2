import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo/fusion_2.png";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        controls.start({
          rotate: -90,
          transition: { duration: 0.25, ease: "easeInOut" },
        });
      }, 300);
      return () => clearTimeout(timer);
    } else {
      controls.start({ rotate: 0, transition: { duration: 0.2 } });
    }
  }, [isOpen, controls]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "service", "products", "contact"];

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // styling helper
  const navStyle = (section) =>
    activeSection === section
      ? "text-primary underline underline-offset-4 decoration-2"
      : "text-black";

  return (
    <section
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center py-4 px-4">
        <a href="/">
          <img src={logo1} alt="logo_white" className="w-48" />
        </a>

        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center gap-x-4">
              <a href="#home" className={navStyle("home")}>
                Home
              </a>
              <a href="#about" className={navStyle("about")}>
                About Us
              </a>
              <a href="#service" className={navStyle("service")}>
                Services
              </a>
              <a href="#products" className={navStyle("products")}>
                Products
              </a>
            </div>

            <a href="#contact" className="button-1">
              <span className="z-10">Contact Us</span>
            </a>
          </div>
        </div>

        <div
          className={`block md:hidden cursor-pointer ${
            scrolled ? "bg-transparent p-1 " : "bg-primary rounded-xl p-1"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <HiMiniBars3BottomRight
            className={` text-3xl ${scrolled ? "text-primary" : "text-white"}`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-secondary text-primary z-50 flex flex-col items-end px-8 py-36 md:hidden"
            >
              <motion.button
                animate={controls}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-primary text-3xl"
              >
                <RxCross2 />
              </motion.button>

              <nav className="flex flex-col gap-12 text-xl text-end">
                <a href="#home" className={navStyle("home")}>
                  Home
                </a>
                <a href="#about" className={navStyle("about")}>
                  About Us
                </a>
                <a href="#service" className={navStyle("service")}>
                  Services
                </a>
                <a href="#products" className={navStyle("products")}>
                  Products
                </a>

                <a href="#contact" className="button-3">
                  <span className="z-10">Contact Us</span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
