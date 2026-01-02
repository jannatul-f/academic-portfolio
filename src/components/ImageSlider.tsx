import { useEffect, useState } from "react";

type ImageSliderProps = {
  images: string[];
  interval?: number; // autoplay interval (ms)
};

export default function ImageSlider({
  images,
  interval = 4000, // default 4 seconds
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // 👉 Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="slider relative w-full max-w-4xl mx-auto">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-72 object-cover rounded-lg transition-opacity duration-500"
      />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
