import React from "react";

const Hero = () => {
  return (
    <div className="h-screen banner-image bg-cover flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="w-1/2">
          <p className="uppercase text-sm text-[15px]">
            <span className="text-[#FFDC60]">//</span>Agency
          </p>
          <h1 className="text-[70px] font-bold text-[#292930] leading-[77.35px]">
            A fully integrated digital{" "}
            <span className="text-[#5956E8]">marketing</span> agency
          </h1>
          <p className="my-5 text-[#555555]">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt ius ex. Ut vis mazim erroribus forensibus.
          </p>
          <div className="flex gap-5">
            <button className="px-5 py-2 rounded bg-[#292930] text-white">
              Our Services
            </button>
            <button className="px-5 py-2 rounded border border-[#292930] text-[#292930]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
