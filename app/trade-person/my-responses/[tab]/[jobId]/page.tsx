"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import LeadDetailPanel from "@/app/components/trade-person/LeadDetailPanel";
import { leadsMock } from "@/lib/trade-person/mock";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

type JobCard = {
  id: string;
  type: "in-progress" | "completed" | "pending";
  title: string;
  dateLabel: string;
  leadId: string;
};

const jobCardsMock: JobCard[] = [
  {
    id: "job_1",
    type: "in-progress",
    title: "Job Request Accepted",
    dateLabel: "17 Jan, 2020 - 08:45 pm",
    leadId: "lead_3",
  },
  {
    id: "job_2",
    type: "in-progress",
    title: "Job Request Accepted",
    dateLabel: "18 Jan, 2020 - 09:30 am",
    leadId: "lead_4",
  },
  {
    id: "job_3",
    type: "completed",
    title: "Successfully Completed",
    dateLabel: "17 Jan, 2026 - 08:45 pm",
    leadId: "lead_4",
  },
  {
    id: "job_4",
    type: "completed",
    title: "Successfully Completed",
    dateLabel: "15 Jan, 2026 - 02:20 pm",
    leadId: "lead_5",
  },
  {
    id: "job_5",
    type: "pending",
    title: "Response Sent",
    dateLabel: "20 Jan, 2026 - 10:15 am",
    leadId: "lead_1",
  },
  {
    id: "job_6",
    type: "pending",
    title: "Response Sent",
    dateLabel: "19 Jan, 2026 - 03:45 pm",
    leadId: "lead_2",
  },
  {
    id: "job_7",
    type: "pending",
    title: "Response Sent",
    dateLabel: "18 Jan, 2026 - 11:30 am",
    leadId: "lead_6",
  },
];

export default function MyResponsesJobPage() {
  const params = useParams();
  const router = useRouter();
  const tab = (params.tab as string) || "hired";
  const jobId = params.jobId as string;

  const selectedJob = jobCardsMock.find((j) => j.id === jobId);
  const selectedLead = selectedJob
    ? leadsMock.find((l) => l.id === selectedJob.leadId)
    : null;

  const inProgressJobs = jobCardsMock.filter((j) => j.type === "in-progress");
  const completedJobs = jobCardsMock.filter((j) => j.type === "completed");
  const pendingJobs = jobCardsMock.filter((j) => j.type === "pending");

  const isPending = tab === "pending";
  const isHired = tab === "hired";

  useEffect(() => {
    if (!selectedJob || (!isPending && !isHired)) {
      router.replace("/trade-person/my-responses/hired");
    }
  }, [selectedJob, isPending, isHired, router]);

  if (!selectedJob || !selectedLead) {
    return null;
  }

  return (
    <div className="flex h-[calc(100vh-120px)] ">
      {/* Left Sidebar */}
      <aside className="flex w-1/3 flex-col overflow-hidden rounded-lg border border-slate-200 bg-tradeBg">
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
            <Link
              href="/trade-person/my-responses/pending"
              className={`flex-1 rounded-md px-4 py-2 text-center text-[13px] font-semibold transition ${
                isPending
                  ? "bg-white text-primary"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Pending
            </Link>
            <Link
              href="/trade-person/my-responses/hired"
              className={`flex-1 rounded-md px-4 py-2 text-center text-[13px] font-semibold transition ${
                isHired
                  ? "bg-white text-primary"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Hired
            </Link>
          </div>
        </div>

        {/* Job List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {isHired && (
            <>
              {inProgressJobs.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-[14px] font-semibold text-primaryText">
                    Job In Progress
                  </h3>
                  <div className="space-y-3">
                    {inProgressJobs.map((job) => {
                      const lead = leadsMock.find((l) => l.id === job.leadId);
                      if (!lead) return null;
                      return (
                        <div key={job.id} className="space-y-4">
                          <Link
                          key={job.id}
                          href={`/trade-person/my-responses/hired/${job.id}`}
                          // className="space-y-3"
                        >
                          <button
                            type="button"
                            className={`w-full rounded-sm border p-4 text-left transition  ${
                              job.id === jobId
                                ? "border-primary border-2 bg-background"
                                : "border-slate-200 bg-white "
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[12px] text-slate-600">{job.title}</span>
                              <span className="text-[11px] text-slate-500">{job.dateLabel}</span>
                            </div>
                            <div className="mt-2 text-[14px] font-semibold text-primaryText">
                              You`ve Been Hired!
                            </div>
                            <p className="mt-1 text-[12px] text-slate-600">
                              Congratulations! A customer has hired you for their request. Please check
                              the job details and prepare to proceed.
                            </p>
                          </button>
                        </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {completedJobs.length > 0 && (
                <div>
                  <h3 className="mb-2 text-[14px] font-semibold text-primaryText">
                    Completed job
                  </h3>
                  <div className="space-y-3">
                    {completedJobs.map((job) => {
                      const lead = leadsMock.find((l) => l.id === job.leadId);
                      if (!lead) return null;
                      return (
                       <div key={job.id} className="space-y-4">
                         <Link
                          key={job.id}
                          href={`/trade-person/my-responses/hired/${job.id}`}
                        >
                          <button
                            type="button"
                            className={`w-full rounded-sm border p-4 text-left transition ${
                              job.id === jobId
                                ? "border-primary border-2 bg-background"
                                : "border-slate-200 bg-white "
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[12px] font-medium text-emerald-700">
                                {job.title}
                              </span>
                              <span className="text-[11px] text-slate-500">{job.dateLabel}</span>
                            </div>
                            <div className="mt-2 text-[14px] font-semibold text-primaryText">
                              You&apos;ve Been Hired!!
                            </div>
                            <p className="mt-1 text-[12px] text-slate-600">
                              Congratulations! A customer has hired you for their request. Please check
                              the job details and prepare to proceed.
                            </p>
                          </button>
                        </Link>
                       </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {isPending && (
            <>
              {pendingJobs.length > 0 ? (
                <div className="space-y-3">
                  {pendingJobs.map((job) => {
                    const lead = leadsMock.find((l) => l.id === job.leadId);
                    if (!lead) return null;
                    return (
                     <div key={job.id} className="space-y-4">
                       <Link
                        key={job.id}
                        href={`/trade-person/my-responses/pending/${job.id}`}
                      >
                        <button
                          type="button"
                          className={`w-full rounded-sm border p-4 text-left transition ${
                            job.id === jobId
                              ? "border-primary border-2 bg-background"
                              : "border-slate-200 bg-white "
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[12px] text-slate-600">{job.title}</span>
                            <span className="text-[11px] text-slate-500">{job.dateLabel}</span>
                          </div>
                          <div className="mt-2 text-[14px] font-semibold text-primaryText">
                            Waiting for Response
                          </div>
                          <p className="mt-1 text-[12px] text-slate-600">
                            Your response has been sent. Waiting for customer to review and respond.
                          </p>
                        </button>
                      </Link>
                     </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center text-slate-500">No pending jobs</div>
              )}
            </>
          )}
        </div>
      </aside>

      {/* Right Panel - Lead Details */}
      <div className="flex-1 w-2/3 overflow-y-auto bg-background pl-4">
        <LeadDetailPanel lead={selectedLead} source="my-responses" />
      </div>
    </div>
  );
}
