import React from "react";
import proccessicon from "@/public/Icon9.png";
import Image from "next/image";
import line from "@/public/Line.png";
import graphics from "@/public/Graphics.png";
import graphics2 from "@/public/graphics1.png";
import graphics3 from "@/public/graphics3.png";

const Proccess = () => {
  return (
    <div className=" max-w-[1200px] bg-gradient-to-r from-[#E9F7FF] to-[#FFF3CA] mx-auto flex flex-col items-center py-14">
      <Image alt={"proccess icon"} src={proccessicon} />
      <h1 className="text-[40px] font-semibold leading-[44.2px] max-w-[525px] text-center mt-7">
        A simple, yet powerful and efficient process
      </h1>
      <div className="flex mt-10 w-full items-center justify-center">
        <div className="relative flex flex-col bg-green-300 gap-72 items-center">
          <Image
            alt="process icon"
            src={line}
            className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2"
          />
          <div className="w-[86px] h-[86px] bg-white flex items-center justify-center rounded-full border-8 border-[#FFD1C8] z-10">
            1
          </div>
          <div className="w-[86px] h-[86px] bg-white flex items-center justify-center rounded-full border-8 border-[#FFD1C8] z-10">
            2
          </div>
          <div className="w-[86px] h-[86px] bg-white flex items-center justify-center rounded-full border-8 border-[#FFD1C8] z-10">
            3
          </div>
          <div className="absolute top-0 bottom-0 right-32 w-80 flex flex-col items-center justify-between">
            <Image src={graphics} alt="graphics" />
            <div className="flex flex-col items-end">
              <h2 className="text-[25px] font-semibold">Work Execution</h2>
              <p className="text-end">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </p>
            </div>
            <Image src={graphics2} alt="graphics" />
          </div>
          <div className="absolute top-0 bottom-0 left-32 w-80 flex flex-col justify-between">
            <div>
              <h2 className="text-[25px] font-semibold">Marketing Plan</h2>
              <p>
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </p>
            </div>
            <Image src={graphics3} alt="graphics" />
            <div>
              <h2 className="text-[25px] font-semibold">Growth & Scale</h2>
              <p>
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proccess;
