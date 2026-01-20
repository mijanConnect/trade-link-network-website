import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  review: {
    id: number;
    name: string;
    rating: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function Review({ review }: ReviewProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <div className="flex gap-4 w-full md:w-1/3">
          <div className="shrink-0">
            <Image
              src={review.image}
              alt={review.name}
              width={74}
              height={74}
              className="rounded-full"
            />
          </div>

          <div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4.5 w-4.5 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
            <h2 className="description font-bold mt-2">{review.name}</h2>
            <div className="flex items-center gap-1">
              <p className="description">Verifizierter Käufer</p>
              <BadgeCheck className="h-6 w-6 text-white fill-blue-500" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-[16px] md:text-[20px] text-primaryText font-semibold mb-1">
            {review.title}
          </h3>
          <p className="description">{review.description}</p>
        </div>
      </div>
    </>
  );
}
