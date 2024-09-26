import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Jumbotron */}
      <div
        id='Home'
        className="relative overflow-hidden bg-cover bg-no-repeat p-6 sm:p-8 md:p-12 text-center scroll-margin"
        style={{
          backgroundImage: 'url("img/hero-bg-01.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Use viewport height for full-screen effect
          minHeight: '730px', // Ensure a minimum height
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white max-w-4xl mx-auto px-4">
              <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-medium">
                Welcome to The Student Council's Official Website
              </h2>
              <h4 className="mb-6 text-xl sm:text-2xl md:text-3xl font-medium">
                We are 'The Team'
              </h4>
              <button
                onClick={() => {
                  navigate('/form');
                }}
                type="button"
                className="rounded-full border-2 border-neutral-50 px-8 py-2.5 md:px-9 md:py-3 text-sm sm:text-base font-medium uppercase leading-normal text-neutral-50 transition duration-300 ease-in-out hover:border-[#ff5e5e] hover:bg-[#ff5e5e] hover:text-white focus:border-[#ff5e5e] focus:bg-[#ff5e5e] focus:text-white active:border-[#ff4d4d] active:bg-[#ff4d4d] active:text-white focus:outline-none focus:ring-0"
              >
                Apply to Student Council/Clubs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </>
  );
};

export default Hero;
