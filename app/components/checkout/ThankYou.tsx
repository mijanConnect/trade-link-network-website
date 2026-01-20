import Link from "next/link";
import Image from "next/image";

interface ThankYouProps {
  carId?: number;
}

export default function ThankYou({ carId = 1 }: ThankYouProps) {
  return (
    <div className="flex flex-col items-center mt-12">
      <Image
        src="/assets/thanks.png"
        alt="Car Image"
        width={500}
        height={500}
      />
      <h1 className="text-[32px] lg:text-[50px] text-primaryText font-bold text-center mt-4 lg:mt-6">
        Thank you!
      </h1>
      <p className="text-[16px] lg:text-[20px] text-primaryText font-medium text-center mt-1">
        Your payment was successful.
        <br />
        We appreciate your booking and look forward to hosting you! 🏡
      </p>
      <div className="flex gap-4 justify-center mt-4">
        <Link
          href="/"
          className="px-8 py-3 bg-primary text-white text-center rounded-md hover:bg-green-600 transition w-[170px]"
        >
          Go Home
        </Link>
        <Link
          href="/car-details"
          className="px-8 py-3 bg-gray-800 text-white text-center rounded-md hover:bg-gray-900 transition w-[170px]"
        >
          Browse Cars
        </Link>
      </div>
    </div>
  );
}
