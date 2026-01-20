"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import { Car } from "@/types/product";
import { useRouter } from "next/navigation";

interface CarCardProps {
  car: Car;
}

export default function DetailsCarCard({ car }: CarCardProps) {
  const router = useRouter();

  return (
    <>
      <div className="p-4 border border-stroke rounded-lg hover:shadow-md hover:bg-gray-50 transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between">
          <div className="flex-10/3 border-0 lg:border-r border-stroke">
            <div className="flex flex-col md:flex-row gap-3 w-full pr-0 lg:pr-4">
              {/* Image part */}
              <div className="relative w-full md:w-[170px] h-[270px] md:h-[170px] overflow-hidden shrink-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Right Side part */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] text-primaryText">{car.name}</h2>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < car.star
                            ? "fill-gray-800 text-gray-800"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* <p className="text-[12px]">Dhaka Da-11 6422</p> */}
                <a
                  href="#"
                  className="text-[14px] text-primaryTextLight mb-3 hover:underline inline-block"
                >
                  Or similar upper class
                </a>
                {/* Car specifications */}
                <div className="flex gap-2 items-center flex-wrap mb-4">
                  {/* Doors */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/card/door.png"
                      alt="Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-primaryText text-[14px]">
                      {car.doors} Doors
                    </p>
                  </div>
                  {/* Seats */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/card/seat.png"
                      alt="Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-primaryText text-[14px]">
                      {car.seats} Seats
                    </p>
                  </div>
                  {/* Suitcase */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/card/suitcase.png"
                      alt="Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-primaryText text-[14px]">
                      {car.suitcases} Suitcases
                    </p>
                  </div>
                  {/* Automatic */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/card/automatic.png"
                      alt="Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-primaryText text-[14px]">
                      {car.transmission}
                    </p>
                  </div>
                  {/* Climate */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/card/climate.png"
                      alt="Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-primaryText text-[14px]">
                      {car.climate}
                    </p>
                  </div>
                </div>
                {/* Fuel Policy and Kilometers */}
                <div className="flex gap-4">
                  {/* Fuel Policy */}
                  <div className="flex gap-2 items-start">
                    <Image
                      src="/assets/card/fuel.png"
                      alt="Icon"
                      width={16}
                      height={16}
                    />
                    <div>
                      <p className="text-[14px] text-primaryText">
                        Fuel Policy
                      </p>
                      <p className="text-[14px] font-medium text-primaryText">
                        {car.fuelPolicy}
                      </p>
                    </div>
                  </div>
                  {/* Kilometers */}
                  <div className="flex gap-2 items-start">
                    <Image
                      src="/assets/card/kilometers.png"
                      alt="Icon"
                      width={16}
                      height={16}
                    />
                    <div>
                      <p className="text-[14px] text-primaryText">Kilometers</p>
                      <p className="text-[14px] font-medium text-primaryText">
                        {car.kilometers} km Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Information */}
            <div className="mt-3 flex gap-2 items-start">
              <Image
                src="/assets/card/info.png"
                alt="Icon"
                width={14}
                height={14}
                className="pt-[3px]"
              />
              <p className="text-[14px] text-primaryText">
                Comprehensive insurance and theft protection{" "}
                <span className="font-semibold">
                  and deposit of €{car.deposit}
                </span>
              </p>
            </div>
          </div>
          {/* Card Right side */}
          <div className="flex-10/7 pl-0 lg:pl-4">
            {/* <div className="flex justify-between">
              <div>
                <p className="text-[18px] text-primaryText">Terrific</p>
                <p className="text-[14px] text-primaryTextLight">
                  Offer Evaluation
                </p>
              </div>
              <div>
                <p className="bg-[#F29D26] p-2 text-[18px] font-semibold text-white rounded-sm">
                  {car.rating}
                </p>
              </div>
            </div> */}
            <div className="flex flex-row lg:flex-col justify-between items-end gap-3">
              <div>
                <p className="text-[22px] font-medium text-primaryText text-left lg:text-right">
                  €{car.price}
                </p>
                <p className="text-[14px] text-primaryText">
                  Price for {car.days} days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/card/PayPal.png"
                  alt="Icon"
                  width={50}
                  height={34}
                  className="h-[34px] w-[50px]"
                />
                <Image
                  src="/assets/card/Visa.png"
                  alt="Icon"
                  width={50}
                  height={34}
                  className="h-[34px] w-[50px]"
                />
                <Image
                  src="/assets/card/Maestro.png"
                  alt="Icon"
                  width={50}
                  height={34}
                  className="h-[34px] w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            size="md"
            className="w-full sm:w-[150px]"
            onClick={() => router.push(`/view-details/${car.id}`)}
          >
            View Details
          </Button>
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-[150px]"
            onClick={() => router.push(`/checkout/${car.id}`)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
