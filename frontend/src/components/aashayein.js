import React, { useState } from "react";

// Sample images
const events = {
  Gallery: [
    { id: 1, src: "img/navrang/navrang1.webp", alt: "Navras Event 1" },
    { id: 2, src: "img/navrang/navrang2.webp", alt: "Navras Event 2" },
    { id: 3, src: "img/navrang/navrang3.webp", alt: "Navras Event 3" },
  ],
};

const Gallery = () => {
  const [category, setCategory] = useState("Gallery");
  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (imageSrc) => {
    setZoomImage(imageSrc);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  return (
    <div id="Events" className="container mx-auto px-8 py-12 scroll-margin">
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

const CenteredLogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
      {/* Logo */}
      <div className="mb-4">
        <img
          src="img/clubs/aashayein.webp"
          alt="Logo"
          className="w-32 h-32 md:w-48 md:h-48 object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
        Aashayein
      </h1>

      {/* Paragraph */}
      <p className="text-center text-gray-600 max-w-lg mb-12 text-xl">
      This dynamic social club bridges the gap between blood donors and patients through drives and checkup camps. With selfless volunteers, Aashayein swiftly connects donors to those in need, saving lives in crisis.
      </p>

      {/* Integrating the Gallery Component */}
      <Gallery />
    </div>
  );
};

export default CenteredLogoSection;
