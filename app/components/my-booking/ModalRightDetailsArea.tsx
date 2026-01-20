import { Star } from "lucide-react";
import Image from "next/image";
import CarFunctionality from "./ModalCarFunctionality";
import AdditionalFeatures from "./ModalAdditionalFeatures";
import DriverContact from "./DriverContact";

export default function DetailsArea() {
  return (
    <>
      <div className="flex gap-1 items-baseline">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < 4
                ? "fill-gray-800 text-gray-800"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
        <p className="pl-1.5 text-yellow-400 text-[16px] font-medium">4.5</p>
      </div>
      <div className="mt-1 flex justify-between items-baseline">
        <div>
          <h2 className="text-[18px] lg:text-[24px] font-medium text-primaryText">
            Porsche S60
          </h2>
          <a
            href="#"
            className="text-[14px] lg:text-[14px] text-primaryTextLight mb-3 hover:underline inline-block"
          >
            Or similar upper class
          </a>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-[18px] lg:text-[24px] font-medium text-red-500">
            €46.91
          </h3>
          <p className="text-[14px] lg:text-[14px] text-primaryTextLight">
            Price for 3 days
          </p>
        </div>
      </div>
      <div className="mt-1 lg:mt-1">
        <Image
          src="/assets/view-details/hertz.png"
          alt="Car Image"
          width={80}
          height={40}
        />
        <a
          href="#"
          className="text-[14px] lg:text-[14px] text-primaryTextLight mt-1.5 hover:underline inline-block"
        >
          About Aurum Cars
        </a>
      </div>

      {/* Car Functionality */}
      <CarFunctionality />

      {/* Additional Features */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between mt-6">
        {/* Fuel Policy */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/fuel.png"
          PolicyHeader="Fuel Policy"
          PolicyType="Full to Full"
          PolicyDescription="You can return your rental car with the same fuel level as when you picked it up."
        />

        {/* Kilometers */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/meter.png"
          PolicyHeader="Kilometers"
          PolicyType="Unlimited"
          PolicyDescription="You can drive as much as you want without worrying about extra charges."
        />
      </div>
      <DriverContact />
    </>
  );
}
