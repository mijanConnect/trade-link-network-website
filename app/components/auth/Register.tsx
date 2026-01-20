"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //   const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    // if (!agreedToTerms) {
    //   setError("Please agree to the terms and conditions");
    //   return;
    // }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Handle registration logic here
      console.log("Registering user:", { firstName, lastName, email });
      // After registration, navigate to verify-otp page
      router.push("/verify-otp");
    } catch (error) {
      setError("Failed to register. Please try again.");
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background shadow-sm p-4 lg:p-8 rounded-lg w-full max-w-[650px] border border-gray-200">
      <div className="flex justify-center mb-8 mt-2">
        <Image src="/assets/logo.png" alt="Logo" width={187} height={48} />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">Sign Up</h1>
        <p className="text-[15px] text-primaryParagraph">
          Create an account to get started
        </p>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-[14px]">
          {error}
        </div>
      )}
      <div className="w-full space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            title="First Name"
            type="text"
            placeholder="Enter first name"
            initialValue={firstName}
            onChange={(value) => {
              setFirstName(value);
              setError("");
            }}
          />
          <InputField
            title="Last Name"
            type="text"
            placeholder="Enter last name"
            initialValue={lastName}
            onChange={(value) => {
              setLastName(value);
              setError("");
            }}
          />
        </div>

        <InputField
          title="Email"
          type="email"
          placeholder="Enter your email"
          initialValue={email}
          onChange={(value) => {
            setEmail(value);
            setError("");
          }}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            title="Password"
            type="password"
            placeholder="Enter your password"
            initialValue={password}
            onChange={(value) => {
              setPassword(value);
              setError("");
            }}
          />

          <InputField
            title="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            initialValue={confirmPassword}
            onChange={(value) => {
              setConfirmPassword(value);
              setError("");
            }}
          />
        </div>
      </div>

      {/* <div className="mt-4 flex items-start">
        <input
          type="checkbox"
          id="terms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="mt-1 mr-2 cursor-pointer"
        />
        <label htmlFor="terms" className="text-[14px] text-primaryParagraph">
          I agree to the{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">
            terms and conditions
          </span>
        </label>
      </div> */}

      <div className="mt-6">
        <Button
          fullWidth
          variant="primary"
          size="md"
          onClick={handleSignUp}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Sign Up"}
        </Button>
      </div>

      <div>
        <div className="my-6 flex items-center">
          <hr className="grow border-t border-stroke" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="grow border-t border-stroke" />
        </div>
      </div>

      <div>
        <Button fullWidth variant="secondary" size="md" className="mt-4">
          <Image
            src="/assets/google.png"
            alt="Google Logo"
            width={20}
            height={20}
          />
          Continue with Google
        </Button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-[15px]">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="font-semibold text-primary cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
