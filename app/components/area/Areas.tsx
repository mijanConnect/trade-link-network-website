import ServiceList from "../ui/ServiceList";

const categories = [
  { id: 1, name: "Outdoor & Landscaping", slug: "outdoor-landscaping" },
  { id: 2, name: "Plumbing Services", slug: "plumbing-services" },
  { id: 3, name: "Electrical Work", slug: "electrical-work" },
  { id: 4, name: "Carpentry & Joinery", slug: "carpentry-joinery" },
  { id: 5, name: "Painting & Decorating", slug: "painting-decorating" },
  { id: 6, name: "Roofing Services", slug: "roofing-services" },
  { id: 7, name: "Heating & Cooling", slug: "heating-cooling" },
  { id: 8, name: "Flooring Installation", slug: "flooring-installation" },
  { id: 9, name: "Kitchen & Bathroom", slug: "kitchen-bathroom" },
  { id: 10, name: "General Maintenance", slug: "general-maintenance" },
];

export default function Areas() {
  return (
    <>
      <div>
        <h2 className="text-[24px] lg:text-[48px] font-semibold text-primaryText mb-4 lg:mb-12 text-center">
          Area Covered
        </h2>

        <h3 className="text-[20px] lg:text-[32px] font-bold text-center text-primaryTextLight">
          Categories
        </h3>

        <div className="mt-4 lg:mt-8">
          <ServiceList categories={categories} route="area" />
        </div>
      </div>
    </>
  );
}
