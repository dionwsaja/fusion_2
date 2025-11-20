import React from "react";
import value from "../assets/images/value/value.png";
import { GrCertificate } from "react-icons/gr";
import { MdAddBusiness } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { GiProcessor } from "react-icons/gi";
import { LuCopyCheck } from "react-icons/lu";

const features = [
  {
    title: "Certified & Compliant",
    desc: "We work directly with authorized metrology agencies to guarantee every weighing system meets legal and industry standards.",
    icon: GrCertificate,
  },
  {
    title: "Built for Small & Big Businesses",
    desc: "Whether you’re a local food vendor or a multinational manufacturer, our solutions scale flexibly with your operations.",
    icon: MdAddBusiness,
  },
  {
    title: "Technical Expertise, Human Touch",
    desc: "Every project is handled by experienced technicians who combine precision with genuine care for your business success.",
    icon: GrUserExpert,
  },
  {
    title: "End-to-End Support",
    desc: "From system setup to post-installation maintenance, we provide continuous support to keep your weighing operations running smoothly.",
    icon: BiSupport,
  },
  {
    title: "Proven Reliability",
    desc: "Our solutions are tested and trusted in real industrial environments for their accuracy, durability, and consistency.",
    icon: LuCopyCheck,
  },
  {
    title: "Innovation with Purpose",
    desc: "We use modern technology and software integration to simplify processes, enhance efficiency, and support smarter decision-making.",
    icon: GiProcessor,
  },
];

const Value = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto pt-16 ">
      <div className="flex flex-col justify-center items-center mb-8 gap-y-4">
        <div>
          <img src={value} alt="" className="w-32 md:w-42" />
        </div>
        <div className="flex flex-col items-center text-center max-w-xl">
          <span className="gradient-2">WHY CHOOSE US?</span>
          <p>
            We don’t just deliver projects — we craft tailored digital
            experiences that help your business stand out and grow sustainably.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-102 transition-all duration-300"
          >
            <div className="text-3xl text-primary mb-3">
              <item.icon />
            </div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
