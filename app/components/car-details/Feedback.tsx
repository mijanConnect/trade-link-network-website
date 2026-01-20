"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Homeowner",
    time: "2 weeks ago",
    title: "Smooth Process",
    rating: 5,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 2,
    name: "Emma Wilson",
    role: "Apartment Owner",
    time: "1 week ago",
    title: "Very Professional",
    rating: 5,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Landlord",
    time: "3 weeks ago",
    title: "Highly Recommended",
    rating: 4,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Property Owner",
    time: "4 weeks ago",
    title: "Great Support",
    rating: 5,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 5,
    name: "Daniel Smith",
    role: "Homeowner",
    time: "1 month ago",
    title: "Quality Work",
    rating: 4,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 6,
    name: "Olivia Martin",
    role: "Flat Owner",
    time: "2 months ago",
    title: "On Time Delivery",
    rating: 5,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
  {
    id: 7,
    name: "James Taylor",
    role: "Villa Owner",
    time: "2 months ago",
    title: "Excellent Experience",
    rating: 5,
    image: "/assets/feedback/people.png",
    message:
      "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn’t be happier with the outcome!",
  },
];

export default function Feedback() {
  const router = useRouter();

  return (
    <div className="my-10 lg:my-30">
      <h2 className="section-title text-center uppercase leading-[1.2]">
        What the People Thinks
        <br />
        About Us
      </h2>

      <div className="relative mt-2 lg:mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          //   pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="feedback-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="w-full rounded-lg p-4 lg:p-7 mb-4 lg:mb-12 shadow-lg flex flex-col bg-white">
                <div className="flex justify-between items-center lg:items-start gap-2">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-[16px] font-medium text-primaryText">
                        {review.name}
                      </h2>
                      <p className="text-[14px] text-primaryText">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <p className="text-[14px] text-primaryText">
                      {review.time}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 lg:w-4.5 lg:h-4.5 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-16">
                  <h3 className="text-[20px] font-bold">{review.title}</h3>
                  <p className="text-[15px] text-primaryParagraph leading-[1.7] mt-2">
                    {review.message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow bg-white z-10"></button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow bg-white z-10"></button> */}
      </div>
      <Button
        variant="primary"
        size="md"
        className="h-12 flex mx-auto"
        onClick={() => router.push(`/view-reviews/all`)}
      >
        View All Reveiws
      </Button>
    </div>
  );
}
