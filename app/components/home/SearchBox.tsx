"use client";

import React, { useState } from "react";
import { MapPin, CalendarArrowUp, CalendarArrowDown } from "lucide-react";
import Button from "../ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(
    new Date(2026, 11, 11),
  );
  const [collectionTime, setCollectionTime] = useState<string>("11:00");
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(2026, 11, 11),
  );
  const [returnTime, setReturnTime] = useState<string>("11:00");
  const [openCollection, setOpenCollection] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

  const router = useRouter();

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="shadow-[0_0_12px_rgba(0,0,0,0.15)] p-[15px] lg:p-[30px] rounded-lg mb-6 md:mb-13">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border-b pb-2 mb-5 border-stroke">
          <MapPin className="h-5 sm:h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Pickup location"
            className="flex-1 border-none outline-none font-medium text-[16px] sm:text-[20px]"
          />
        </div>
        {/* Date and Time Selection */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Collection Date and Time */}
          <Popover open={openCollection} onOpenChange={setOpenCollection}>
            <PopoverTrigger asChild>
              <div className="border border-stroke rounded-md w-full cursor-pointer hover:bg-gray-50 transition">
                <div className="flex justify-between">
                  <div className="flex-1 flex flex-col gap-1 border-r border-stroke px-3 lg:px-5 py-3.5">
                    <p className="text-[14px] sm:text-[18px] text-primaryParagraph">
                      Collection Date
                    </p>
                    <p className="text-[12px] sm:text-[16px] text-primaryParagraph">
                      {formatDate(collectionDate)}
                    </p>
                  </div>
                  <div className="flex-1 px-3 lg:px-5 py-3.5 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] sm:text-[18px] text-primaryParagraph">
                        Collection Time
                      </p>
                      <p className="text-[12px] sm:text-[16px] text-primaryParagraph">
                        {collectionTime}
                      </p>
                    </div>
                    <div>
                      <CalendarArrowUp className="h-5 sm:h-6 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <div className="p-4 space-y-4">
                <div className="flex gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Date</p>
                    <Calendar
                      mode="single"
                      selected={collectionDate}
                      onSelect={setCollectionDate}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Time</p>
                    <div className="flex items-center gap-2">
                      {/* <Clock className="h-4 w-4" /> */}
                      <input
                        type="time"
                        value={collectionTime}
                        onChange={(e) => setCollectionTime(e.target.value)}
                        className="border border-stroke rounded px-3 py-2"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenCollection(false)}
                  className="w-full bg-primary text-white py-2 rounded hover:opacity-90"
                >
                  Done
                </button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Return Date and Time */}
          <Popover open={openReturn} onOpenChange={setOpenReturn}>
            <PopoverTrigger asChild>
              <div className="border border-stroke rounded-md w-full cursor-pointer hover:bg-gray-50 transition">
                <div className="flex justify-between">
                  <div className="flex-1 flex flex-col gap-1 border-r border-stroke px-3 lg:px-5 py-3.5">
                    <p className="text-[14px] sm:text-[18px] text-primaryParagraph">
                      Return Date
                    </p>
                    <p className="text-[12px] sm:text-[16px] text-primaryParagraph">
                      {formatDate(returnDate)}
                    </p>
                  </div>
                  <div className="flex-1 px-3 lg:px-5 py-3.5 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] sm:text-[18px] text-primaryParagraph">
                        Return Time
                      </p>
                      <p className="text-[12px] sm:text-[16px] text-primaryParagraph">
                        {returnTime}
                      </p>
                    </div>
                    <div>
                      <CalendarArrowDown className="h-5 sm:h-6 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <div className="p-4 space-y-4">
                <div className="flex gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Date</p>
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      disabled={(date) =>
                        collectionDate
                          ? date < collectionDate
                          : date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Time</p>
                    <div className="flex items-center gap-2">
                      {/* <Clock className="h-4 w-4" /> */}
                      <input
                        type="time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        className="border border-stroke rounded px-3 py-2"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenReturn(false)}
                  className="w-full bg-primary text-white py-2 rounded hover:opacity-90"
                >
                  Done
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Button
          className="w-full mt-6"
          onClick={() => router.push("/car-details")}
        >
          Search
        </Button>
      </div>
    </>
  );
}
