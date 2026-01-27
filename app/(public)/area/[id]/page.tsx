import AreaDetails from "@/app/components/area/AreaDetails";
import CTA from "@/app/components/ui/CTA";
import Steps from "@/app/components/ui/Steps";

export default function Page() {
  return (
    <>
      <div className="my-6 lg:mt-15 lg:mb-30">
        <AreaDetails />
        <Steps />
        <div className="mt-8 lg:mt-30">
          <CTA />
        </div>
      </div>
    </>
  );
}
