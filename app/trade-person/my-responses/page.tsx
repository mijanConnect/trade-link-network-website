"use client";

import { useState } from "react";
import LeadCard from "@/app/components/trade-person/LeadCard";
import LeadDetailPanel from "@/app/components/trade-person/LeadDetailPanel";
import { leadsMock, type Lead } from "@/lib/trade-person/mock";
import { Briefcase, MapPin } from "lucide-react";

type JobCard = {
  id: string;
  type: "in-progress" | "completed";
  title: string;
  dateLabel: string;
  lead: Lead;
};

const jobCardsMock: JobCard[] = [
  {
    id: "job_1",
    type: "in-progress",
    title: "Job Request Accepted",
    dateLabel: "17 Jan, 2020 - 08:45 pm",
    lead: leadsMock[2]!,
  },
  {
    id: "job_2",
    type: "in-progress",
    title: "Job Request Accepted",
    dateLabel: "17 Jan, 2020 - 08:45 pm",
    lead: leadsMock[2]!,
  },
  {
    id: "job_3",
    type: "completed",
    title: "Successfully Completed",
    dateLabel: "17 Jan, 2026 - 08:45 pm",
    lead: leadsMock[3]!,
  },
];

export default function MyResponsesPage() {
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"pending" | "hired">("hired");

  const selectedLead = leadsMock.find((l) => l.id === selectedLeadId) ?? null;

  const inProgressJobs = jobCardsMock.filter((j) => j.type === "in-progress");
  const completedJobs = jobCardsMock.filter((j) => j.type === "completed");

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

        {/* Job List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {activeTab === "hired" && (
            <>
              {inProgressJobs.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-[14px] font-semibold text-primaryText">
                    Job In Progress
                  </h3>
                  <div className="space-y-3">
                    {inProgressJobs.map((job) => (
                      <button
                        key={job.id}
                        type="button"
                        onClick={() => setSelectedLeadId(job.lead.id)}
                        className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:bg-slate-50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] text-slate-600">{job.title}</span>
                          <span className="text-[11px] text-slate-500">{job.dateLabel}</span>
                        </div>
                        <div className="mt-2 text-[14px] font-semibold text-primaryText">
                          You've Been Hired!
                        </div>
                        <p className="mt-1 text-[12px] text-slate-600">
                          Congratulations! A customer has hired you for their request. Please check
                          the job details and prepare to proceed.
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {completedJobs.length > 0 && (
                <div>
                  <h3 className="mb-2 text-[14px] font-semibold text-primaryText">
                    Completed job
                  </h3>
                  <div className="space-y-3">
                    {completedJobs.map((job) => (
                      <button
                        key={job.id}
                        type="button"
                        onClick={() => setSelectedLeadId(job.lead.id)}
                        className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:bg-slate-50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-medium text-emerald-700">
                            {job.title}
                          </span>
                          <span className="text-[11px] text-slate-500">{job.dateLabel}</span>
                        </div>
                        <div className="mt-2 text-[14px] font-semibold text-primaryText">
                          You've Been Hired!!
                        </div>
                        <p className="mt-1 text-[12px] text-slate-600">
                          Congratulations! A customer has hired you for their request. Please check
                          the job details and prepare to proceed.
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === "pending" && (
            <div className="text-center text-slate-500">No pending jobs</div>
          )}
        </div>
      </aside>

      {/* Right Panel - Lead Details */}
      <div className="flex-1 overflow-y-auto">
        {selectedLead ? (
          <LeadDetailPanel lead={selectedLead} />
        ) : (
          <div className="flex h-[600px] items-center justify-center rounded-lg border border-slate-200 bg-white">
            <p className="text-slate-500">Select a job to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
