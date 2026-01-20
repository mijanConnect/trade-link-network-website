import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PriceCardProps {
  carId?: number;
}

export default function PriceCard({ carId = 1 }: PriceCardProps) {
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/checkout/${carId}?step=4`);
  };

  return (
    <>
      <div className="border border-primary rounded-lg p-5 lg:p-8 min-w-full lg:min-w-[500px] shadow-[0_0_15px_rgba(0,0,0,0.25)]">
        <h1 className="text-[24px] text-primaryText font-bold mb-5">
          Total Booking Price
        </h1>
        <div className="flex justify-between mb-4">
          <p className="text-[20px] text-primaryText">Rental Fee (3 days)</p>
          <p className="text-[20px] text-primaryText">€59.79</p>
        </div>
        <div className="flex justify-between mb-4 border-b border-stroke pb-4">
          <p className="text-[20px] text-primaryText">Taxes & Fees</p>
          <p className="text-[20px] text-primaryText">€10.79</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[20px] text-primaryText font-semibold">
            Total Payable Now
          </p>
          <p className="text-[20px] text-primaryText font-semibold">€70.58</p>
        </div>

        <Button className="w-full mt-10" onClick={handleContinue}>
          Confirm & Book Now
        </Button>

        <p className="text-[18px] text-primaryTextLight mt-3 max-w-[480px] text-center">
          By clicking &quot;Confirm & Book Now&quot;, you accept the{" "}
          <Link
            href="/terms-conditions"
            className="text-blue-700 hover:text-blue-500 underline transition transform duration-200"
          >
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/cancellation-policy"
            className="text-blue-700 hover:text-blue-500 underline transition transform duration-200"
          >
            Cancellation Policy
          </Link>{" "}
          .
        </p>
      </div>
    </>
  );
}
