"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import ProfileImage from "./ProfileImage";
import InputField from "../ui/InputField";
import ChangePassword from "./ChangePassword";

export default function RightSide() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <>
      <div>
        <ProfileImage />

        <div className="mt-6 lg:mt-12 flex flex-col gap-4 min-w-full lg:min-w-[600px] max-w-[600px]">
          <InputField
            title="Name"
            type="text"
            placeholder="Enter name"
            // initialValue={formData.firstName}
            // onChange={(value) => handleChange("firstName", value)}
          />

          <InputField
            title="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            // initialValue={formData.phone}
            // onChange={(value) => handleChange("phone", value)}
          />

          <InputField
            title="Email Address"
            type="email"
            placeholder="Enter email address"
            // initialValue={formData.email}
            // onChange={(value) => handleChange("email", value)}
          />
        </div>
        {showChangePassword && <ChangePassword />}
        <Button
          variant="outline"
          className="mt-6 lg:mt-8 w-[200px]"
          onClick={() => setShowChangePassword(!showChangePassword)}
        >
          {showChangePassword ? "Hide Password" : "Change Password"}
        </Button>
        <Button className="mt-6 lg:mt-8 w-[200px]">Save Changes</Button>
      </div>
    </>
  );
}
