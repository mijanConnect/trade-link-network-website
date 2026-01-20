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
import Image from "next/image";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    licenseNumber: "",
    licenseExpiry: "",
    licenseCountry: "",
    licenseFile: null as File | null,
    licensePreview: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File | null) => {
    if (!file) {
      setFormData((prev) => ({
        ...prev,
        licenseFile: null,
        licensePreview: "",
      }));
      return;
    }

    if (file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        licenseFile: file,
        licensePreview: previewUrl,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        licenseFile: file,
        licensePreview: "",
      }));
    }
  };

  return (
    <div className="inline-block p-4 lg:p-8 rounded-lg border border-gray-200 w-full md:w-auto md:min-w-[300px]">
      <ProfileImage />

      <div className="mt-10">
        <h2 className="mb-4 text-[20px] font-semibold">
          Driver License Information
        </h2>

        <div className="flex flex-col gap-4">
          <InputField
            title="Driver License Number"
            type="text"
            placeholder="Enter license number"
            initialValue={formData.licenseNumber}
            onChange={(value) => handleChange("licenseNumber", value)}
          />

          <SelectField
            title="Country of Issue"
            value={formData.licenseCountry}
            onChange={(e) => handleChange("licenseCountry", e.target.value)}
            options={[
              { label: "Bangladesh", value: "bangladesh" },
              { label: "India", value: "india" },
              { label: "USA", value: "usa" },
            ]}
          />

          <div className="w-full space-y-3">
            <label className="text-[16px] font-semibold text-primaryText">
              Expiration Date
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <button className="mt-1 w-full h-12 rounded-lg border border-[#E2E8F0] bg-[#F0F8FF] px-3 py-3 text-[14px] text-gray-900 outline-none flex items-center justify-between hover:border-primary/50">
                  <span>
                    {formData.licenseExpiry
                      ? format(new Date(formData.licenseExpiry), "MMM dd, yyyy")
                      : "Select expiration date"}
                  </span>
                  <CalendarIcon className="h-4 w-4 text-gray-400" />
                </button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={
                    formData.licenseExpiry
                      ? new Date(formData.licenseExpiry)
                      : undefined
                  }
                  onSelect={(date) => {
                    if (date) {
                      handleChange(
                        "licenseExpiry",
                        date.toISOString().split("T")[0]
                      );
                    }
                  }}
                  initialFocus
                  captionLayout="dropdown"
                  fromYear={2020}
                  toYear={2050}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-full space-y-3">
            <label className="text-[16px] font-semibold text-primaryText">
              Upload Driver’s License
            </label>

            <label className="mt-1 relative w-full h-[200px] rounded-lg border border-dashed border-[#E2E8F0] bg-[#F0F8FF] flex items-center justify-center cursor-pointer overflow-hidden hover:border-primary/50">
              {formData.licensePreview ? (
                <Image
                  src={formData.licensePreview}
                  alt="License Preview"
                  width={500}
                  height={200}
                  className="w-full h-full object-contain"
                />
              ) : formData.licenseFile ? (
                <span className="text-[14px] text-gray-600">
                  {formData.licenseFile.name}
                </span>
              ) : (
                <span className="text-[14px] text-gray-500">
                  Click to upload license image or PDF
                </span>
              )}

              <input
                type="file"
                accept="image/*,.pdf"
                className="absolute inset-0 opacity-0"
                onChange={(e) =>
                  handleFileUpload(e.target.files ? e.target.files[0] : null)
                }
              />
            </label>
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
