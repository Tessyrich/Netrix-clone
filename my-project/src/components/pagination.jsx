import React, { useState, useEffect } from "react";

const CarouselWithPagination = () => {
  const sentences = [
    "Welcome to our website!",
    "Discover amazing content!",
    "Join our community today!",
    "Explore our services!",
    "Stay updated with our latest news!",
    "Experience excellence with us!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle pagination click
  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Automatically switch sentences every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <nav className="bg-purple-700 text-white py-10 px-10 text-center overflow-hidden relative">
      {/* Display the current sentence */}
      <div className="marquee absolute inset-0 overflow-hidden">
        {sentences.map((sentence, index) => (
          <span
            key={index}
            className={`inline-block whitespace-nowrap ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            {sentence}
          </span>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sentences.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 bg-white rounded-full focus:outline-none ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </nav>
  );
};

export default CarouselWithPagination;
