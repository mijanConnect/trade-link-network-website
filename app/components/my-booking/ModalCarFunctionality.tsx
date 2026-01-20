import Image from "next/image";

const carcarFeatures = [
  { src: "/assets/view-details/door.png", label: "4 Doors" },
  { src: "/assets/view-details/seat.png", label: "5 Seats" },
  { src: "/assets/view-details/suitcase.png", label: "2 Suitcases" },
  { src: "/assets/view-details/autometic.png", label: "Automatic" },
  { src: "/assets/view-details/climate.png", label: "Climate" },
];

export default function ModalCarFunctionality() {
  return (
    <div className="flex gap-2 items-center flex-wrap mt-2">
      {/* Doors */}
      {carcarFeatures.map((carFeatures) => (
        <div
          key={carFeatures.label}
          className="flex flex-col gap-1 lg:gap-2 items-center border px-2 py-2 md:px-4 rounded-sm border-strock"
        >
          <Image src={carFeatures.src} alt="Icon" width={18} height={18} />

          <p className="text-primaryText text-[12px] md:text-[16px]">
            {carFeatures.label}
          </p>
        </div>
      ))}
    </div>
  );
}
