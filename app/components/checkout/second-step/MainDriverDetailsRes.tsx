import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InputField from "../../ui/InputField";
import { useState } from "react";

export default function MainDriverDetailsRes() {
  const [title, setTitle] = useState("mr");

  return (
    <div>
      <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
        Main Driver Details
      </h1>

      <RadioGroup
        value={title}
        onValueChange={setTitle}
        className="flex gap-4 mt-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mr" id="mr" />
          <label
            htmlFor="mr"
            className="text-[20px] text-primaryText cursor-pointer"
          >
            Mr
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mrs" id="mrs" />
          <label
            htmlFor="mrs"
            className="text-[20px] text-primaryText cursor-pointer"
          >
            Mrs
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dr" id="dr" />
          <label
            htmlFor="dr"
            className="text-[20px] text-primaryText cursor-pointer"
          >
            Dr
          </label>
        </div>
      </RadioGroup>

      <div className="w-full space-y-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <InputField
            title="First Name"
            type="text"
            placeholder="Enter your first name"
          />

          <InputField
            title="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        <InputField title="Email" placeholder="Enter your email" type="email" />

        <InputField title="Birth Date" type="date" />

        <InputField
          title="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
