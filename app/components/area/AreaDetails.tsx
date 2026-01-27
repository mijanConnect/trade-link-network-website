
import PopularServices from "./PopularServices";

export default function AreaDetails() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:mb-25">
          <h2 className="text-[22px] lg:text-[40px] font-bold text-primaryText">
            Find Trusted Tradespeople in Greater London
          </h2>
          <p className="text-[14px] lg:text-[18px] text-primaryTextLight mt-4 lg:mt-10">
            Trade Link Network is a UK-wide marketplace that connects homeowners
            with verified tradespeople across Greater London. Whether you need
            landscaping, building work, repairs, or specialist services, our
            platform helps you reach suitable professionals in your area and
            manage everything online
          </p>

          <div>
            <h3 className="text-[22px] lg:text-[24px] font-semibold text-primaryText mt-6 mb-2 lg:mt-12 lg:mb-6">
              Sservice Available in This Region
            </h3>
            <h4 className="text-[18px] lg:text-[20px] font-medium text-primaryText mb-4 lg:mb-6">
              Popular services requested in Greater London include:
            </h4>
            <PopularServices />
          </div>
        </div>
      </div>
    </>
  );
}
