import React, { useState } from "react";

// Sample images
const events = {
  All: [
    { id: 1, src: "img/ren/ren1.jpg", alt: "Event 1" },
    { id: 2, src: "img/freshers/freshers1.jpg", alt: "Event 2" },
    { id: 3, src: "img/navrang/navrang1.jpg", alt: "Event 3" },
    { id: 3, src: "img/ren/ren2.jpg", alt: "Event 4" },
    { id: 3, src: "img/freshers/freshers2.jpg", alt: "Event 5" },
    { id: 3, src: "img/navrang/navrang2.jpg", alt: "Event 6" },
    { id: 3, src: "img/ren/ren3.jpg", alt: "Event 7" },
    { id: 3, src: "img/freshers/freshers3.jpg", alt: "Event 8" },
    { id: 3, src: "img/navrang/navrang3.jpg", alt: "Event 9" },
  ],
  Renaissance: [
    { id: 1, src: "img/ren/ren1.jpg", alt: "Renaissance Event 1" },
    { id: 2, src: "img/ren/ren2.jpg", alt: "Renaissance Event 2" },
    { id: 3, src: "img/ren/ren3.jpg", alt: "Renaissance Event 3" },
  ],
  Freshers: [
    { id: 1, src: "img/freshers/freshers1.jpg", alt: "Freshers Event 1" },
    { id: 2, src: "img/freshers/freshers2.jpg", alt: "Freshers Event 2" },
    { id: 3, src: "img/freshers/freshers3.jpg", alt: "Freshers Event 3" },
  ],
  Navras: [
    { id: 1, src: "img/navrang/navrang1.jpg", alt: "Navras Event 1" },
    { id: 2, src: "img/navrang/navrang2.jpg", alt: "Navras Event 2" },
    { id: 3, src: "img/navrang/navrang3.jpg", alt: "Navras Event 3" },
  ],
};

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (imageSrc) => {
    setZoomImage(imageSrc);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8">
        Check Our <span className="text-red-500">Events</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(events).map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
              category === cat
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events[category].map((image) => (
          <div
            key={image.id}
            className="overflow-hidden relative cursor-pointer"
            onClick={() => handleZoom(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Zoomed Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative">
            <img src={zoomImage} alt="Zoomed" className="max-w-full max-h-full" />
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={() => setZoomImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
