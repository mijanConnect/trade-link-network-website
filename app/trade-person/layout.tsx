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
      <div className=" ">
        <TradePersonHeader />
        <div className="mt-">{children}</div>
      </div>
    </div>
  );
}
