export default function QuestionProgressBar() {
  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h2 className="text-[16px] lg:text-[18px] font-semibold text-primaryTextLight mb-2">
          Outdoor & Landscaping Service
        </h2>
        <div className="w-full bg-gray-200 border-2 border-gray-300 rounded-full h-3 mb-1 overflow-hidden">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="mb-2 lg:mb-6">
          <span className="text-[14px] font-medium text-primaryTextLight">
            06/10
          </span>
        </div>
        <h3 className="text-[22px] lg:text-[36px] font-bold text-primary leading-7 lg:leading-11">
          Post an Outdoor & Landscaping <br /> Services Job
        </h3>
      </div>
    </>
  );
}
