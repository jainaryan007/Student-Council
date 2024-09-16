import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="py-12 text-center bg-white font-sans">
      <h2 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4">
        Learn More <span className="text-red-500">About Us</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
        We are the team that makes it happen
      </p>

      <div
        className="max-w-2xl mx-auto mb-10 text-gray-700"
        data-aos="fade-up"
      >
        <p className="text-sm md:text-base">
          Made in 2022, the JECRC Student Council under the guidance of our
          mentors, has been the organizing brawn and brain behind most events at
          the Jaipur Engineering College and Research Centre. We have a plethora
          of clubs and events which bring out the essence of JECRC.
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          data-aos="zoom-in"
        >
          ABOUT US
        </button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        {/* Social Clubs */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="fade-right">
          <div className="text-4xl text-red-500 mb-4">👥</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Social Clubs
          </h3>
          <p className="text-gray-600 text-sm">
            Our social clubs that work for a change in society.
          </p>
        </div>

        {/* Cultural Clubs */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="fade-up">
          <div className="text-4xl text-red-500 mb-4">🎵</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Cultural Clubs
          </h3>
          <p className="text-gray-600 text-sm">
            Our cultural clubs are the portrayal of expression through art.
          </p>
        </div>

        {/* Technical Clubs */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="fade-down">
          <div className="text-4xl text-red-500 mb-4">🔧</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Technical Clubs
          </h3>
          <p className="text-gray-600 text-sm">
            From robots to drones, cars to websites, our technical clubs have it
            all.
          </p>
        </div>

        {/* Departmental Clubs */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="fade-left">
          <div className="text-4xl text-red-500 mb-4">🏫</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Departmental Clubs
          </h3>
          <p className="text-gray-600 text-sm">
            We have multiple departmental clubs aside from our SC for your
            overall development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
