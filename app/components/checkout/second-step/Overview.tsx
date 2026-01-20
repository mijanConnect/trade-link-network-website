import { CircleCheck, Clock } from "lucide-react";
import Image from "next/image";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

interface OverviewProps {
  carId?: number;
}

export default function Overview({ carId = 1 }: OverviewProps) {
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/checkout/${carId}?step=3`);
  };

  return (
    <>
      <div className="mt-6 lg:mt-14 border border-stroke px-4 lg:px-11 py-5 lg:py-[34px] rounded-2xl">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] lg:text-[32px] font-bold text-primaryText">
              Your Overview
            </h1>
            <p className="text-[20px] text-primaryText mt-1">
              Total Price for 3 days
            </p>
            <h2 className="text-[24px] font-bold text-primaryText mt-1.5">
              €59.79
            </h2>
            <p className="text-[18px] text-primary mt-2">
              Free cancellation up to 24h before pickup
            </p>
          </div>
          <p className="bg-primary text-white px-4 py-2 rounded-full inline-block text-[12px] lg:text-[18px] whitespace-nowrap">
            Great Deal!
          </p>
        </div>
        {/* Car details */}
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-3 border-b pb-4 border-t pt-7 border-stroke">
          <div>
            <div className="flex gap-4">
              <div className="border p-2 rounded-sm w-full md:w-auto">
                <div className="relative w-full h-[220px] md:w-[150px] md:h-[150px] overflow-hidden">
                  <Image
                    src="/assets/view-details/car-1.png"
                    alt="Car Image"
                    fill
                    className="object-cover rounded-sm"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="order-2 md:order-1 flex flex-col">
              <div>
                <h3 className="text-[20px] font-bold text-primaryText">
                  Ford Fiesta
                </h3>
                <div className="flex gap-2 mt-2">
                  <p className="description">Hertz</p>
                  <div className="border-r-2 border-primaryTextLight"></div>
                  <p className="description">Basic Protection</p>
                </div>
              </div>

              <div className="mt-4">
                <ul>
                  <li className="description mt-1.5 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    <p className="text-[18px] text-primaryTextLight">
                      Pickup: Mon, Dec 11, 2026, 1:00 PM
                    </p>
                  </li>
                  <li className="description mt-1.5 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <p className="text-[18px] text-primaryTextLight">
                      Return: Thu, Dec 14, 2026, 1:00 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-6 justify-between items-end">
          <div>
            <h4 className="text-[24px] text-primaryText font-medium">
              Rental Requirements:
            </h4>
            <ul>
              <li className="description mt-1.5 flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-primary" />
                <p className="text-[18px] text-primaryTextLight">
                  You&apos;ll need a valid driver&apos;s license and credit card
                  in the main driver&apos;s name.
                </p>
              </li>
              <li className="description mt-1.5 flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-primary" />
                <p className="text-[18px] text-primaryTextLight">
                  Ensure your credit card has sufficient limit for the deposit.
                </p>
              </li>
            </ul>
          </div>
          <Button
            variant="primary"
            className="w-full md:w-[270px]"
            onClick={handleContinue}
          >
            To The Final Step
          </Button>
        </div>
      </div>
    </>
  );
}
