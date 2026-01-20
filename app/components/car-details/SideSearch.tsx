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

export default function SideSearch() {
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(
    new Date(2026, 11, 11)
  );
  const [collectionTime, setCollectionTime] = useState<string>("11:00");
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(2026, 11, 11)
  );
  const [returnTime, setReturnTime] = useState<string>("11:00");
  const [openCollection, setOpenCollection] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

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
      <div className="border border-stroke p-3 rounded-lg">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border-b pb-1 mb-3 border-stroke">
          <MapPin className="h-4 sm:h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Enter location"
            className="flex-1 border-none outline-none font-medium text-[14px] sm:text-[16px]"
          />
        </div>
        {/* Date and Time Selection */}
        <div className="flex flex-col gap-2">
          {/* Collection Date and Time */}
          <Popover open={openCollection} onOpenChange={setOpenCollection}>
            <PopoverTrigger asChild>
              <div className="border border-stroke rounded-sm w-full cursor-pointer hover:bg-gray-50 transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1 flex flex-col gap-1 border-r border-stroke p-3">
                    <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                      Collection
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                      {formatDate(collectionDate)}
                    </p>
                  </div>
                  <div className="flex-1 p-3 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                        Time
                      </p>
                      <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                        {collectionTime}
                      </p>
                    </div>
                    <div>
                      <CalendarArrowUp className="h-4 sm:h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4 space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
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
              <div className="border border-stroke rounded-sm w-full cursor-pointer hover:bg-gray-50 transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1 flex flex-col gap-1 border-r border-stroke p-3">
                    <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                      Return
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                      {formatDate(returnDate)}
                    </p>
                  </div>
                  <div className="flex-1 p-3 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                        Time
                      </p>
                      <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                        {returnTime}
                      </p>
                    </div>
                    <div>
                      <CalendarArrowDown className="h-4 sm:h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4 space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
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
          className="w-full mt-4 border-primaryTextLight! text-primaryText! hover:bg-primaryTextLight/10 rounded-sm "
          variant="outline"
          size="md"
        >
          Search
        </Button>
      </div>
    </>
  );
}
