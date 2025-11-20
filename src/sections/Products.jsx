import React from "react";

import img1 from "../assets/images/products/1.png";
import img2 from "../assets/images/products/2.png";
import img3 from "../assets/images/products/3.png";
import img4 from "../assets/images/products/4.png";
import img5 from "../assets/images/products/5.png";
import img6 from "../assets/images/products/6.png";
import img7 from "../assets/images/products/7.png";
import img8 from "../assets/images/products/8.png"; // arrow image
import product from "../assets/images/products/product.png";

const productData = [
  {
    id: 1,
    image: img1,
    title: "Bench Scale",
    desc: "Compact yet highly accurate weighing equipment designed for portioning, packaging, and quality control tasks in both commercial and industrial settings. ",
  },
  {
    id: 2,
    image: img2,
    title: "Compact Scale",
    desc: "Portable and user-friendly, ideal for retail counters, laboratories, and mobile operations that require quick and consistent measurements.",
  },
  {
    id: 3,
    image: img3,
    title: "Weight Indicator",
    desc: "Advanced digital display units for viewing, processing, and transmitting weight data, compatible with a wide range of industrial weighing platforms and automation systems.",
  },
  {
    id: 4,
    image: img4,
    title: "Industrial Scale",
    desc: "Heavy-duty platforms engineered for bulk materials, warehouse operations, and production lines, ensuring stability, precision, and long-term reliability.",
  },
  {
    id: 5,
    image: img5,
    title: "Webo ID226 ABS Bench Scale",
    desc: "A durable, high-precision bench-top scale built for efficiency in commercial environments. Features a robust ABS housing, reliable sensors, and easy-to-read digital interface.",
  },
  {
    id: 6,
    image: img6,
    title: "CAS SW-II Weighing & Count Scale",
    desc: "Equipped with dual-display technology and high-precision load cells, this scale delivers accurate weight and quantity tracking — perfect for inventory and production management.",
  },
  {
    id: 7,
    image: img7,
    title: "AND Platform Scales HV-G Series (HV-200KGL)",
    desc: "A high-capacity platform scale offering up to 200 kg capacity with a stainless steel surface and large digital display. Ideal for industrial applications requiring durability and precision.",
  },
  {
    id: 8,
    image: img8,
    title: "Order Our Product",
    desc: "Contact us via email and choose your product. We will confirm ASAP.",
  },
];

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="px-4 py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-y-4 items-center justify-center">
          <div>
            <img src={product} alt="" className="w-48" />
          </div>
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <span className="gradient-2">
              Precision Hardware, Built to Perform
            </span>
            <p>
              From compact digital scales to industrial weighing systems,
              Fusionlab supplies certified, durable, and customizable solutions
              trusted by businesses across Indonesia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {productData.map((item) => (
            <div
              key={item.id}
              onClick={item.id === 8 ? scrollToContact : undefined}
              className={`bg-white p-4 rounded-xl shadow-sm border border-gray-200 
              hover:shadow-md hover:scale-102 transition-all duration-300 cursor-pointer
              ${item.id === 8 ? "hover:bg-gray-50" : ""}
              `}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
