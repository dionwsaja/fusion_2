import React, { useState } from "react";

import img1 from "../assets/images/products/1.png";
import img2 from "../assets/images/products/2.png";
import img3 from "../assets/images/products/3.png";
import img4 from "../assets/images/products/4.png";
import img5 from "../assets/images/products/5.png";
import img6 from "../assets/images/products/6.png";
import img7 from "../assets/images/products/7.png";

const productTypes = [
  { id: 1, title: "Bench Scale", image: img1 },
  { id: 2, title: "Compact Scale", image: img2 },
  { id: 3, title: "Weight Indicator", image: img3 },
  { id: 4, title: "Industrial Scale", image: img4 },
  { id: 5, title: "Webo ID226 ABS Bench Scale", image: img5 },
  { id: 6, title: "CAS SW-II Weighing & Count Scale", image: img6 },
  { id: 7, title: "AND Platform Scales HV-G Series (HV-200KGL)", image: img7 },
];

const Contact = () => {
  const [items, setItems] = useState([{ type: "", qty: 1 }]);
  const [status, setStatus] = useState("");

  const addItem = () => {
    setItems([...items, { type: "", qty: 1 }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mgvdljzz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
      setItems([{ type: "", qty: 1 }]);
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-md border border-gray-200">
        <div className="flex items-center justify-center">
          <span className="text-3xl gradient-3 mb-10">Contact Us</span>
        </div>

        {status === "SUCCESS" && (
          <p className="bg-green-100 text-green-700 p-4 rounded-xl mb-6">
            Your message is already sent. We will reply to your email.
          </p>
        )}

        {status === "ERROR" && (
          <p className="bg-red-100 text-red-700 p-4 rounded-xl mb-6">
            Something wrong, try it again.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block font-semibold mb-2">Instance Name</label>
            <input
              type="text"
              name="nama_instansi"
              required
              className="w-full p-3 border rounded-xl focus:ring focus:ring-gray-300"
              placeholder="Company / Store / Entity"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-xl focus:ring focus:ring-gray-300"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-4">Scale Type</label>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl border border-gray-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <select
                      name={`timbangan_${index + 1}`}
                      required
                      className="w-full p-3 border rounded-xl"
                      value={item.type}
                      onChange={(e) =>
                        handleChange(index, "type", e.target.value)
                      }
                    >
                      <option value="">Choose your scale type</option>
                      {productTypes.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      name={`qty_${index + 1}`}
                      min="1"
                      className="w-28 p-3 border rounded-xl"
                      value={item.qty}
                      onChange={(e) =>
                        handleChange(index, "qty", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addItem}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/80"
            >
              + Add more scale
            </button>
          </div>

          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 border rounded-xl focus:ring focus:ring-gray-300"
              placeholder="Additional Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary/80 transition"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
