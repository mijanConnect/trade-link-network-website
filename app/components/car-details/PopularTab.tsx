"use client";

import { useState } from "react";

const tabs = [
  { id: "popular", label: "Most Popular" },
  { id: "highest", label: "Highest Offer Rating" },
  { id: "best", label: "Best Customer Rating" },
  { id: "low", label: "Lower Price" },
];

export default function PopularTab() {
  const [activeTab, setActiveTab] = useState("highest");

  return (
    <div className="w-full overflow-hidden">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b border-stroke overflow-x-auto scrollbar-hide whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-[16px] font-medium rounded-md transition-all duration-300 text-nowrap ${
              activeTab === tab.id
                ? "text-primary"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute left-0 -bottom-px w-full h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {/* Tabs Content */}
    </div>
  );
}
