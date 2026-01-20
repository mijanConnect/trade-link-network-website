"use client";

import { useState } from "react";
import BookedCarCard from "./BookedCarCard";
import Image from "next/image";

/* ---------- car data ---------- */
const cars = [
  {
    id: "1",
    name: "Ford Fiesta or similar small cars",
    status: "Completed",
    vehicleType: "SUV",
    pickup: "Mon, Dec 11, 2026, 1:00 PM",
    return: "Thu, Dec 14, 2026, 1:00 PM",
    image: "/assets/view-details/car-1.png",
  },
  {
    id: "2",
    name: "Toyota Corolla or similar sedan",
    status: "Pending",
    vehicleType: "Sedan",
    pickup: "Tue, Dec 12, 2026, 10:00 AM",
    return: "Fri, Dec 15, 2026, 10:00 AM",
    image: "/assets/view-details/car-2.png",
  },
  {
    id: "3",
    name: "Nissan X Trail or similar SUV",
    status: "Confirmed",
    vehicleType: "SUV",
    pickup: "Wed, Dec 13, 2026, 9:00 AM",
    return: "Sat, Dec 16, 2026, 9:00 AM",
    image: "/assets/view-details/car-3.png",
  },
  {
    id: "4",
    name: "Hyundai i10 or similar hatchback",
    status: "Cancelled",
    vehicleType: "Hatchback",
    pickup: "Thu, Dec 14, 2026, 2:00 PM",
    return: "Sun, Dec 17, 2026, 2:00 PM",
    image: "/assets/view-details/car-4.png",
  },
  {
    id: "5",
    name: "Hyundai i10",
    status: "Active",
    vehicleType: "Hatchback",
    pickup: "Thu, Dec 14, 2026, 2:00 PM",
    return: "Sun, Dec 17, 2026, 2:00 PM",
    image: "/assets/view-details/car-5.png",
  },
];

const STATUS_MAP: Record<number, string | null> = {
  0: null,
  1: "Pending",
  2: "Active",
  3: "Confirmed",
  4: "Completed",
  5: "Cancelled",
};

export default function BookingTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "All",
    "Upcoming",
    "Running",
    "Confirmed",
    "Completed",
    "Cancelled",
  ];

  return (
    <div>
      <div className="flex gap-2 md:gap-4 items-center mb-1 lg:mb-3">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
          <Image
            src="/assets/my-booking/car-phone.png"
            alt="Car Image"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-[24px] lg:text-[48px] text-primaryText font-bold">
          My Booking Details
        </h1>
      </div>

      <p className="text-[14px] lg:text-[20px] text-primaryTextLight">
        View your upcoming, active, and past vehicle reservations. (Total:{" "}
        {cars.length})
      </p>

      {/* tabs scroll container */}
      <div className="mt-4 lg:mt-10 overflow-x-auto">
        <div className="flex gap-2 lg:gap-5 min-w-max pb-2">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            const statusFilter = STATUS_MAP[index];
            const count = statusFilter
              ? cars.filter((car) => car.status === statusFilter).length
              : cars.length;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`min-w-[140px] lg:min-w-[150px] rounded-md px-4 py-3 text-sm font-normal transition cursor-pointer whitespace-nowrap
                  ${
                    isActive
                      ? "border border-[#0563C1] bg-[#0563C1] text-white"
                      : "border border-gray-300 bg-white text-black hover:border-[#0563C1] hover:text-[#0563C1]"
                  }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 lg:mt-8 text-sm text-gray-700">
        {(() => {
          const statusFilter = STATUS_MAP[activeTab];
          const filteredCars = statusFilter
            ? cars.filter((car) => car.status === statusFilter)
            : cars;

          return filteredCars.length > 0 ? (
            <BookedCarCard cars={filteredCars} />
          ) : (
            <div>No bookings in this category.</div>
          );
        })()}
      </div>
    </div>
  );
}
