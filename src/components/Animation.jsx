import React from "react";
import img1 from "../assets/images/animation/1.png";
import img2 from "../assets/images/animation/2.png";
import img3 from "../assets/images/animation/3.png";
import img4 from "../assets/images/animation/4.png";
import img5 from "../assets/images/animation/5.png";
import img6 from "../assets/images/animation/6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Animation = () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="inline-flex items-center justify-center whitespace-nowrap run-scroll">
        {images.map((src, i) => (
          <img key={i} src={src} alt={i} className="h-10 mx-4 " />
        ))}

        {images.map((src, i) => (
          <img key={"dup-" + i} src={src} alt={i} className="h-10 mx-4" />
        ))}
      </div>
    </div>
  );
};

export default Animation;
