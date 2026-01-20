"use client";

import { useState } from "react";
import InputField from "../ui/InputField";
import ProfileImage from "./ProfileImage";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phone: "",
    gender: "",
    street: "",
    postalCode: "",
    country: "",
    city: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="inline-block p-4 lg:p-6 rounded-lg border border-gray-200 w-full md:w-auto md:min-w-[800px]">
      <ProfileImage />
      <div className="flex gap-10 mt-6 w-full lg:flex-row flex-col">
        {/* Left side */}
        <div className="flex-1">
          <h2 className="mb-4 text-[20px] font-semibold">
            Personal Information
          </h2>
          <div className="flex flex-col gap-3">
            <InputField
              title="First Name"
              type="text"
              placeholder="Enter first name"
              initialValue={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
            />

            <InputField
              title="Last Name"
              type="text"
              placeholder="Enter last name"
              initialValue={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
            />

            <InputField
              title="Email Address"
              type="email"
              placeholder="Enter email address"
              initialValue={formData.email}
              onChange={(value) => handleChange("email", value)}
            />

            <InputField
              title="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              initialValue={formData.phone}
              onChange={(value) => handleChange("phone", value)}
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
        </div>
      </div>
      <div className="flex justify-end mt-8 flex-col sm:flex-row gap-4">
        <Button variant="outline" size="md" className="w-full sm:w-[150px]">
          Cancel
        </Button>
        <Button variant="primary" size="md" className="w-full sm:w-[150px]">
          Update
        </Button>
      </div>
    </div>
  );
}
