import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/logo/fusion_1.png"; // ganti sesuai file logo lu

const Footer = () => {
  return (
    <section className="md:py-8">
      <footer className="max-w-7xl mx-auto bg-linear-to-br from-primary to-primary/60 text-white px-6 md:px-16 py-12 rounded-t-3xl md:rounded-t-0    md:rounded-3xl">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <img src={logo} alt="Fusionlab" className="w-32 mb-4" />
            <h3 className="font-semibold text-lg">CV FUSION JAYA GROUP</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Powering Indonesia’s industries with accurate, certified, and
              reliable weighing solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">SITEMAP</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <a href="">Home</a>
              <a>About Us</a>
              <a>Services</a>
              <a>Products</a>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">LET’S CONNECT</h3>
            <div className="flex items-center gap-4 text-2xl">
              <FaInstagram className="cursor-pointer hover:text-gray-200" />
              <FaLinkedin className="cursor-pointer hover:text-gray-200" />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ADDRESS</h3>

            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <p className="text-sm leading-relaxed">
                Jawa Timur – Jl. Bulak Setro 4 No 1, Kota Surabaya, 60124
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl" />
              <p className="text-sm">085784246763</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/40 mt-10 pt-4"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Fusionlab. All Rights Reserved</p>
          <p className="mt-2 md:mt-0">CV FUSION JAYA GROUP</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
