"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Handle update password logic here
      console.log("Updating password");
      // After password is updated, navigate to success page
      router.push("/update-password-success");
    } catch (error) {
      setError("Failed to update password. Please try again.");
      console.error("Password update failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const passwordsMatch =
    newPassword && confirmPassword && newPassword === confirmPassword;
  const passwordMismatch =
    newPassword && confirmPassword && newPassword !== confirmPassword;

  return (
    <div className="bg-background shadow-sm p-4 lg:p-8 rounded-lg w-full max-w-[525px] border border-gray-200">
      <div className="flex justify-center mb-8 mt-2">
        <Image src="/assets/logo.png" alt="Logo" width={187} height={48} />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">
          Update Password
        </h1>
        <p className="text-[15px] text-primaryParagraph">
          Enter your new password to reset your account
        </p>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-[14px]">
          {error}
        </div>
      )}
      <div className="w-full space-y-4">
        <InputField
          title="New Password"
          type="password"
          placeholder="Enter your new password"
          initialValue={newPassword}
          onChange={(value) => {
            setNewPassword(value);
            setError("");
          }}
        />

        <div>
          <InputField
            title="Confirm Password"
            type="password"
            placeholder="Confirm your new password"
            initialValue={confirmPassword}
            onChange={(value) => {
              setConfirmPassword(value);
              setError("");
            }}
          />
          {passwordMismatch && (
            <p className="text-red-600 text-[12px] mt-1">
              Passwords do not match
            </p>
          )}
          {passwordsMatch && (
            <p className="text-green-600 text-[12px] mt-1">Passwords match</p>
          )}
        </div>
      </div>
      <div className="mt-6">
        <Button
          fullWidth
          variant="primary"
          size="md"
          onClick={handleUpdatePassword}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Password"}
        </Button>
      </div>
    </div>
  );
}
