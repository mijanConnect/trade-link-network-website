"use client";

import { useState } from "react";

type Item = {
  label: string;
  price: number;
};

type Section = {
  title: string;
  items: Item[];
};

const sections: Section[] = [
  {
    title: "Number of seats",
    items: [
      { label: "2 Seats", price: 90 },
      { label: "4 Seats", price: 120 },
      { label: "5 Seats", price: 150 },
      { label: "7 Seats", price: 180 },
      { label: "9 Seats", price: 220 },
    ],
  },
  {
    title: "Transmission",
    items: [
      { label: "Automatic", price: 160 },
      { label: "Manual", price: 110 },
    ],
  },
  {
    title: "Fuel type",
    items: [
      { label: "Petrol", price: 130 },
      { label: "Diesel", price: 140 },
      { label: "Electric", price: 200 },
      { label: "Hybrid", price: 170 },
    ],
  },
  {
    title: "Number of doors",
    items: [
      { label: "2 Doors", price: 100 },
      { label: "4 Doors", price: 140 },
      { label: "5 Doors", price: 160 },
    ],
  },
  {
    title: "Mileage limit",
    items: [
      { label: "Unlimited Mileage", price: 220 },
      { label: "200km per day limit", price: 120 },
      { label: "400km per day limit", price: 160 },
      { label: "20000km per day limit", price: 190 },
    ],
  },
  {
    title: "Fuel policy",
    items: [
      { label: "Full to Full", price: 130 },
      { label: "Full to Empty", price: 100 },
    ],
  },
  {
    title: "Rating and popularity",
    items: [
      { label: "Top Rated", price: 210 },
      { label: "Most Popular", price: 180 },
    ],
  },
];

export default function FilterAccordion() {
  const [openSections, setOpenSections] = useState<number[]>(
    sections.map((_, index) => index)
  );
  const [checked, setChecked] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  const handleMinChange = (value: number) => {
    setPriceRange(([_, max]) => [Math.min(value, max - 10), max]);
  };

  const handleMaxChange = (value: number) => {
    setPriceRange(([min, _]) => [min, Math.max(value, min + 10)]);
  };

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleItem = (value: string) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="border mt-4 border-stroke rounded-lg p-4">
      <div className="border-b pb-4 border-stroke">
        <p className="text-sm font-medium text-primaryText mb-3">Price range</p>

        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute h-2 bg-gray-400 rounded"
            style={{
              left: `${(priceRange[0] / 20000) * 100}%`,
              right: `${100 - (priceRange[1] / 20000) * 100}%`,
            }}
          />
        </div>

        <div className="relative">
          <input
            type="range"
            min={0}
            max={20000}
            value={priceRange[0]}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="absolute -top-3 w-full appearance-none bg-transparent"
          />
          <input
            type="range"
            min={0}
            max={20000}
            value={priceRange[1]}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="absolute -top-3 w-full appearance-none bg-transparent"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>€{priceRange[0]}</span>
          <span>€{priceRange[1]}</span>
        </div>
      </div>

      <div className="w-full max-w-sm">
        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);

          return (
            <div key={section.title} className="border-b last:border-b-0">
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between py-3 cursor-pointer"
              >
                <p className="text-sm font-medium text-primaryText">
                  {section.title}
                </p>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3 pb-4">
                  {section.items.map((item) => (
                    <label
                      key={item.label}
                      className="flex items-center justify-between text-sm cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={checked.includes(item.label)}
                          onChange={() => toggleItem(item.label)}
                          className="h-4 w-4 rounded border-stroke"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-gray-20000">€{item.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
