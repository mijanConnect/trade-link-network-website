import Image from "next/image";
import type { Lead } from "@/lib/trade-person/mock";
import TradePersonBadge from "@/app/components/trade-person/TradePersonBadge";

type Props = {
  lead: Lead;
  selected?: boolean;
  onClick?: () => void;
};

function statusTone(status: Lead["status"]) {
  if (status === "completed") return "success" as const;
  if (status === "hired") return "success" as const;
  if (status === "locked") return "warning" as const;
  return "neutral" as const;
}

function statusLabel(status: Lead["status"]) {
  if (status === "locked") return "Locked";
  if (status === "unlocked") return "Pending";
  if (status === "hired") return "Hired";
  return "Completed";
}

export default function LeadCard({ lead, selected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border p-4 text-left transition ${
        selected
          ? "border-primary bg-primary/5"
          : "border-slate-200 bg-white hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200">
            <Image
              src={lead.customerAvatar}
              alt={`${lead.customerName} avatar`}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-primaryText">
              {lead.customerName}
            </div>
            <div className="text-[11px] text-slate-500">{lead.customerAddress}</div>
          </div>
        </div>
        <div className="text-[11px] text-slate-500">{lead.createdAtLabel}</div>
      </div>

      <div className="mt-3">
        <div className="text-[14px] font-semibold text-primaryText">
          {lead.title}
        </div>
        <div className="mt-1 text-[12px] text-slate-600">{lead.summary}</div>
        <div className="mt-1 text-[12px] text-slate-500">{lead.budgetLabel}</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <TradePersonBadge label={statusLabel(lead.status)} tone={statusTone(lead.status)} />
        <div className="text-[13px] font-semibold text-primaryText">
          {lead.priceLabel}
        </div>
      </div>
    </button>
  );
}

