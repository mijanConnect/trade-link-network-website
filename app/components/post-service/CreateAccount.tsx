import React from "react";
import InputField from "../ui/InputField";

export default function CreateAccount() {
  return (
    <div className="mt-6 lg:mt-10 space-y-6 lg:space-y-10">
      <div>
        <h3 className="block text-[18px] font-semibold text-primaryText mb-1">
          Postcode for the job
        </h3>
        <p className="text-[16px] text-primaryTextLight mb-4">
          To find tradepeople near you we need to know where the job is
        </p>
        <InputField
          placeholder="Eg. SW1A 2AB"
          onChange={(val) => console.log("Input changed:", val)}
        />
      </div>
      <div>
        <h3 className="block text-[18px] font-semibold text-primaryText mb-1">
          Your Email Address
        </h3>
        <p className="text-[16px] text-primaryTextLight mb-4">
          To get response from tradepeople easily we’ll share this email with
          them
        </p>
        <InputField
          placeholder="example.email@gmail.com"
          onChange={(val) => console.log("Input changed:", val)}
        />
      </div>
      <div>
        <h3 className="block text-[18px] font-semibold text-primaryText mb-1">
          Create an account to track your jobs
        </h3>
        <p className="text-[16px] text-primaryTextLight mb-4">
          To get response from tradepeople easily we’ll share this Information
          with them
        </p>
        <div className="space-y-4 lg:space-y-6">
          <InputField
            title="Name"
            placeholder="Your full name"
            onChange={(val) => console.log("Input changed:", val)}
          />
          <InputField
            title="Phone Number"
            placeholder="+44 1234 567890"
            onChange={(val) => console.log("Input changed:", val)}
          />
        </div>
      </div>
    </div>
  );
}
