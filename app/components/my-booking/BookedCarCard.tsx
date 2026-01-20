"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { CarFront, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import CarViewModal from "./CarViewModal";
import WriteReviewModal from "./WriteReview";

/* ---------- status color map ---------- */
const STATUS_COLORS: Record<string, string> = {
  Pending: "#F6BB06",
  Completed: "#979997",
  Confirmed: "#39B15B",
  Cancelled: "#EB1616",
  Active: "#2563EB",
};

/* ---------- component ---------- */
interface CarType {
  id: string;
  name: string;
  status: string;
  vehicleType: string;
  pickup: string;
  return: string;
  image: string;
}

interface BookedCarCardProps {
  cars?: CarType[];
}

export default function BookedCarCard({ cars: propsCars }: BookedCarCardProps) {
  const router = useRouter();
  const carsToDisplay = propsCars || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);

  const handleViewDetails = (car: CarType) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleWriteReview = (car: CarType) => {
    setSelectedCar(car);
    setIsReviewModalOpen(true);
  };

  const renderActionButtons = (car: CarType) => {
    const commonClass = "w-full md:w-auto";

    switch (car.status) {
      case "Pending":
        return (
          <>
            <Button
              variant="outline"
              className={commonClass}
              onClick={() => handleViewDetails(car)}
            >
              View Details
            </Button>
            <Button
              variant="primary"
              className={`${commonClass} bg-[#F6BB06]! hover:bg-yellow-500! w-[200px] md:w-auto`}
              onClick={() => router.push(`/checkout/${car.id}?step=3`)}
            >
              Complete Payment
            </Button>
          </>
        );

      case "Confirmed":
        return (
          <>
            <Button
              variant="outline"
              className={commonClass}
              onClick={() => handleViewDetails(car)}
            >
              View Details
            </Button>
            <Button
              variant="primary"
              className={`${commonClass} bg-[#EB1616]! hover:bg-red-500! w-[200px] md:w-auto`}
              onClick={() => router.push(`/checkout/${car.id}?step=3`)}
            >
              Cancel Rental
            </Button>
          </>
        );

      case "Active":
        return (
          <>
            <Button
              variant="outline"
              className={commonClass}
              onClick={() => handleViewDetails(car)}
            >
              View Details
            </Button>
            <Button
              variant="primary"
              className={`${commonClass} bg-[#2563EB]! hover:bg-blue-700!`}
              onClick={() => router.push(`/checkout/${car.id}?step=1`)}
            >
              Extend Rental
            </Button>
          </>
        );

      case "Completed":
        return (
          <>
            <Button
              variant="outline"
              className={commonClass}
              onClick={() => handleWriteReview(car)}
            >
              Write a Review
            </Button>
            <Button
              variant="primary"
              className={commonClass}
              onClick={() => router.push(`/checkout/${car.id}?step=1`)}
            >
              Book Again
            </Button>
          </>
        );

      case "Cancelled":
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {carsToDisplay.map((car) => {
        const color = STATUS_COLORS[car.status];

        return (
          <div
            key={car.id}
            className="rounded-2xl border-l-4 border-r-2 border-t-2 border-b-2 max-w-[1200px]"
            style={{ borderColor: color }}
          >
            <div className="p-4 flex flex-col md:flex-row justify-between gap-5">
              {/* image */}
              <div className="border p-2 rounded-sm w-full md:w-auto">
                <div className="relative w-full h-[220px] md:w-[180px] md:h-[180px] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover rounded-sm"
                    priority
                  />
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold text-primaryText">
                      {car.name}
                    </h3>

                    <div className="mt-2">
                      <span
                        className="text-white px-4 py-2 inline-block rounded-full text-sm"
                        style={{ backgroundColor: color }}
                      >
                        {car.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul>
                      <li className="mt-1.5 flex items-center gap-2">
                        <CarFront className="h-5 w-5 text-primary" />
                        <p className="text-[18px] text-primaryTextLight">
                          Vehicle Type: {car.vehicleType}
                        </p>
                      </li>

                      <li className="mt-1.5 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <p className="text-[18px] text-primaryTextLight">
                          Pickup: {car.pickup}
                        </p>
                      </li>

                      <li className="mt-1.5 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <p className="text-[18px] text-primaryTextLight">
                          Return: {car.return}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* actions */}
                <div className="flex flex-col justify-end">
                  <div className="flex flex-col md:flex-row gap-4">
                    {renderActionButtons(car)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {isModalOpen && selectedCar && (
        <CarViewModal
          isOpen={isModalOpen}
          selectedCar={selectedCar}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Write Review Modal */}
      {isReviewModalOpen && selectedCar && (
        <WriteReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        />
      )}
    </div>
  );
}
