"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Handle login logic here
      console.log("Logging in user:", { email });
      // After login, navigate to dashboard or home page
      router.push("/");
    } catch (error) {
      setError("Failed to login. Please try again.");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background shadow-sm p-4 lg:p-8 rounded-lg w-full max-w-[525px] border border-gray-200">
      <div className="flex justify-center mb-8 mt-2">
        <Image
          src="/assets/logo.png"
          alt="Login Image"
          width={187}
          height={48}
        />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">Login</h1>
        <p className="text-[15px] text-primaryParagraph">
          Login to access your travelwise account
        </p>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-[14px]">
          {error}
        </div>
      )}
      <div className="w-full space-y-4">
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
      </div>
      <p
        className="text-right text-[15px] font-medium text-red-600 cursor-pointer mt-2 hover:underline"
        onClick={() => router.push("/forgot-password")}
      >
        Forgot Password?
      </p>
      <div className="mt-6">
        <Button
          fullWidth
          variant="primary"
          size="md"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
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
            alt="Login Image"
            width={20}
            height={20}
          />
          Continue with Google
        </Button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-[15px]">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="font-semibold text-primary cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
