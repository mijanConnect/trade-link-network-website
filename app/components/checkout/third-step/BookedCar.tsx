import { Clock } from "lucide-react";
import Image from "next/image";

export default function BookedCar() {
  return (
    <>
      <div>
        <div className="flex gap-3 items-center mb-8">
          <Image
            src="/assets/checkout/review.png"
            alt="Car Image"
            width={38}
            height={38}
          />
          <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
            Final Review & Booking
          </h1>
        </div>
        {/* Car details */}
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-3 border-b pb-4">
          <div>
            <div className="flex gap-4">
              <div className="border p-2 rounded-sm w-full md:w-auto">
                <div className="relative w-full h-[220px] md:w-40 md:h-40 overflow-hidden">
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
                  <li>
                    <p className="text-[18px] text-primary mt-2">
                      Free cancellation up to 24h before pickup
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Driver & Contact */}
        <div>
          <div className="flex gap-3 items-center mb-8 mt-12">
            <Image
              src="/assets/checkout/driver.png"
              alt="Car Image"
              width={38}
              height={38}
            />
            <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
              Driver & Contact
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-25">
            <div>
              <p className="text-[20px] text-primaryText font-semibold mb-3">
                Main Driver:
              </p>
              <ul>
                <li className="text-[20px] text-primaryText mb-2">John Doe</li>
                <li className="text-[20px] text-primaryText mb-2">
                  john.doe@example.com
                </li>
                <li className="text-[20px] text-primaryText">
                  +49 123 4567890
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[20px] text-primaryText font-semibold mb-3">
                Address:
              </p>
              <ul>
                <li className="text-[20px] text-primaryText mb-2">
                  Musterstr. 123
                </li>
                <li className="text-[20px] text-primaryText">
                  10178 Berlin, Germany
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Payment Method */}
        <div>
          <div className="flex gap-3 items-center mb-8 mt-12">
            <Image
              src="/assets/checkout/pay.png"
              alt="Car Image"
              width={38}
              height={38}
            />
            <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
              Payment Method
            </h1>
          </div>

          <div className="flex flex-col gap-4 mt-6 border border-stroke p-4 rounded-lg">
            <div className="text-[20px] text-primaryText flex justify-between w-full items-center">
              <div className="flex items-center gap-4 lg:gap-10">
                <div className="flex gap-4">
                  <Image
                    src="/assets/view-details/Visa.png"
                    alt="Visa"
                    width={75}
                    height={50}
                    className="h-[50px] w-[75px]"
                  />
                  <Image
                    src="/assets/view-details/Maestro.png"
                    alt="Maestro"
                    width={75}
                    height={50}
                    className="h-[50px] w-[75px]"
                  />
                </div>
                <p className="text-[20px] text-primaryText font-semibold hidden lg:block">
                  Credit Card (Visa / Mastercard)
                </p>
              </div>
              <button className="text-blue-500 underline cursor-pointer">
                Change
              </button>
            </div>
          </div>
          <p className="text-[18px] text-primaryTextLight mt-2">
            The required security deposit will be authorized on the main
            driver&apos;s credit card upon vehicle pickup.
          </p>
        </div>
      </div>
    </>
  );
}
