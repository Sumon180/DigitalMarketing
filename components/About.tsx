import Image from "next/image";
import React from "react";
import { HiAtSymbol } from "react-icons/hi2";
import image from "@/public/Image.png";
import icon from "@/public/group3.png";
import icon2 from "@/public/Icon8.png";

const About = () => {
  return (
    <div className="section-wrapper flex my-24">
      <div className="w-5/12 hidden lg:block">
        <Image src={image} alt="about" />
      </div>
      <div className="lg:w-7/12">
        <div className="flex items-center gap-7">
          <button className="min-w-[60px] h-[60px] lg:min-w-[88px] lg:h-[88px] flex items-center justify-center rounded-full bg-[#5956E8] text-white font-medium">
            <HiAtSymbol className="w-[34px] h-[34px]" />
          </button>
          <h1 className="text-[30px] lg:text-[40px] leading-[44.2px] font-semibold">
            The #1 digital marketing services company
          </h1>
        </div>
        <div className="bg-[#CFCFCF] h-[1px] my-10" />
        <p className="text-[#555555]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry ftyuu Ipsum has been the industrys standard book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>
        <div className="flex flex-col gap-20 w-7/12 mx-auto mt-10">
          <div className="">
            <h3 className="text-[25px] font-semibold leading-[27.63px]">
              Guaranteed Results
            </h3>
            <div className="relative bg-[#CFCFCF] h-[1px]">
              <div className="absolute min-w-[86px] min-h-[86px] flex items-center justify-center border rounded-full -translate-y-1/2 right-full">
                <Image src={icon} alt="icon" />
              </div>
            </div>
            <p className="text-[18px] font-normal text-[#555555] mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <div>
              <h3 className="text-[25px] font-semibold leading-[27.63px]">
                Team of Industry Experts
              </h3>
              <div className="relative bg-[#CFCFCF] h-[1px]">
                <div className="absolute min-w-[86px] min-h-[86px] flex items-center justify-center border rounded-full -translate-y-1/2 right-full">
                  <Image src={icon2} alt="icon2" />
                </div>
              </div>
              <p className="text-[18px] font-normal text-[#555555] mt-5">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm leoinsion duycoqun consemleint lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
