import React from "react";
import img1 from "../assets/images/services/1.png";
import img2 from "../assets/images/services/2.png";
import img3 from "../assets/images/services/3.png";
import img4 from "../assets/images/services/4.png";
import img5 from "../assets/images/services/5.png";
import img6 from "../assets/images/services/6.png";
import service from "../assets/images/services/service.png";

const services = [
  {
    img: img1,
    title: "Technical Services",
    desc: "We provide preventive and corrective maintenance to reduce downtime and ensure weighing precision, along with complete installation for retail and industrial systems. Genuine spare parts from trusted brands like Mettler Toledo, Rice Lake, and Sayaki guarantee long-term reliability.",
  },
  {
    img: img2,
    title: "Legalization & Calibration",
    desc: "Our calibration and verification services keep your weighing systems accurate and compliant. In collaboration with Indonesia’s Department of Metrology, we offer certified, ISO-traceable calibration and scheduled plans to maintain consistency, safety, and performance.",
  },
  {
    img: img3,
    title: "Software & System Support",
    desc: "We provide customized software solutions designed to enhance efficiency and control in retail, warehouse, and industrial weighing operations. Our services include seamless POS and ERP integration, allowing real-time transaction and inventory synchronization, as well as remote monitoring and data logging systems for centralized scale management, automatic data storage, diagnostics, and live status alerts.",
  },
  {
    img: img4,
    title: "Digital Product Extension",
    desc: "We offer cloud-based scale management through web and mobile dashboards that allow you to monitor device status, run diagnostics, and schedule maintenance anytime, anywhere. Additionally, our label printing and barcode integration solutions provide seamless connectivity to barcode printers and label systems, making them ideal for packaging, logistics, and retail operations.",
  },
  {
    img: img5,
    title: "Consultation & System Design",
    desc: "We provide expert consultation to design, configure, and optimize weighing systems tailored to your business operations and compliance needs. Our team also conducts in-depth workflow analysis to recommend upgrades, integration options, and automation strategies that enhance overall efficiency and performance.",
  },
  {
    img: img6,
    title: "Nationwide Coverage & Logistics",
    desc: "With a nationwide network covering major Indonesian cities, our certified technicians and local partners provide fast response times and reliable on-site service wherever your business operates. We also ensure efficient delivery and coordinated logistics for equipment installation and maintenance, minimizing downtime and keeping your operations running smoothly.",
  },
];

const ServiceSection = () => {
  return (
    <section id="service" className="px-4 max-w-7xl mx-auto py-16 md:py-24">
      <div className="text-center mb-12 flex flex-col items-center justify-center gap-y-4">
        <div>
          <img src={service} alt="" className="w-32 md:w-48" />
        </div>
        <div className="flex flex-col text-center justify-around items-center gap-y-2">
          <span className="gradient-2">
            Comprehensive Weighing Solutions, Built for Every Industry
          </span>
          <p className="max-w-3xl">
            From equipment setup to calibration and system integration,
            Fusionlab provides end-to-end services designed to keep your
            weighing operations precise, compliant, and future-ready.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 hover:scale-102 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
