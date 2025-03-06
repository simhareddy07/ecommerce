import React, { useState, useEffect } from "react";

export default function Product({ name, images = [], description, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 150000);
    return () => clearInterval(interval);
  }, [images]); // ✅ Runs when images array length changes

  const currentImage = images?.[currentIndex] || "placeholder.jpg";
console.log(currentImage)
  return (
    <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div className="w-full">
      <img
  src={`http://localhost:5000/${encodeURIComponent(currentImage)}`}
  alt="Product Image"
  className="w-full h-56 object-cover rounded-lg mb-2"
/>

        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm opacity-75 mt-2">{description}</p>
      </div>
      <div className="w-full mt-4">
        <p className="text-lg font-bold my-2">${price?.toFixed(2) || "0.00"}</p>
        <button className="w-full text-white px-4 py-2 rounded-md bg-neutral-900 hover:bg-neutral-700 transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
}
/** */