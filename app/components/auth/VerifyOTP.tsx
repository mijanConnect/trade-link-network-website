"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function VerifyOTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyOTP = async () => {
    if (!otp || otp.length < 4) {
      console.error("Invalid OTP");
      return;
    }

    setIsLoading(true);
    try {
      // Handle verify OTP logic here
      console.log("Verifying OTP:", otp);
      // After OTP is verified, navigate to update-password page
      router.push("/update-password");
    } catch (error) {
      console.error("OTP verification failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP");
    // Handle resend OTP logic here
  };

  return (
    <div className="bg-background shadow-sm p-4 lg:p-8 rounded-lg w-full max-w-[525px] border border-gray-200">
      <div className="flex justify-center mb-8 mt-2">
        <Image src="/assets/logo.png" alt="Logo" width={187} height={48} />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">
          Verify OTP
        </h1>
        <p className="text-[14px] text-primaryParagraph">
          Enter the OTP sent to your email
        </p>
      </div>
      <div className="w-full space-y-8">
        <InputField
          title="OTP"
          type="text"
          placeholder="Enter 4-digit OTP"
          initialValue={otp}
          onChange={(value) => setOtp(value.replace(/\D/g, "").slice(0, 4))}
        />

        <Button
          fullWidth
          variant="primary"
          size="md"
          onClick={handleVerifyOTP}
          disabled={isLoading || otp.length < 4}
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </Button>

        <div className="text-center">
          <p className="text-[15px] text-primaryParagraph">
            Didn&apos;t receive the code?{" "}
            <button
              onClick={handleResendOTP}
              className="text-primary font-semibold hover:underline"
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
