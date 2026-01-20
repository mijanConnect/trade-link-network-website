import MainDriverDetails from "./second-step/MainDriverDetails";
import Overview from "./second-step/Overview";
import PaymentMethod from "./second-step/PaymentMethod";

interface YourInformationProps {
  carId?: number;
}

export default function YourInformation({ carId = 1 }: YourInformationProps) {
  return (
    <>
      <div className="mt-2 lg:mt-6">
        <MainDriverDetails />
        <PaymentMethod />
        <Overview carId={carId} />
      </div>
    </>
  );
}
