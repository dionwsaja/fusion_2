import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faq from "../assets/images/faq/faq.png";

const faqData = [
  {
    question: "What types of businesses can use Fusionlab’s services?",
    answer:
      "We serve all business scales — from small retailers and local manufacturers to multinational industries — across sectors like food, logistics, and production.",
  },
  {
    question: "Do you provide official metrology or “tera” certification?",
    answer:
      "Yes. We work directly with Indonesia’s Department of Metrology to provide legal verification (tera) for all certified weighing devices.",
  },
  {
    question:
      "Can I request maintenance or calibration for non-Fusionlab equipment?",
    answer:
      "Absolutely. Our technicians can handle calibration, repair, or legalization for most digital scale brands, including Mettler Toledo, Rice Lake, and Sayaki.",
  },
  {
    question: "Do you offer remote support or monitoring?",
    answer:
      "Yes, through our software integration and cloud-based scale management, you can monitor performance, schedule maintenance, and receive alerts remotely.",
  },
  {
    question: "How often should scales be calibrated?",
    answer:
      "It depends on usage and regulations. We generally recommend calibration every 6–12 months for optimal accuracy and compliance.",
  },
  {
    question: "Can I integrate my weighing system with POS or ERP software?",
    answer:
      "Yes. We offer POS and ERP integration to sync weighing data with your sales or inventory systems in real time.",
  },
];

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-y-8 gap-x-8">
        <div className="text-left flex flex-col gap-y-4">
          <div>
            <img src={faq} alt="" className="w-64" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">LET’S MAKE THINGS CLEAR</h1>
            <p>
              Get clear and concise answers about our services, features, and
              policies.
            </p>
          </div>
        </div>
        <div className=" mx-auto flex flex-col gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <Minus size={22} className="text-gray-500" />
                ) : (
                  <Plus size={22} className="text-gray-500" />
                )}
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
