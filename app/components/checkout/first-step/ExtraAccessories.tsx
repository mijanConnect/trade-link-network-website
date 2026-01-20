"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Accessory = {
  id: number;
  title: string;
  price: number;
  icon: LucideIcon;
};

const accessoriesData: Accessory[] = [
  { id: 1, title: "CO₂ offsetting", price: 2.74, icon: Leaf },
  { id: 2, title: "Child seat", price: 5.0, icon: Leaf },
  { id: 3, title: "Extra luggage", price: 7.5, icon: Leaf },
  { id: 4, title: "Extra luggage", price: 7.5, icon: Leaf },
  { id: 5, title: "Extra luggage", price: 7.5, icon: Leaf },
];

type AccessoryItemProps = {
  item: Accessory;
};

function AccessoryItem({ item }: AccessoryItemProps) {
  const [count, setCount] = useState<number>(0);
  const Icon = item.icon;

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <div className="border border-stroke p-2 lg:p-5 rounded-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Icon className="w-8 h-8" />
          <div>
            <p className="text-[16px] lg:text-[20px] text-primaryText">
              {item.title}
            </p>
            <p className="text-[18px] text-primaryText font-bold">
              €{item.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex gap-6 border border-stroke rounded-sm px-4 py-2 items-center select-none">
          <button onClick={decrease} className="text-lg font-medium">
            −
          </button>
          <p className="w-4 text-center font-medium">{count}</p>
          <button onClick={increase} className="text-lg font-medium">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ExtraAccessories() {
  const leftItems = accessoriesData.slice(0, 3);
  const rightItems = accessoriesData.slice(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
      <div className="space-y-4 lg:space-y-8">
        {leftItems.map((item) => (
          <AccessoryItem key={item.id} item={item} />
        ))}
      </div>

      <div className="space-y-4 lg:space-y-8">
        {rightItems.map((item) => (
          <AccessoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
