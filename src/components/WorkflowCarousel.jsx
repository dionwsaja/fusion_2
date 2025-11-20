import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import img1 from "../assets/images/workflow/1.png";
import img2 from "../assets/images/workflow/2.png";
import img3 from "../assets/images/workflow/3.png";
import img4 from "../assets/images/workflow/4.png";
import img5 from "../assets/images/workflow/5.png";

const items = [
  {
    image: img1,
    title: "1.Discovery",
    desc: "We listen to your needs and challenges.",
  },
  {
    image: img2,
    title: "2.Design",
    desc: "We tailor the right solution for your workflow",
  },
  {
    image: img3,
    title: "3.Deliver",
    desc: "Our technicians install and configure every system with precision.",
  },
  {
    image: img4,
    title: "4.Certify",
    desc: "We ensure full legal and metrological compliance.",
  },
  {
    image: img5,
    title: "5.Support",
    desc: "We stay connected through maintenance, updates, and scalable upgrades",
  },
];

const WorkflowCarousel = () => {
  return (
    <div className="w-full py-10 px-4 max-w-7xl mx-auto ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden group rounded-xl bg-white border border-gray-200 p-4 shadow-sm transition-all h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg 
                transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center py-8 gap-x-2 opacity-50">
        <MdKeyboardDoubleArrowLeft />
        <span className="">slide</span>
        <MdKeyboardDoubleArrowRight />
      </div>
    </div>
  );
};

export default WorkflowCarousel;
