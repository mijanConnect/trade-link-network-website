"use client";

import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import Category from "@/app/components/car-details/Category";
import DetailsCars from "@/app/components/car-details/DetailsCars";
import PopularTab from "@/app/components/car-details/PopularTab";
import FilterPanel from "@/app/components/car-details/SideFilter";
import SideSearch from "@/app/components/car-details/SideSearch";
import Feedback from "@/app/components/car-details/Feedback";
import { SlidersHorizontal, X } from "lucide-react";

const sidebarAnimationStyles = `
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutToLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  
  .sidebar-open {
    animation: slideInFromLeft 0.3s ease-out forwards;
  }
  
  .sidebar-closed {
    animation: slideOutToLeft 0.3s ease-in forwards;
  }
`;

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <style>{sidebarAnimationStyles}</style>
      {/* Mobile Toggle Button */}
      <div className="xl:hidden flex items-center gap-2 my-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 text-primaryText border-b py-2 transition justify-between w-full cursor-pointer"
        >
          <FiFilter className="text-xl" />
          <span>
            {sidebarOpen ? (
              <X />
            ) : (
              <>
                <SlidersHorizontal />
              </>
            )}
          </span>
          {/* {sidebarOpen && <FiX className="text-lg ml-2" />} */}
        </button>
      </div>

      {/* Mobile Sidebar - Drawer without overlay */}
      {(sidebarOpen || true) && (
        <div
          className={`${
            sidebarOpen
              ? "fixed left-0 top-0 z-40 w-80 h-screen bg-white overflow-y-auto p-4 shadow-lg sidebar-open"
              : "fixed left-0 top-0 z-40 w-80 h-screen bg-white overflow-y-auto p-4 shadow-lg sidebar-closed"
          } xl:hidden`}
          onAnimationEnd={() => {
            if (!sidebarOpen) {
              // Sidebar will be removed after animation
            }
          }}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
          >
            <FiX className="text-xl" />
          </button>
          <div className="mt-8">
            <SideSearch />
            <FilterPanel />
          </div>
        </div>
      )}

      <div className="flex gap-4 my-5 lg:my-12 items-start">
        {/* Desktop Sidebar */}
        <div className="hidden xl:block flex-4/18">
          <SideSearch />
          <FilterPanel />
        </div>
        <div className="flex-14/18 gap-4 rounded-lg flex flex-col overflow-hidden">
          <Category />
          <PopularTab />
          <div className="flex flex-col xl:flex-row gap-4">
            {/* Map */}
            <div className="order-1 xl:order-2 w-full xl:w-[30%] rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0633996377896!2d90.40503067589765!3d23.780756587609194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1767518564822!5m2!1sen!2sbd"
                className="w-full h-[220px] xl:h-[668px] rounded-lg"
                loading="lazy"
              />
            </div>

            {/* List */}
            <div className="order-2 xl:order-1 w-full xl:w-[70%] rounded-lg">
              <DetailsCars />
            </div>
          </div>
        </div>
      </div>
      <Feedback />
    </>
  );
}
