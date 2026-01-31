import ServiceList from "../ui/ServiceList";
import { categories } from "./Categories";

export default function Services() {
  return (
    <>
      <div>
        <h2 className="text-[24px] lg:text-[48px] font-semibold text-primaryText mb-4 lg:mb-12 text-center">
          Services
        </h2>

        <h3 className="text-[20px] lg:text-[32px] font-bold text-center text-primaryTextLight">
          Categories we offer
        </h3>

        <div className="mt-4 lg:mt-8">
          <ServiceList categories={categories} route="services" />
        </div>
      </div>
    </>
  );
}
