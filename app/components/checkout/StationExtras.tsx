import { useRouter } from "next/navigation";
import ExtraAccessories from "./first-step/ExtraAccessories";
import SelectedCarDetails from "./first-step/SelectedCarDetails";
import Button from "../ui/Button";
import PickupInfor from "./first-step/PickupInfor";

interface StationExtrasProps {
  carId?: number;
}

export default function StationExtras({ carId = 1 }: StationExtrasProps) {
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/checkout/${carId}?step=2`);
  };
  return (
    <>
      <div className="border border-stroke p-4 lg:p-6 rounded-lg mt-6">
        <PickupInfor carId={carId} />
      </div>
      <div className="mt-10 lg:mt-15 border border-stroke rounded-md">
        <SelectedCarDetails />
      </div>
      {/* Extras */}
      <div className="p-4 lg:p-6 mt-10 lg:mt-15 border border-stroke rounded-md">
        <h2 className="text-[20px] lg:text-[24px] font-semibold text-primaryText">
          Select extra and accessories
        </h2>
        <div className="mt-6">
          <ExtraAccessories />
        </div>
      </div>
      <div className="flex justify-center">
        {/* Spacer for bottom fixed bar */}
        <Button className="mt-6 lg:mt-12 w-full lg:w-[350px]" onClick={handleContinue}>
          Continue to your details
        </Button>
      </div>
    </>
  );
}
