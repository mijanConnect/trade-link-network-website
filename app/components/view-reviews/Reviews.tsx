import Review from "./Review";

interface ReviewData {
  id: number;
  name: string;
  rating: number;
  title: string;
  description: string;
  image: string;
}

interface ReviewsProps {
  carId?: number | null;
}

const reviews: ReviewData[] = [
  {
    id: 1,
    name: "Niklas",
    rating: 4,
    title: "Premium quality at an affordable price",
    description:
      "I had a fantastic experience renting this car. The vehicle was extremely clean, well-maintained, and exactly as shown on the website. The engine performance was smooth, braking felt safe, and fuel efficiency was better than expected.",
    image: "/assets/feedback/people.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    title: "Excellent service and great car",
    description:
      "Outstanding rental experience! The car was in perfect condition, and the staff was very helpful and professional. Highly recommend for anyone looking for a reliable vehicle.",
    image: "/assets/feedback/people.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    rating: 4,
    title: "Good value for money",
    description:
      "Solid car rental experience. The vehicle performed well on long drives, and the rental process was straightforward. Would rent again.",
    image: "/assets/feedback/people.png",
  },
  {
    id: 4,
    name: "Emma Wilson",
    rating: 5,
    title: "Perfect for family trips",
    description:
      "Spacious and comfortable car, perfect for our family road trip. The air conditioning worked great, and the interior was spotless. Excellent customer service!",
    image: "/assets/feedback/people.png",
  },
  {
    id: 5,
    name: "David Martinez",
    rating: 3,
    title: "Average experience",
    description:
      "The car was decent and functional. Could have been cleaner, but overall acceptable for the price. Service was okay but could be improved.",
    image: "/assets/feedback/people.png",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    rating: 5,
    title: "Best rental service ever",
    description:
      "Incredible experience from start to finish. The car was pristine, the booking process was smooth, and the prices are unbeatable. Will definitely use this service again!",
    image: "/assets/feedback/people.png",
  },
  {
    id: 7,
    name: "James Thompson",
    rating: 4,
    title: "Reliable and trustworthy",
    description:
      "Great car rental company. The vehicle was reliable and performed excellently throughout my trip. Pickup and drop-off were hassle-free. Recommended!",
    image: "/assets/feedback/people.png",
  },
  {
    id: 8,
    name: "Maria Garcia",
    rating: 5,
    title: "Amazing experience",
    description:
      "Outstanding! The car was modern, comfortable, and in excellent condition. The rental staff was friendly and professional. Best decision I made for my vacation!",
    image: "/assets/feedback/people.png",
  },
];

export default function Reviews({ carId }: ReviewsProps) {
  return (
    <>
      <div className="mt-10 space-y-6 lg:space-y-10">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}
