import React from "react";
import img1 from "../assets/images/animation2/1.png";
import img2 from "../assets/images/animation2/2.png";
import img3 from "../assets/images/animation2/3.png";

const images = [img1, img2, img3];

const Animation2 = () => {
  return (
    <div className="overflow-hidden w-full py-4 max-w-7xl mx-auto pb-16 px-4">
      <div className="flex items-center justify-center py-4 font-bold text-primary text-3xl">
        <h1>Our Clients</h1>
      </div>
      <div className="inline-flex items-center justify-center whitespace-nowrap run-scroll">
        {images.map((src, i) => (
          <img key={i} src={src} alt={i} className="h-10 mx-4 " />
        ))}

        {images.map((src, i) => (
          <img key={"dup-" + i} src={src} alt={i} className="h-10 mx-4" />
        ))}

        {images.map((src, i) => (
          <img key={"dup-" + i} src={src} alt={i} className="h-10 mx-4" />
        ))}
      </div>
    </div>
  );
};

export default Animation2;
