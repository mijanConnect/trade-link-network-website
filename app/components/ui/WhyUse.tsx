import React from "react";
import { File, Phone, Budget, Prople, Plus } from "../Svg";

// Data for why use us section
const whyUseData = [
  {
    id: 1,
    icon: "File",
    title: "Trades see full job details upfront",
  },
  {
    id: 2,
    icon: "Phone",
    title: "No endless phone calls",
  },
  {
    id: 3,
    icon: "Budget",
    title: "Clear budgets & timelines",
  },
  {
    id: 4,
    icon: "Users",
    title: "Local professionals only",
  },
  {
    id: 5,
    icon: "Plus",
    title: "Free to post a job",
  },
];

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  File: <File />,
  Phone: <Phone />,
  Budget: <Budget />,
  Users: <Prople />,
  Plus: <Plus />,
};

// Reusable WhyUseCard component
interface WhyUseCardProps {
  icon: string;
  title: string;
}

function WhyUseCard({ icon, title }: WhyUseCardProps) {
  return (
    <div className="flex flex-col items-center bg-white py-8 md:py-12 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#E9EBEF] inline-block p-5 rounded-full mb-7">
        {iconMap[icon] || <File />}
      </div>
      <h3 className="text-[18px] md:text-[20px] text-primary font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}

export default function WhyUse() {
  return (
    <div className="py-6 md:py-10 lg:py-[130px]">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Header Section */}
        <div className="mb-4 md:mb-6 lg:mb-20 text-center">
          <h1 className="text-[20px] md:text-[40px] font-semibold text-primaryText">
            Why use Us
          </h1>
          <p className="text-[16px] md:text-[24px] text-primaryTextLight mt-4">
            Why homeowners use us
          </p>
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {whyUseData.map((item) => (
            <WhyUseCard key={item.id} icon={item.icon} title={item.title} />
          ))}
          {/* Empty placeholder to center last 2 items */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}
