import JobCard from "./JobCard";
import { Star } from "lucide-react";

const RecentJobs = [
  {
    id: "job-004",
    title: "Electrical safety inspection",
    postedOn: "Posted 08 Jan, 2026",
    description:
      "A thorough inspection of your electrical system to identify potential hazards, faulty wiring, and code compliance issues. We ensure your home or workplace is safe, reliable, and up to current safety standards.",
    actions: [
      {
        label: "View Profile",
        variant: "outline" as const,
      },
      { label: "Mark as Completed", variant: "primary" as const },
    ],
  },
  {
    id: "job-005",
    title: "Kitchen cabinetry install",
    postedOn: "Posted 05 Jan, 2026",
    description:
      "A thorough inspection of your electrical system to identify potential hazards, faulty wiring, and code compliance issues. We ensure your home or workplace is safe, reliable, and up to current safety standards.",
    actions: [
      {
        label: "View Profile",
        variant: "outline" as const,
      },
      { label: "Mark as Completed", variant: "primary" as const },
    ],
  },
];

const HistoryJobs = [
  {
    id: "job-003",
    title: "2-bedroom interior painting",
    postedOn: "Posted 10 Jan, 2026",
    description:
      "Painters notified. Expect interest soon; review color palette before confirming.",
    actions: [
      {
        id: "rating-003",
        label: "Review",
        variant: "outline" as const,
        className:
          "group border-[#FF8D28]! text-[#FF8D28]! hover:bg-[#FF8D28]! hover:text-white!",
      },
      {
        label: "Completed",
        variant: "primary" as const,
        className:
          "bg-[#4CAF50]! border-[#4CAF50]! hover:bg-[#4CAF50]/90! hover:text-white",
      },
    ],
  },
  {
    id: "job-004",
    title: "Electrical safety inspection",
    postedOn: "Posted 08 Jan, 2026",
    description:
      "Licensed electricians will reach out to confirm appointment slots.",
    actions: [
      {
        id: "rating-004",
        label: "4.5",
        icon: (
          <Star className="h-4 w-4 fill-[#FF8D28] text-[#FF8D28] group-hover:fill-white group-hover:text-white" />
        ),
        variant: "outline" as const,
        className:
          "group border-[#FF8D28]! text-[#FF8D28]! hover:bg-[#FF8D28]! hover:text-white!",
      },
      {
        label: "Completed",
        variant: "primary" as const,
        className:
          "bg-[#4CAF50]! border-[#4CAF50]! hover:bg-[#4CAF50]/90! hover:text-white",
      },
    ],
  },
];

export default function HiredJobs() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h3 className="text-[22px] font-bold text-primaryText">Recent</h3>
        {RecentJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            postedOn={job.postedOn}
            description={job.description}
            actions={job.actions}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 mt-10 lg:mt-20">
        <h3 className="text-[22px] font-bold text-primaryText">History</h3>
        {HistoryJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            postedOn={job.postedOn}
            description={job.description}
            actions={job.actions}
          />
        ))}
      </div>
    </>
  );
}
