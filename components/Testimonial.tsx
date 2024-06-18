"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCommentDots } from "react-icons/fa";
import comapany from "@/public/company.png";
import comapany2 from "@/public/company2.png";
import profile from "@/public/profile.png";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      designation: "Marketing Lead at Google",
      image: profile,
      companyLogo: comapany,
      desc: "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
      review: 5,
    },
    {
      id: 2,
      name: "Peter Powal",
      designation: "Designer",
      image: profile,
      companyLogo: comapany2,
      desc: "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
      review: 5,
    },
    {
      id: 3,
      name: "Sumon Hossain",
      designation: "John",
      image: profile,
      companyLogo: comapany,
      desc: "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
      review: 5,
    },
    {
      id: 4,
      name: "Lily klinton",
      designation: "John",
      image: profile,
      companyLogo: comapany2,
      desc: "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
      review: 5,
    },
  ];

  return (
    <div className="section-wrapper my-16">
      <div className="flex gap-7 w-6/12">
        <button className="min-w-[88px] h-[88px] flex items-center justify-center rounded-full bg-[#5956E8] text-white font-medium">
          <FaCommentDots className="w-[34px] h-[34px]" />
        </button>
        <h1 className="text-[40px] leading-[44.2px] font-semibold">
          We work with customers across all industries
        </h1>
      </div>
      <div className="mt-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pt-24">
              <div className="bg-gradient-to-br from-[#FFF8F8] to-[#F5F7FF] p-[30px] rounded-md">
                <div className="bg-white shadow-md rounded-md px-8 py-10">
                  <div className="flex items-center justify-between">
                    <Image src={testimonial.companyLogo} alt="company logo" />
                    <p>{testimonial.review}</p>
                  </div>
                  <div className="bg-gray-200 h-[1px] w-full my-5" />
                  <p className="text-[#555555] text-[18px] leading-[28.17px] font-normal">
                    {testimonial.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-10">
                  <Image src={testimonial.image} alt="company logo" />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className="text-[#555555]">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
