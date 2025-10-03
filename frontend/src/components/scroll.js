import React from "react";
import { useNavigate } from "react-router-dom";

const Scroll = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with a static background image and responsive design */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("img/cta-bg-01.webp")',
          backgroundAttachment: "fixed", // Make the background static
          height: 400,
        }}
      >
        {/* Content container */}
        <div className="text-center">
          {/* Button with text */}
          <button
            onClick={() => {
              navigate('/form'); // Enable navigation on button click
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
          >
            Apply to Student Council
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
