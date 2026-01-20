"use client";

import React, { useState } from "react";
import { Star, X } from "lucide-react";
import Button from "../ui/Button";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WriteReviewModal({
  isOpen,
  onClose,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0); // Track hover state
  const [review, setReview] = useState<string>("");

  if (!isOpen) return null;

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Review:", { rating, review });
    // Reset and close modal
    setRating(0);
    setReview("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 p-6 relative max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-20 bg-gray-200 hover:bg-gray-300 transform transition rounded-full p-2 shadow-md cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto flex-1 modal-scroll">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mt-2">Write a Review</h2>
          </div>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                size={24}
                className={`cursor-pointer ${
                  value <= (hoverRating || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200 fill-gray-200"
                } hover:text-yellow-400 hover:fill-yellow-400 transition-all duration-200`}
                onClick={() => handleRatingChange(value)}
                onMouseEnter={() => setHoverRating(value)} // Set hover value
                onMouseLeave={() => setHoverRating(0)} // Reset hover value
              />
            ))}
          </div>

          <textarea
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Write your review here..."
            value={review}
            onChange={handleReviewChange}
            rows={5}
          />

          <Button onClick={handleSubmit} className="w-full">
            Submit Review
          </Button>
        </div>
      </div>
    </div>
  );
}
