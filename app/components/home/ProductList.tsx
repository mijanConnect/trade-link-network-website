"use client";

import { useGetProductsQuery } from "@/store/apiSlice";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductList() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="text-red-600 p-4">Error loading data</p>;

  return (
    <div
      id="products"
      className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data?.map((item: Product) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
            className="h-40 object-contain mx-auto"
          />
          <h3 className="font-semibold mt-3 text-sm">{item.title}</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">${item.price}</span>
            <button className="px-3 py-1 rounded text-white bg-primary hover:opacity-80">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
