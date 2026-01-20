import Image from "next/image";
import React from "react";

export default function DriverContact() {
  return (
    <>
      {/* Driver & Contact */}
      <div>
        <div className="flex gap-3 items-center mb-3 mt-4">
          <Image
            src="/assets/checkout/driver.png"
            alt="Car Image"
            width={24}
            height={24}
          />
          <h1 className="text-[18px] lg:text-[24px] text-primaryText font-bold">
            Driver & Contact
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-25">
          <div>
            <p className="text-[16px] lg:text-[18px] text-primaryText font-semibold mb-1">
              Main Driver:
            </p>
            <ul>
              <li className="text-[16px] lg:text-[18px] text-primaryText mb-1">
                John Doe
              </li>
              <li className="text-[16px] lg:text-[18px] text-primaryText mb-1">
                john.doe@example.com
              </li>
              <li className="text-[16px] lg:text-[18px] text-primaryText">
                +49 123 4567890
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] lg:text-[18px] text-primaryText font-semibold mb-1">
              Address:
            </p>
            <ul>
              <li className="text-[16px] lg:text-[18px] text-primaryText mb-1">
                Musterstr. 123
              </li>
              <li className="text-[16px] lg:text-[18px] text-primaryText">
                10178 Berlin, Germany
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
