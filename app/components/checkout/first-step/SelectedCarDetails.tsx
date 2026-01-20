import Image from "next/image";
import React from "react";

export default function SelectedCarDetails() {
  return (
    <>
      <div className="p-4 flex flex-col md:flex-row justify-between gap-5">
        <div>
          <div className="flex gap-4">
            <div className="border p-2 rounded-sm w-full md:w-auto">
              <div className="relative w-full h-[220px] md:w-[220px] md:h-[220px] overflow-hidden">
                <Image
                  src="/assets/view-details/car-1.png"
                  alt="Car Image"
                  fill
                  className="object-cover rounded-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="order-2 md:order-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] font-bold text-primaryText">
                Ford Fiesta-or similar small cars
              </h3>
              <p className="description mt-1.5">
                Booked 30+ times last week- Hertz
              </p>
              <div className="mt-2 flex gap-4">
                <p className="bg-blue-50 text-blue-500 px-3 py-1 inline-block rounded-sm">
                  Manual
                </p>
                <p className="bg-blue-50 text-blue-500 px-3 py-1 inline-block rounded-sm">
                  Climate
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-[20px] font-bold text-primaryText">
                Insurance Coverage
              </h4>
              <p className="description max-w-[450px] mt-1.5">
                Liability coverage €50 million- Comprehensive insurance and
                theft protection- No Excess (100% refund)
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex flex-col text-left md:text-end">
              <p className="text-[18px] text-primaryText">Total Price</p>
              <h5 className="text-[24px] font-medium text-primaryText mt-1">
                €46.89
              </h5>
              <p className="text-[16px] text-primaryTextLight">
                Price for 3 Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
