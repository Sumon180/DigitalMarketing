import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiCopySimpleLight } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import projecticon from "@/public/imageprojct.png";
import Button from "./Button";

const Project = () => {
  return (
    <div className="bg-[#292930] text-white">
      <div className="section-wrapper py-16">
        <div className="flex flex-col md:flex-row gap-10 justify-between md:items-end">
          <div className="flex flex-col md:flex-row items-center gap-7 md:w-9/12">
            <div>
              <button className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] flex items-center justify-center rounded-full bg-[#5956E8] text-white font-medium">
                <PiCopySimpleLight className="w-[34px] h-[34px]" />
              </button>
            </div>
            <h1 className="text-[30px] md:text-[40px] max-md:text-center font-semibold leading-[44.2px]">
              1520 -Project Done. Browse our latest case study on Marketing
              Agency
            </h1>
          </div>
          <Button className="flex items-center justify-center gap-2 bg-white text-[#292930]">
            More Cacestudys
            <span className="p-1 bg-[#5956E8] text-white rounded-full">
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </Button>
        </div>
        <div className="flex gap-[27px] mt-20">
          <div className="lg:w-1/2 w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-[25px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Online Media Management</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Experiential Marketing</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum has been the industrys standard from dummy text
                  ever since the unknown printer to galley of type and make.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Email Marketing</AccordionTrigger>
                <AccordionContent>
                  Yes. Its animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-1/2 hidden lg:block">
            <Image src={projecticon} alt="image" />
          </div>
        </div>
        <div className="bg-gray-700 h-[1px] my-10" />
        <div className="mt-5 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="text-[40px] font-semibold">
              325<span className="text-[#5956E8]">+</span>
            </div>
            <p className="uppercase ml-3 text-[15px]">clients worldwide</p>
          </div>
          <div className="flex items-center">
            <div className="text-[40px] font-semibold">
              975<span className="text-[#FF1850]">+</span>
            </div>
            <p className="uppercase ml-3 text-[15px]">projects completed</p>
          </div>
          <div className="flex items-center">
            <div className="text-[40px] font-semibold">
              70<span className="text-[#FFDC60]">+</span>
            </div>
            <p className="uppercase ml-3 text-[15px]">team members</p>
          </div>
          <div className="flex items-center">
            <div className="text-[40px] font-semibold">
              85<span className="text-[#38E55E]">+</span>
            </div>
            <p className="uppercase ml-3 text-[15px]">Revenue Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
