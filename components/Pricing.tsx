import Image from "next/image";
import React from "react";
import pricingicon from "@/public/pricingicon.png";
import { IoSettings } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import pricing2 from "@/public/Img.png";
import pricing3 from "@/public/Maskgroup.png";

const Pricing = () => {
  return (
    <div className="section-wrapper flex flex-col items-center py-14">
      <Image alt={"pricing icon"} src={pricingicon} />
      <h1 className="text-[40px] font-semibold leading-[44.2px] max-w-[525px] text-center mt-7">
        Our Flexible Pricing Plans
      </h1>
      <div className="flex justify-between gap-5 w-full mt-16">
        <div className="plan w-1/2 p-10 rounded-md border bg-[#F6F6F6]">
          <div className="flex items-center gap-5">
            <IoSettings className="w-[50px] h-[50px] text-[#C8C8C8]" />
            <div>
              <p className="text-[25px] text-[#292930] font-bold leading-[27px]">
                Starter
              </p>
              <p className="text-[#555555]">
                <span className="text-[50px] text-[#292930] font-[900] leading-[55px]">
                  $29
                </span>
                /Per Month
              </p>
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] my-10" />
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>Email MarketingContent</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>MarketingVoice</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>OptimizeSEO </p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#FF5353] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>ConsultingVideo</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#FF5353] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>MarketingAdvertising</p>
            </li>
          </ul>
          <button className="gap-2 px-5 py-2 rounded bg-[#292930] text-white font-medium w-full mt-10">
            Purchase Plan
          </button>
        </div>
        <div className="relative plan w-1/2 p-10 rounded-md border bg-[#292930] text-[#F6F6F6]">
          <span className="bg-[#FFDC60] text-[#292930] px-5 p-2 rounded-lg absolute right-5 top-5">
            POPULAR
          </span>
          <div className="flex items-center gap-5">
            <Image alt={"pricing icon"} src={pricing2} />
            <div>
              <p className="text-[25px] text-[#292930] font-bold leading-[27px]">
                Starter
              </p>
              <p className="">
                <span className="text-[50px] font-[900] leading-[55px]">
                  $49
                </span>
                /Per Month
              </p>
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] my-10" />
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>Email MarketingContent</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>MarketingVoice</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>OptimizeSEO </p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>ConsultingVideo</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#FF5353] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>MarketingAdvertising</p>
            </li>
          </ul>
          <button className="gap-2 px-5 py-2 rounded bg-white text-[#292930] font-medium w-full mt-10">
            Purchase Plan
          </button>
        </div>
        <div className="plan w-1/2 p-10 rounded-md border  bg-[#F6F6F6]">
          <div className="flex items-center gap-5">
            <Image alt={"pricing icon"} src={pricing3} />
            <div>
              <p className="text-[25px] text-[#292930] font-bold leading-[27px]">
                Starter
              </p>
              <p className="text-[#555555]">
                <span className="text-[50px] text-[#292930] font-[900] leading-[55px]">
                  $99
                </span>
                /Per Month
              </p>
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] my-10" />
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>Email MarketingContent</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>MarketingVoice</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <TiTick />
              </div>
              <p>OptimizeSEO </p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>ConsultingVideo</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="bg-[#3FCD78] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white">
                <RxCross2 />
              </div>
              <p>MarketingAdvertising</p>
            </li>
          </ul>
          <button className="gap-2 px-5 py-2 rounded bg-[#292930] text-white font-medium w-full mt-10">
            Purchase Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
