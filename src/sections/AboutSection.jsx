import React from "react";
import about from "../assets/images/about/about.png";
import workflow from "../assets/images/about/workflow.png";
import WorkflowCarousel from "../components/WorkflowCarousel";
import what from "../assets/images/about/what.png";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="max-w-7xl mx-auto px-4 pt-16 md:pt-32">
        <div className="w-full text-center flex flex-col items-center justify-center gap-y-4">
          <div>
            <img src={about} alt="aboutsection" className="w-32 md:w-36" />
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-2xl gradient-2 ">
              Practical, certified, and long-term solutions for modern weighing
              needs
            </h1>
            <p className="max-w-3xl text-center">
              we specialize in delivering scalable weighing system, calibration
              services, and optional software support for both growing bussiness
              and industrial operations.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-16 text-left py-8 items-center justify-center">
            <div className="md:w-1/3">
              <img src={what} alt="fusion" />
            </div>
            <div className="md:w-2/3 pt-8 ">
              <p className="text-lg">
                fusion.lab is the official brand of CV Fusion Jaya Group, a
                company engaged in the trade and services of digital weighing
                systems for a wide range of business scales—from micro and small
                enterprises to national and multinational corporations. <br />{" "}
                <br />
                Trusted by industry leaders such as PT Mettler Toledo and
                various corporate clients, we have built a reputation for
                delivering accurate, efficient, and reliable weighing solutions
                tailored to industrial standards. <br /> <br /> At the same
                time, we are passionate about making high-quality technology
                more accessible for micro and small businesses. fusion.Lab
                bridges this gap by offering affordable, scalable weighing
                solutions with subscription-based maintenance services, ensuring
                long-term reliability and convenience for businesses of any
                size.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center pt-8 gap-y-4">
            <div>
              <img src={workflow} alt="" className="w-32 md:w-48" />
            </div>
            <div>
              <span className="gradient-2">How it Works?</span>
              <p>Understand Our Process, Simple, Transparent, and Efficient.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
