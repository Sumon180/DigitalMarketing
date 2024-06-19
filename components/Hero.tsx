import React from "react";

const Hero = () => {
  return (
    <div className="h-screen banner-image bg-cover flex items-center justify-center">
      <div className="section-wrapper w-full">
        <div className="md:w-8/12 lg:w-7/12 xl:w-1/2 2xl:w-7/12">
          <h1 className="text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold text-[#292930] 2xl:leading-[77.35px]">
            A fully integrated digital{" "}
            <span className="text-[#5956E8]">marketing</span> agency
          </h1>
          <p className="my-7 text-[#555555] text-base md:text-[18px]">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt ius ex. Ut vis mazim erroribus forensibus.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 font-medium">
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
