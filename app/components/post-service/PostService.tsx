"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { CustomSelect } from "../ui/CustomSelect";
import InputField from "../ui/InputField";
import QuestionProgressBar from "./QuestionProgressBar";
import Questions from "./Questions";
import Link from "next/link";

export default function PostService() {
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const options = [
    { value: "new-garden", label: "New garden / blank canvas" },
    { value: "garden-redesign", label: "Garden redesign / makeover" },
    { value: "patios-paving", label: "Patios & paving" },
    { value: "decking", label: "Decking (timber or composite)" },
    { value: "fencing", label: "Fencing" },
    { value: "turfing", label: "Turfing / artificial grass" },
    { value: "groundworks-drainage", label: "Groundworks & drainage" },
    { value: "garden-maintenance", label: "Garden maintenance" },
    { value: "tree-surgery", label: "Tree surgery / tree work" },
    { value: "need-advice", label: "Not sure yet – need advice" },
  ];

  return (
    <>
      <div>
        <QuestionProgressBar />
        <div className="max-w-4xl">
          <div className="mb-10">
            <CustomSelect
              label="What best describes your Outdoor & landscaping project?"
              options={options}
              header="Select a category"
              placeholder="Choose a service category"
            />
            <div className="mt-8 flex gap-4">
              <Button variant="primary" className="w-[100px]">
                Next
              </Button>
            </div>
          </div>
          <Questions />

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="block text-[20px] font-semibold text-primaryText mb-1">
                Postcode for the job
              </h3>
              <p className="text-[16px] text-primaryTextLight mb-4">
                To find tradepeople near you we need to know where the job is
              </p>
              <InputField
                placeholder="Eg. SW1A 2AB"
                onChange={(val) => console.log("Input changed:", val)}
              />
            </div>
            <div>
              <h3 className="block text-[20px] font-semibold text-primaryText mb-1">
                Your Email Address
              </h3>
              <p className="text-[16px] text-primaryTextLight mb-4">
                To get response from tradepeople easily we’ll share this email
                with them
              </p>
              <InputField
                placeholder="example.email@gmail.com"
                onChange={(val) => console.log("Input changed:", val)}
              />
            </div>
            <div>
              <h3 className="block text-[20px] font-semibold text-primaryText mb-1">
                Create an account to track your jobs
              </h3>
              <p className="text-[16px] text-primaryTextLight mb-4">
                To get response from tradepeople easily we’ll share this
                Information with them
              </p>
              <div className="space-y-6">
                <InputField
                  title="Name"
                  placeholder="Your full name"
                  onChange={(val) => console.log("Input changed:", val)}
                />
                <InputField
                  title="Phone Number"
                  placeholder="+44 1234 567890"
                  onChange={(val) => console.log("Input changed:", val)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="marketing-agree"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
                className="h-4 w-4 mb-0.5 rounded border-gray-300 bg-transparent! accent-primary cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
              />
              <label
                htmlFor="marketing-agree"
                className="text-[14px] text-primaryTextLight cursor-pointer"
              >
                I would like to receive all marketing communications about Trade
                Link Network&apos;s Services by email, SMS and phone.
              </label>
            </div>
          </div>
          <p className="text-[14px] text-primaryTextLight">
            By clicking Continue, You agree to Trade Link Network’s{" "}
            <Link href="/terms-and-conditions">
              <span className="text-primary underline hover:text-primary/70 transition transform ">
                Terms & Conditions
              </span>
            </Link>{" "}
            and <br /> how we process your data, see our{" "}
            <Link href="/privacy-policy">
              <span className="text-primary underline hover:text-primary/70 transition transform ">
                Privacy Policy
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
