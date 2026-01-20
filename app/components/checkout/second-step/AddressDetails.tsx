import React from "react";
import InputField from "../../ui/InputField";

export default function AddressDetails() {
  return (
    <div className="mt-6 lg:mt-10">
      <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
        Address Details
      </h1>

      <div className="w-full space-y-4 mt-6">
        <InputField
          title="Street and House Number"
          type="text"
          placeholder="Enter street and house number"
        />

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <InputField
            title="Postcode"
            type="text"
            placeholder="Enter postcode"
          />

          <InputField title="City" type="text" placeholder="Enter city" />
        </div>

        <InputField title="Country" type="text" placeholder="Enter country" />
      </div>
    </div>
  );
}
