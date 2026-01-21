export type LeadHighlight = "Verified Phone" | "Frequent User" | "Urgent";

export type LeadStatus = "locked" | "unlocked" | "hired" | "completed";

export type Lead = {
  id: string;
  customerName: string;
  customerAddress: string;
  customerAvatar: string;
  createdAtLabel: string;
  title: string;
  summary: string;
  budgetLabel: string;
  status: LeadStatus;
  priceLabel: string;
  highlights: LeadHighlight[];
  jobDetails: { label: string; value: string }[];
};

export type TradePersonProfile = {
  businessName: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  tags: string[];
};

export type Review = {
  id: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  dateLabel: string;
  text: string;
};

export const tradePersonProfile: TradePersonProfile = {
  businessName: "ABC Company",
  avatar: "/assets/avatar-2.png",
  rating: 5.0,
  reviewCount: 32,
  tags: [
    "Full garden renovation",
    "Patios & paving",
    "Garden redesign / makeover",
    "More…",
  ],
};

export const leadsMock: Lead[] = [
  {
    id: "lead_1",
    customerName: "Vimbi Kai",
    customerAddress: "SW1A 2AB • Downing Street, London",
    customerAvatar: "/assets/avatar.png",
    createdAtLabel: "5h ago",
    title: "Full garden renovation",
    summary: "Small garden / No groundworks or drainage / Apartment",
    budgetLabel: "Under $5000 / Urgent",
    status: "locked",
    priceLabel: "£10.00",
    highlights: ["Verified Phone", "Frequent User", "Urgent"],
    jobDetails: [
      { label: "Garden size?", value: "Small" },
      { label: "Does the project include groundworks or drainage?", value: "Yes" },
      { label: "Property type?", value: "House" },
      { label: "Approximate budget?", value: "House" },
      { label: "Timing?", value: "Urgent" },
    ],
  },
  {
    id: "lead_2",
    customerName: "Vimbi Kai",
    customerAddress: "SW1A 2AB • Downing Street, London",
    customerAvatar: "/assets/avatar.png",
    createdAtLabel: "6h ago",
    title: "Full garden renovation",
    summary: "Small garden / No groundworks or drainage / Apartment",
    budgetLabel: "Under $5000 / Urgent",
    status: "unlocked",
    priceLabel: "£10.00",
    highlights: ["Verified Phone", "Frequent User", "Urgent"],
    jobDetails: [
      { label: "Garden size?", value: "Small" },
      { label: "Does the project include groundworks or drainage?", value: "Yes" },
      { label: "Property type?", value: "House" },
      { label: "Approximate budget?", value: "House" },
      { label: "Timing?", value: "Urgent" },
    ],
  },
  {
    id: "lead_3",
    customerName: "Vimbi Kai",
    customerAddress: "SW1A 2AB • Downing Street, London",
    customerAvatar: "/assets/avatar.png",
    createdAtLabel: "1d ago",
    title: "Full garden renovation",
    summary: "Small garden / No groundworks or drainage / Apartment",
    budgetLabel: "Under $5000 / Urgent",
    status: "hired",
    priceLabel: "£10.00",
    highlights: ["Verified Phone", "Frequent User", "Urgent"],
    jobDetails: [
      { label: "Garden size?", value: "Small" },
      { label: "Does the project include groundworks or drainage?", value: "Yes" },
      { label: "Property type?", value: "House" },
      { label: "Approximate budget?", value: "House" },
      { label: "Timing?", value: "Urgent" },
    ],
  },
  {
    id: "lead_4",
    customerName: "Vimbi Kai",
    customerAddress: "SW1A 2AB • Downing Street, London",
    customerAvatar: "/assets/avatar.png",
    createdAtLabel: "2d ago",
    title: "Full garden renovation",
    summary: "Small garden / No groundworks or drainage / Apartment",
    budgetLabel: "Under $5000 / Urgent",
    status: "completed",
    priceLabel: "£10.00",
    highlights: ["Verified Phone", "Frequent User", "Urgent"],
    jobDetails: [
      { label: "Garden size?", value: "Small" },
      { label: "Does the project include groundworks or drainage?", value: "Yes" },
      { label: "Property type?", value: "House" },
      { label: "Approximate budget?", value: "House" },
      { label: "Timing?", value: "Urgent" },
    ],
  },
];

export const reviewsMock: Review[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `review_${idx + 1}`,
  reviewerName: "Josh Peter",
  reviewerAvatar: "/assets/avatar.png",
  rating: 4,
  dateLabel: "5 February 2026",
  text: "I have used 263 Pros twice now for two completely different services and I've had a fantastic experience both times!",
}));

