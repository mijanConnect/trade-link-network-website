"use client";

import { useState } from "react";
import { format } from "date-fns";
import InputField from "../ui/InputField";
import ProfileImage from "./ProfileImage";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

export default function PersonalInfoOld() {
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
    <div className="inline-block p-4 lg:p-8 rounded-lg border border-gray-200 w-full md:w-auto md:min-w-[800px]">
      <ProfileImage />
      <div className="flex gap-10 mt-10 w-full lg:flex-row flex-col">
        {/* Left side */}
        <div className="flex-1">
          <h2 className="mb-4 text-[20px] font-semibold">
            Personal Information
          </h2>
          <div className="flex flex-col gap-4">
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

            <div className="w-full space-y-3">
              <label className="text-[16px] font-semibold text-primaryText">
                Birth Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="
                      mt-1
                      w-full
                      h-12
                      rounded-lg
                      border
                      border-[#E2E8F0]
                      bg-[#F0F8FF]
                      px-3
                      py-3
                      text-[14px]
                      text-gray-900
                      outline-none
                      transition
                      focus:border-primary
                      focus:ring-1
                      focus:ring-primary/20
                      flex
                      items-center
                      justify-between
                      hover:border-primary/50
                    "
                  >
                    <span>
                      {formData.birthDate
                        ? format(new Date(formData.birthDate), "MMM dd, yyyy")
                        : "Select a date"}
                    </span>
                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={
                      formData.birthDate
                        ? new Date(formData.birthDate)
                        : undefined
                    }
                    onSelect={(date) => {
                      if (date) {
                        handleChange(
                          "birthDate",
                          date.toISOString().split("T")[0]
                        );
                      }
                    }}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date > today;
                    }}
                    initialFocus
                    captionLayout="dropdown"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                  />
                </PopoverContent>
              </Popover>
            </div>

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
                { label: "Other", value: "other" },
              ]}
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <h2 className="mb-4 text-[20px] font-semibold">
            Residential Address
          </h2>
          <div className="flex flex-col gap-4">
            <InputField
              title="Street and House Number"
              type="text"
              placeholder="Enter street and house number"
              initialValue={formData.street}
              onChange={(value) => handleChange("street", value)}
            />

            <InputField
              title="Postal Code"
              type="text"
              placeholder="Enter postal code"
              initialValue={formData.postalCode}
              onChange={(value) => handleChange("postalCode", value)}
            />

            {/* Country */}
            <SelectField
              title="Choose Country"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              options={[
                { label: "Bangladesh", value: "bangladesh" },
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
              ]}
            />

            {/* City */}
            <SelectField
              title="Choose City"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              options={[
                { label: "Dhaka", value: "dhaka" },
                { label: "Chittagong", value: "chittagong" },
                { label: "Sylhet", value: "sylhet" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10 flex-col sm:flex-row gap-4">
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
