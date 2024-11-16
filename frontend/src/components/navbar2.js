import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  // Function to handle the click event for the navigation buttons
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/75' : 'bg-transparent'
        } `}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 h-16">
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">
            JECRC STUDENT COUNCIL
          </span>
          <div id="navbar-default">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              <li>
                <button
                  className="block py-2 md:py-0 px-3 rounded bg-transparent text-gray-900 hover:text-red-700 md:hover:text-red-700 dark:text-white dark:hover:text-red-500"
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </button>
              </li>
              {/* Add more navigation items if needed */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
