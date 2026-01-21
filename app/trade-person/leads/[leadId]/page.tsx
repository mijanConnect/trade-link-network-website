"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import LeadCard from "@/app/components/trade-person/LeadCard";
import LeadDetailPanel from "@/app/components/trade-person/LeadDetailPanel";
import { leadsMock } from "@/lib/trade-person/mock";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const leadId = params.leadId as string;

  const selectedLead = leadsMock.find((l) => l.id === leadId);

  useEffect(() => {
    if (!selectedLead && leadsMock.length > 0) {
      router.replace(`/trade-person/leads/${leadsMock[0]!.id}`);
    }
  }, [selectedLead, router]);

  if (!selectedLead) {
    return null;
  }

  return (
    <div className="flex h-[calc(100vh-120px)] gap-4">
      {/* Left Sidebar */}
      <aside className="flex w-1/3 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
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
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] text-slate-600">
              Showing all {leadsMock.length} Leads
            </span>
            <button
              type="button"
              className="rounded-md border border-slate-300 bg-white px-3 py-1 text-[12px] font-medium text-slate-700 hover:bg-slate-50"
            >
              Filter
            </button>
          </div>

          <div className="space-y-3">
            {leadsMock.map((lead) => (
              // href={`/trade-person/leads/${lead.id}`}
              <div key={lead.id} >
                <LeadCard
                  lead={lead}
                  selected={lead.id === leadId}
                  onClick={() => {router.push(`/trade-person/leads/${lead.id}`)}}
                />
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Right Panel - Lead Details */}
      <div className="flex-1 w-2/3 overflow-y-auto">
        <LeadDetailPanel lead={selectedLead} />
      </div>
    </div>
  );
}
