"use client";

import React, { useEffect, useState } from "react";
import { StepOne, StepThree, StepTwo } from "../Svg";

export default function WorksFlow() {
  const [iconSize, setIconSize] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIconSize(120);
      } else {
        setIconSize(40);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-[#E9EBEF] py-6 md:py-10 lg:py-[130px]">
        <div className="container mx-auto px-4 lg:px-0">
          <h1 className="text-[20px] md:text-[40px] font-semibold text-primaryText mb-4 md:mb-6 lg:mb-20 text-center">
            How it Works
          </h1>
          <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-10">
            <div className="flex flex-col items-center">
              <div className="p-4 md:p-13 lg:p-15 bg-primary rounded-full inline-block">
                <StepOne width={iconSize} height={iconSize} />
              </div>
              <p className="text-[12px] md:text-[18px] lg:text-[20px] font-semibold text-primary mt-2 md:mt-6 lg:mt-7">
                Step 1
              </p>
              <h2 className="text-[10px] md:text-[24px] lg:text-[28px] font-semibold mt-1 md:mt-4 text-center leading-4 md:leading-8.5 lg:leading-9.5">
                Choose the service <br /> you need
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 md:p-13 lg:p-15 bg-primary rounded-full inline-block">
                <StepTwo width={iconSize} height={iconSize} />
              </div>
              <p className="text-[12px] md:text-[18px] lg:text-[20px] font-semibold text-primary mt-2 md:mt-6 lg:mt-7">
                Step 2
              </p>
              <h2 className="text-[10px] md:text-[24px] lg:text-[28px] font-semibold mt-1 md:mt-4 text-center leading-4 md:leading-8.5 lg:leading-9.5">
                Answer a few quick <br /> questions (3–6 steps)
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 md:p-13 lg:p-15 bg-primary rounded-full inline-block">
                <StepThree width={iconSize} height={iconSize} />
              </div>
              <p className="text-[12px] md:text-[18px] lg:text-[20px] font-semibold text-primary mt-2 md:mt-6 lg:mt-7">
                Step 3
              </p>
              <h2 className="text-[10px] md:text-[24px] lg:text-[28px] font-semibold mt-1 md:mt-4 text-center leading-4 md:leading-8.5 lg:leading-9.5">
                Your job goes live and <br /> professionals respond
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
