import React from "react";
import Animation from "../components/Animation";
import { MdArrowOutward } from "react-icons/md";

const HeroSection = () => {
  return (
    <div id="home">
      <div className="max-w-7xl mx-auto h-screen w-full flex flex-col justify-between items-center px-4">
        <div className="pt-48 flex flex-col items-center justify-center text-center gap-y-6">
          <span className="gradient pt-8">
            Scalable Weighing Solutions for <br /> Every Business Stage
          </span>
          <p className="text-sm md:text-lg max-w-5xl">
            We combine industrial-grade precision with accessible,
            customer-centered service, empowering businesses of every sizeto
            operate more efficiently, make smarter decisions, and grow with
            confidence.
          </p>
          <a
            href="#products"
            className="flex items-center gap-x-3 bg-primary w-fit text-white px-5 py-3 rounded-full group hover:gap-x-5 duration-100 ease-in-out"
          >
            Explore Our Products{" "}
            <MdArrowOutward className="group-hover:rotate-45 duration-100 transition-all ease-in-out" />
          </a>
        </div>
        <div>
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
