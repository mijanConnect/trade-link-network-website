import { Star } from "lucide-react";
import SearchBar from "../ui/SearchBar";
import DropdownFilter from "../ui/DropdownFilter";

interface TopBarProps {
  carId?: number | null;
}

export default function TopBar({ carId }: TopBarProps) {
  return (
    <>
      <div className="flex gap-1.5 items-baseline">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < 4
                ? "fill-yellow-500 text-yellow-500"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
        <p className="pl-1.5 text-primaryText text-[24px] font-semibold">
          4.5/5
        </p>
      </div>
      <p className="description mb-6">Based on 1,120 reviews</p>

      <div className="flex justify-between gap-6">
        <div className="w-full md:w-1/5">
          <SearchBar />
        </div>

        <DropdownFilter />
      </div>
    </>
  );
}
