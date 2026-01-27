import ServiceDetails from "@/app/components/services/ServiceDetails";
import CTA from "@/app/components/ui/CTA";

export default function Page() {
  return (
    <>
      <div className="my-6 lg:mt-15 lg:mb-30">
        <ServiceDetails />
        <CTA />
      </div>
    </>
  );
}
