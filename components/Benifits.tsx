import Image from "next/image";
import React from "react";
import benifits from "@/public/benefits.png";
import star from "@/public/Icon18.png";
import vactor from "@/public/Vector.png";
import vactor2 from "@/public/vector2.png";
import vactor3 from "@/public/vactor3.png";

const Benifits = () => {
  return (
    <div className="section-wrapper flex mt-16 gap-10">
      <div className="section relative w-1/2">
        <div className="flex gap-6">
          <Image alt={"pricing icon"} src={star} />
          <h1 className="text-[40px] font-semibold leading-[44.2px] max-w-[525px]">
            Benifit of working with Maruncy
          </h1>
        </div>
        <Image
          alt={"pricing icon"}
          src={benifits}
          width={500}
          className="absolute top-0 right-0 left-0 bottom-0"
        />
      </div>
      <div className="section w-1/2">
        <div className="flex flex-col gap-10 w-7/12 mx-auto">
          <div className="">
            <h3 className="text-[25px] font-semibold leading-[27.63px]">
              Page Rankings
            </h3>
            <div className="relative bg-[#CFCFCF] h-[1px]">
              <div className="absolute min-w-[86px] min-h-[86px] flex items-center justify-center border rounded-full -translate-y-1/2 right-full">
                <Image src={vactor} alt="icon" />
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
                Site Optimisation
              </h3>
              <div className="relative bg-[#CFCFCF] h-[1px]">
                <div className="absolute min-w-[86px] min-h-[86px] flex items-center justify-center border rounded-full -translate-y-1/2 right-full">
                  <Image src={vactor2} alt="icon2" />
                </div>
              </div>
              <p className="text-[18px] font-normal text-[#555555] mt-5">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm leoinsion duycoqun consemleint lorem.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-[25px] font-semibold leading-[27.63px]">
                Reporting & Analysis
              </h3>
              <div className="relative bg-[#CFCFCF] h-[1px]">
                <div className="absolute min-w-[86px] min-h-[86px] flex items-center justify-center rounded-full -translate-y-1/2 right-full">
                  <Image src={vactor3} alt="icon2" />
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

export default Benifits;
