import Image from "next/image";
import React from "react";
import icon from "@/public/Icon19.png";
import image from "@/public/Image (1).png";
import image2 from "@/public/Image (2).png";
import Button from "./Button";

const Blog = () => {
  return (
    <div className="section-wrapper flex flex-col items-center my-28">
      <Image alt={"proccess icon"} src={icon} className="max-md:w-14" />
      <h1 className="text-[40px] font-semibold leading-[44.2px] max-w-[600px] text-center mt-7">
        Browse our content on growth marketing
      </h1>
      <div className="flex flex-col gap-5 w-full mt-10">
        <div className="flex flex-col lg:flex-row w-full gap-20 bg-[#FFF3CA] p-[40px] md:p-[85px]">
          <div className="lg:w-1/2 flex flex-col gap-7 justify-between">
            <div className="flex items-center justify-between">
              <button className="px-5 py-1 rounded-full border border-[#292930] text-[#292930] text-[18px] font-medium">
                Marketing
              </button>
              <p>September 1, 2022</p>
            </div>
            <h3 className="text-[25px] font-semibold leading-[27px]">
              How to increase your Twitter reach by over 200% with this simple
              trick
            </h3>
            <p className="text-[18px] font-normal text-[#555555]">
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.{" "}
            </p>
            <div>
              <Button className="border bg-white text-[#292930] text-[18px]">
                Read more
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-end">
            <Image alt={"proccess icon"} src={image} />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row w-full gap-20 bg-[#E9F7FF] p-[40px] md:p-[85px]">
          <div className="md:w-1/2">
            <Image alt={"proccess icon"} src={image2} />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-7 justify-between">
            <div className="flex items-center justify-between">
              <button className="px-5 py-1 rounded-full border border-[#292930] text-[#292930] text-[18px] font-medium">
                Marketing
              </button>
              <p>September 1, 2022</p>
            </div>
            <h3 className="text-[25px] font-semibold leading-[27px]">
              How to increase your Twitter reach by over 200% with this simple
              trick
            </h3>
            <p className="text-[18px] font-normal text-[#555555]">
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.{" "}
            </p>
            <div>
              <Button className="border bg-white text-[#292930] text-[18px]">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Button className="border bg-[#292930] text-white text-[18px]">
          More articles
        </Button>
      </div>
    </div>
  );
};

export default Blog;
