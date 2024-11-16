import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Navbar2 from "./navbar2";
import Footer from "./footer";

const ClubDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  }, []);
  
  if (!location.state || !location.state.club) {
    navigate("/clubs", { replace: true });
    return null; 
  }

  const { club } = location.state;

  return (
    <>
      <Navbar2 />
      <div className="container mx-auto px-4 mt-12 mb-6">
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="mb-4">
            <img
              src={club.logo}
              alt={`${club.name} Logo`}
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            {club.name}
          </h1>
          <p className="text-center text-gray-600 max-w-lg mb-12 text-xl">
            {club.description}
          </p>

          {/* Events grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {club.events.map((event) => (
              <div key={event.id} className="overflow-hidden relative">
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Results Button */}
          {club.resultsLink && (
            <a
              href={club.resultsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full inline-block mb-12"
            >
              View Results
            </a>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ClubDetail;
