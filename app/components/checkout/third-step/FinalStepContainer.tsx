import React from "react";
import BookedCar from "./BookedCar";
import PriceCard from "./PriceCard";

interface FinalStepContainerProps {
  carId?: number;
}

export default function FinalStepContainer({ carId = 1 }: FinalStepContainerProps) {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row gap-12 items-start mt-10">
        <BookedCar />
        <PriceCard carId={carId} />
      </div>
    </>
  );
}
