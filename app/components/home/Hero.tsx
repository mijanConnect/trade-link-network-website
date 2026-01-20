import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div>
        <Image
          src="/assets/hero-image.png"
          alt="Hero Image"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
