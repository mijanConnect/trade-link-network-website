"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import CarFunctionality from "./CarFunctionality";
import AdditionalFeatures from "./AdditionalFeatures";
import { Car } from "@/types/product";

const cars: Car[] = [
  {
    id: 1,
    name: "Audi S60",
    image: "/assets/card/car-1.png",
    star: 4,
    doors: 4,
    seats: 4,
    suitcases: 4,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1400,
    price: 46.91,
    days: 3,
    deposit: 250,
    rating: 8.6,
  },
  {
    id: 2,
    name: "BMW 5 Series",
    image: "/assets/card/car-2.png",
    star: 5,
    doors: 4,
    seats: 5,
    suitcases: 3,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Full to Full",
    kilometers: 1200,
    price: 59.99,
    days: 3,
    deposit: 300,
    rating: 9.1,
  },
  {
    id: 3,
    name: "Mercedes C Class",
    image: "/assets/card/car-3.png",
    star: 5,
    doors: 4,
    seats: 5,
    suitcases: 3,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1500,
    price: 55.5,
    days: 3,
    deposit: 280,
    rating: 8.9,
  },
  {
    id: 4,
    name: "Toyota Corolla",
    image: "/assets/card/car-4.png",
    star: 3,
    doors: 4,
    seats: 5,
    suitcases: 2,
    transmission: "Manual",
    climate: "AC",
    fuelPolicy: "Full to Full",
    kilometers: 1800,
    price: 32.75,
    days: 3,
    deposit: 200,
    rating: 8.2,
  },
  {
    id: 5,
    name: "Honda Civic",
    image: "/assets/card/car-5.png",
    star: 4,
    doors: 4,
    seats: 5,
    suitcases: 2,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1600,
    price: 38.9,
    days: 3,
    deposit: 220,
    rating: 8.5,
  },
];

interface DetailsAreaProps {
  carId: number | null;
}

export default function DetailsArea({ carId }: DetailsAreaProps) {
  const car = cars.find((c) => c.id === carId) || cars[0];

  return (
    <>
      <div className="flex gap-1.5 items-baseline">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < car.star
                ? "fill-gray-800 text-gray-800"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
        <p className="pl-1.5 text-yellow-400 text-[20px] font-medium">{car.rating}</p>
      </div>
      <div className="mt-1 flex justify-between items-baseline">
        <div>
          <h2 className="text-[26px] lg:text-[32px] font-medium text-primaryText">
            {car.name}
          </h2>
          <a
            href="#"
            className="text-[14px] lg:text-[18px] text-primaryTextLight mb-3 hover:underline inline-block"
          >
            Or similar upper class
          </a>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-[28px] lg:text-[36px] font-medium text-red-500">
            €{car.price}
          </h3>
          <p className="text-[14px] lg:text-[18px] text-primaryTextLight">
            Price for {car.days} days
          </p>
        </div>
      </div>
      <div className="mt-2 lg:mt-4">
        <Image
          src="/assets/view-details/hertz.png"
          alt="Car Image"
          width={110}
          height={40}
        />
        <a
          href="#"
          className="text-[14px] lg:text-[18px] text-primaryTextLight mt-1.5 hover:underline inline-block"
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
          PolicyType={car.fuelPolicy}
          PolicyDescription="You can return your rental car with the same fuel level as when you picked it up."
        />

        {/* Kilometers */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/meter.png"
          PolicyHeader="Kilometers"
          PolicyType={`${car.kilometers} km Free`}
          PolicyDescription="You can drive as much as you want without worrying about extra charges."
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between mt-3">
        {/* Extras */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/add.png"
          PolicyHeader="Extras"
          PolicyType="Included"
          PolicyDescription="Additional features such as GPS, child seats, and more are included in your rental."
        />
        {/* Winter Tires */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/tire.png"
          PolicyHeader="Winter Tires"
          PolicyType="Included"
          PolicyDescription="Your rental car comes equipped with winter tires for safe driving in cold conditions."
        />
      </div>
    </>
  );
}
