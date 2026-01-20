"use client";

import FinalStepContainer from "./third-step/FinalStepContainer";

interface FinalStepProps {
  carId?: number | null;
}

export default function FinalStep({ carId }: FinalStepProps) {
  const validCarId = carId && !isNaN(carId) ? carId : 1; // Ensure valid carId
  return (
    <>
      <div>
        <div>
          <FinalStepContainer carId={validCarId} />
        </div>
      </div>
    </>
  );
}
