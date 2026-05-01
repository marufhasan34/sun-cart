"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sale 50% OFF",
      subtitle: "Upgrade your summer style with hot deals",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    },
    {
      id: 2,
      title: "Hot Deals 🔥",
      subtitle: "Grab the best summer essentials now",
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>

            <Link href={"/products"}>
              <button className="bg-yellow-400 cursor-pointer text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-yellow-400" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
