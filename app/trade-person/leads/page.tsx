"use client";

import { useState } from "react";
import LeadCard from "@/app/components/trade-person/LeadCard";
import LeadDetailPanel from "@/app/components/trade-person/LeadDetailPanel";
import { leadsMock } from "@/lib/trade-person/mock";
import { Briefcase, MapPin } from "lucide-react";

export default function LeadsPage() {
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(leadsMock[0]?.id ?? null);
  const [activeTab, setActiveTab] = useState<"pending" | "hired">("pending");

  const selectedLead = leadsMock.find((l) => l.id === selectedLeadId) ?? null;

  const filteredLeads = leadsMock.filter((lead) => {
    if (activeTab === "pending") {
      return lead.status === "locked" || lead.status === "unlocked";
    }
    return lead.status === "hired" || lead.status === "completed";
  });

  return (
    <div className="flex h-[calc(100vh-120px)] gap-4">
      {/* Left Sidebar */}
      <aside className="flex w-[380px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
        {/* Summary Header */}
        <div className="bg-primary px-5 py-6 text-white">
          <h1 className="text-[24px] font-bold">1,050 matching leads</h1>
          <div className="mt-3 flex flex-col gap-2 text-[13px]">
            <div className="flex items-center gap-2">
              <Briefcase size={14} />
              <span>02 Services</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Avondale, Harare</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("pending")}
              className={`flex-1 rounded-md px-4 py-2 text-[13px] font-semibold transition ${
                activeTab === "pending"
                  ? "bg-white text-primary"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Pending
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hired")}
              className={`flex-1 rounded-md px-4 py-2 text-[13px] font-semibold transition ${
                activeTab === "hired"
                  ? "bg-white text-primary"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Hired
            </button>
          </div>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] text-slate-600">
              Showing all {filteredLeads.length} Leads
            </span>
            <button
              type="button"
              className="rounded-md border border-slate-300 bg-white px-3 py-1 text-[12px] font-medium text-slate-700 hover:bg-slate-50"
            >
              Filter
            </button>
          </div>

          <div className="space-y-3">
            {filteredLeads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                selected={lead.id === selectedLeadId}
                onClick={() => setSelectedLeadId(lead.id)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Right Panel - Lead Details */}
      <div className="flex-1 overflow-y-auto">
        <LeadDetailPanel lead={selectedLead} />
      </div>
    </div>
  );
}
