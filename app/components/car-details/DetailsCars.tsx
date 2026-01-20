import { Car } from "@/types/product";
import DetailsCarCard from "./DetailsCarCard";

const cars: Car[] = [
  {
    id: 1,
    name: "Audi S60",
    image: "/assets/card/car-1.png",
    star: 4,
    doors: 4,
    seats: 4,
    suitcases: 4,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1400,
    price: 46.91,
    days: 3,
    deposit: 250,
    rating: 8.6,
  },
  {
    id: 2,
    name: "BMW 5 Series",
    image: "/assets/card/car-2.png",
    star: 5,
    doors: 4,
    seats: 5,
    suitcases: 3,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Full to Full",
    kilometers: 1200,
    price: 59.99,
    days: 3,
    deposit: 300,
    rating: 9.1,
  },
  {
    id: 3,
    name: "Mercedes C Class",
    image: "/assets/card/car-3.png",
    star: 5,
    doors: 4,
    seats: 5,
    suitcases: 3,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1500,
    price: 55.5,
    days: 3,
    deposit: 280,
    rating: 8.9,
  },
  {
    id: 4,
    name: "Toyota Corolla",
    image: "/assets/card/car-4.png",
    star: 3,
    doors: 4,
    seats: 5,
    suitcases: 2,
    transmission: "Manual",
    climate: "AC",
    fuelPolicy: "Full to Full",
    kilometers: 1800,
    price: 32.75,
    days: 3,
    deposit: 200,
    rating: 8.2,
  },
  {
    id: 5,
    name: "Honda Civic",
    image: "/assets/card/car-5.png",
    star: 4,
    doors: 4,
    seats: 5,
    suitcases: 2,
    transmission: "Automatic",
    climate: "Climate Control",
    fuelPolicy: "Fair",
    kilometers: 1600,
    price: 38.9,
    days: 3,
    deposit: 220,
    rating: 8.5,
  },
];

export default function DetailsCars() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4">
          {cars.map((car) => (
            <DetailsCarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}
