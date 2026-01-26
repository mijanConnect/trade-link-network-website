"use client";

type DetailItem = { label: string; value: string };

type JobDetailsProps = {
  title?: string;
  postedOn?: string;
  details?: DetailItem[];
  locationDetails?: DetailItem[];
  personalDetails?: DetailItem[];
};

const defaultDetails: DetailItem[] = [
  { label: "Category", value: "Outdoor & Landscaping" },
  { label: "Service Type", value: "Landscaping" },
  { label: "Describe the Work", value: "Landscaping" },
  { label: "Garden Size", value: "Medium" },
  { label: "Include Groundwork or Drainage", value: "Yes" },
  { label: "Property Type", value: "Residential" },
  { label: "Approximate Budget", value: "$500 - $1000" },
];

const defaultLocation: DetailItem[] = [{ label: "Post Code", value: "00263" }];

const defaultPersonal: DetailItem[] = [
  { label: "Email", value: "user@example.com" },
  { label: "Mobile Number", value: "+263 71 234 5678" },
];

function DetailTable({ items }: { items: DetailItem[] }) {
  return (
    <table className="w-full text-sm lg:text-base">
      <tbody>
        {items.map((item, index) => (
          <tr key={`${item.label}-${index}`}>
            <td className="w-1/4 py-2 text-[16px] lg:text-[18px] text-primaryText">
              {item.label}
            </td>
            <td className="w-8 py-2 text-center text-[16px] lg:text-[18px] text-primaryText">
              :
            </td>
            <td className="py-2 text-[16px] lg:text-[18px] text-primaryText">
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function JobDetails({
  title = "Full garden renovation",
  postedOn = "Posted 14 Jan, 2026",
  details = defaultDetails,
  locationDetails = defaultLocation,
  personalDetails = defaultPersonal,
}: JobDetailsProps) {
  return (
    <div>
      <h1 className="text-[18px] text-primaryText lg:text-[24px] font-semibold">
        {title}
      </h1>
      <p className="mb-8 mt-0 text-[14px] text-gray-400 lg:mt-2 lg:text-[16px]">
        {postedOn}
      </p>

      <div className="space-y-6">
        <section>
          <h4 className="mb-3 text-[18px] font-bold text-primaryText">
            Details
          </h4>
          <DetailTable items={details} />
        </section>

        <section>
          <h4 className="mb-3 text-[20px] font-bold text-primaryText">
            Location
          </h4>
          <DetailTable items={locationDetails} />
        </section>

        <section>
          <h4 className="mb-3 text-[20px] font-bold text-primaryText">
            Personal Details
          </h4>
          <DetailTable items={personalDetails} />
        </section>
      </div>
    </div>
  );
}
