import { useState } from "react";
import InputField from "../../ui/InputField";
import SelectField from "../../ui/SelectField";

export default function MainDriverDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
        Main Driver Details
      </h1>
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
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <InputField
            title="Email"
            placeholder="Enter your email"
            type="email"
          />

          <InputField
            title="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <InputField
            title="Address"
            placeholder="Enter your address"
            type="text"
          />

          {/* Gender */}
          <SelectField
            title="Select Gender"
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <InputField
            title="Start Date"
            placeholder="Enter your start date"
            type="date"
          />

          <InputField
            title="End Date"
            placeholder="Enter your end date"
            type="date"
          />
        </div>
      </div>
    </div>
  );
}
