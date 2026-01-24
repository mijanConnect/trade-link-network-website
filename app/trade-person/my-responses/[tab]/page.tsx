"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import LeadDetailPanel from "@/app/components/trade-person/LeadDetailPanel";
import { leadsMock, type Lead } from "@/lib/trade-person/mock";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

type JobCard = {
  id: string;
  type: "in-progress" | "completed" | "pending";
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
    dateLabel: "18 Jan, 2020 - 09:30 am",
    lead: leadsMock[3]!,
  },
  {
    id: "job_3",
    type: "completed",
    title: "Successfully Completed",
    dateLabel: "17 Jan, 2026 - 08:45 pm",
    lead: leadsMock[3]!,
  },
  {
    id: "job_4",
    type: "completed",
    title: "Successfully Completed",
    dateLabel: "15 Jan, 2026 - 02:20 pm",
    lead: leadsMock[4]!,
  },
  {
    id: "job_5",
    type: "pending",
    title: "Response Sent",
    dateLabel: "20 Jan, 2026 - 10:15 am",
    lead: leadsMock[0]!,
  },
  {
    id: "job_6",
    type: "pending",
    title: "Response Sent",
    dateLabel: "19 Jan, 2026 - 03:45 pm",
    lead: leadsMock[1]!,
  },
  {
    id: "job_7",
    type: "pending",
    title: "Response Sent",
    dateLabel: "18 Jan, 2026 - 11:30 am",
    lead: leadsMock[5]!,
  },
];

export default function MyResponsesTabPage() {
  const params = useParams();
  const router = useRouter();
  const tab = (params.tab as string) || "hired";
  const jobId = params.jobId as string | undefined;

  const inProgressJobs = jobCardsMock.filter((j) => j.type === "in-progress");
  const completedJobs = jobCardsMock.filter((j) => j.type === "completed");
  const pendingJobs = jobCardsMock.filter((j) => j.type === "pending");

  const isPending = tab === "pending";
  const isHired = tab === "hired";

  const currentJobs = isHired ? [...inProgressJobs, ...completedJobs] : pendingJobs;
  const defaultJobId = currentJobs[0]?.id;

  // Redirect invalid tabs to hired
  useEffect(() => {
    if (!isPending && !isHired) {
      router.replace("/trade-person/my-responses/hired");
    }
  }, [isPending, isHired, router]);

  // Redirect to default job if no job selected
  useEffect(() => {
    if (!jobId && defaultJobId && (isPending || isHired)) {
      router.replace(`/trade-person/my-responses/${tab}/${defaultJobId}`);
    }
  }, [jobId, defaultJobId, tab, router, isPending, isHired]);

  const selectedJob = jobId ? jobCardsMock.find((j) => j.id === jobId) : null;
  const selectedLead = selectedJob ? selectedJob.lead : null;

  if (!isPending && !isHired) {
    return null;
  }

  return (
    <div className="flex h-[calc(100vh-120px)] gap-4">
   

     
    </div>
  );
}
