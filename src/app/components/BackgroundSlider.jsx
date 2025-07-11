"use client";
import { useEffect, useState } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

export default function BackgroundSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
      style={{ backgroundImage: `url(${slides[idx]})` }}
    />
  );
}
