import React from "react";
import Button from "../../ui/Button";
import { CarFront, CircleCheck, MapPin } from "lucide-react";
import Calendar24 from "@/components/ui/time-picker";
import { useRouter } from "next/navigation";

interface PickupInforProps {
  carId?: number;
}

export default function PickupInfor({ carId = 1 }: PickupInforProps) {
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/checkout/${carId}?step=2`);
  };

  return (
    <>
      <div className="flex gap-6 lg:gap-6 flex-col lg:flex-row">
        <div className="flex-1">
          <p className="text-[20px] lg:text-[24px] font-medium text-primaryText">
            Pick-up and return station
          </p>
          {/* Collection */}
          <div className="flex gap-4 items-start mt-4">
            <CarFront className="w-8 h-8 lg:w-14 lg:h-14 text-yellow-500" />
            <div>
              <h2 className="text-[20px] font-bold text-primaryText mb-1">
                Collection
              </h2>
              <p className="text-[18px] text-primaryTextLight mb-3">
                Friday, December 11, 2026
              </p>
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <div className="flex items-center gap-2 border p-1.5 rounded-sm">
                  <CircleCheck className="w-6 h-6 text-green-600" />
                  <Calendar24 />
                </div>
                <p className="text-[18px] text-primary">
                  Pickup time confirmed!
                </p>
              </div>
              <p className="text-[14px] md:text-[20px] text-primaryTextLight mt-2 lg:mt-4">
                Opening hours: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          {/* Return */}
          <div className="flex gap-4 items-start mt-6">
            <CarFront className="w-8 h-8 lg:w-14 lg:h-14 text-yellow-500" />
            <div>
              <h2 className="text-[20px] font-bold text-primaryText mb-1">
                Return
              </h2>
              <p className="text-[18px] text-primaryTextLight mb-4">
                Friday, December 11, 2026
              </p>
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <div className="flex items-center gap-2 border p-1.5 rounded-sm">
                  <CircleCheck className="w-6 h-6 text-green-600" />
                  <Calendar24 />
                </div>
                <p className="text-[18px] text-primary">
                  Pickup time confirmed!
                </p>
              </div>
              <p className="text-[14px] md:text-[20px] text-primaryTextLight mt-2 lg:mt-4">
                Opening hours: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          {/* Address */}
          <div className="flex gap-4 items-start mt-6">
            <MapPin className="w-8 h-8 lg:w-14 lg:h-14 text-yellow-500" />
            <div>
              <h2 className="text-[20px] font-bold text-primaryText mb-1">
                Address
              </h2>
              <p className="text-[18px] text-primaryTextLight mb-4">
                IHT Road, Mohakhali <br /> Dhaka-1212
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0633996377896!2d90.40503067589765!3d23.780756587609194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1767518564822!5m2!1sen!2sbd"
              className="w-full h-[220px] xl:h-[550px] rounded-sm"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-[24px] font-bold text-primaryText">€46.89</h2>
              <p className="text-[20px] font-medium text-primaryText">
                Total Price
              </p>
            </div>
            <div className="flex flex-col text-end">
              <p className="text-[18px] text-primaryText">3 Days</p>
              <p className="text-[12px] md:text-[16px] text-primaryText">
                Included taxes & fees
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[16px] text-primaryText">Included Services</p>
            <ul className="list-disc list-inside mt-2 text-[16px] text-primaryTextLight">
              <li>Collision Damage Waiver (CDW)</li>
              <li>Theft Protection (TP)</li>
              <li>Unlimited Mileage</li>
              <li>Airport Surcharge</li>
            </ul>
          </div>
          <Button className="w-full mt-6" onClick={handleContinue}>
            Continue to your details
          </Button>
          <p className="text-[14px] text-primaryTextLight mt-2">
            No risk. Free Cancellation Up to 24 hours before pickup
          </p>
        </div>
      </div>
    </>
  );
}
