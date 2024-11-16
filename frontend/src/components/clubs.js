import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import data from './data.json'; 

const ClubsSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const handleClubClick = (club) => {
    navigate("/clubdetails", {
      state: { club }, 
    });
  };

  return (
    <section id="Clubs" className="py-20 bg-white">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <button className="bg-red-100 text-red-500 font-bold py-2 px-4 mx-6 rounded-full mb-4">
          CLUB
        </button>
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-red-500">Check Our</span> Clubs
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {data.clubs.map((club, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-80 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={club.aosDelay} 
            onClick={() => handleClubClick(club)}
          >
            <span className="absolute top-0 z-0 h-20 w-20 rounded-full bg-transparent transition-all duration-500 group-hover:bg-custom-yellow group-hover:scale-[10]"></span>

            <div className="relative z-10 flex flex-col items-center">
              <div className="icon mb-4">
                <img
                  src={club.logo}
                  alt={`${club.name} Logo`}
                  className="w-16 h-16 transition-all duration-300 group-hover:bg-transparent"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-white">
                {club.name}
              </h4>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-white">
                {club.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClubsSection;
