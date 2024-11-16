import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from './navbar2';
import Footer from './footer';

const FormClosed = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing function
      once: true,  // Run the animation only once
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page when mounted
  }, []);

  return (
    <>
      <Navbar2 />
      
      <div
        className="relative flex flex-col items-center justify-between min-h-screen"
        style={{
          backgroundImage: 'url("img/formBg.png")',
          backgroundSize: 'cover',  // Make the background cover the entire container
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text content */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
            data-aos="fade-up"  // Animation effect from AOS
          >
            Form Closed
          </h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FormClosed;
