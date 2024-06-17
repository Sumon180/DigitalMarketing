import React from "react";
import { CiSettings } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import serviceicon from "@/public/Icon.png";
import serviceicon1 from "@/public/Icon1.png";
import serviceicon2 from "@/public/Icon2.png";
import serviceicon3 from "@/public/Icon3.png";
import serviceicon4 from "@/public/Icon4.png";
import serviceicon5 from "@/public/Icon5.png";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      img: serviceicon,
      title: "Social Media Marketing",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. ",
    },
    {
      img: serviceicon1,
      title: "Paid Advertising",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. ",
    },
    {
      img: serviceicon2,
      title: "Advanced Analytics",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",
    },
    {
      img: serviceicon3,
      title: "SEO Optimization",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",
    },
    {
      img: serviceicon4,
      title: "Funnel Optimization",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",
    },
    {
      img: serviceicon5,
      title: "Content Marketing",
      desc: "Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",
    },
  ];

  return (
    <div className="bg-[#292930] text-white">
      <div className="max-w-[1200px] w-full mx-auto py-14">
        <div className="flex justify-between items-end">
          <div className="flex gap-7 w-9/12">
            <button className="min-w-[88px] h-[88px] flex items-center justify-center rounded-full bg-[#5956E8] text-white font-medium">
              <CiSettings className="w-[34px] h-[34px]" />
            </button>
            <div className="">
              <p className="text-[15px] font-medium">
                <span className="text-[#FFDC60]">//</span> 01 . Services
              </p>
              <h1 className="text-[40px] font-semibold leading-[44.2px]">
                High-impact services to take your business to the next level
              </h1>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-2 px-5 py-2 rounded bg-white text-[#292930] font-medium">
              Our Services
              <span className="p-1 bg-[#5956E8] text-white rounded-full">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-[90px] grid grid-cols-3 gap-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between bg-gradient-to-b from-[#36363E] to-[#292930] rounded-[30px] border border-[#424245] p-[40px]"
            >
              <div>
                <Image src={service.img} alt={"service icon"} />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[25px] font-semibold">{service.title}</h2>
                <p className="text-[18px] font-normal">{service.desc}</p>
                <button className="readmore-btn duration-300 w-full flex items-center justify-center gap-2 px-5 py-2 rounded border border-[#535355] hover:bg-[#FFDC60] text-[#525255] font-medium">
                  Read More
                  <span className="p-1 bg-[#525255] text-[#292930] rounded-full">
                    <MdOutlineKeyboardArrowRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
