import type { Metadata } from "next";
import type { ReactNode } from "react";
import TradePersonHeader from "@/app/components/trade-person/TradePersonHeader";

export const metadata: Metadata = {
  title: "Tradeperson Dashboard | TradeLink Network",
  description:
    "Manage leads, responses, and your trade profile on TradeLink Network.",
  robots: { index: false, follow: false },
};

export default function TradePersonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#eef1f4]">
      <div className="mx-auto max-w-[1280px] px-4 py-6">
        <TradePersonHeader />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
