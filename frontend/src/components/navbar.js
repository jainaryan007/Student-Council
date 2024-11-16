import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home'); // Default active item
  const [scrollY, setScrollY] = useState(0);

  const sectionsRef = useRef({}); // To store refs for each section

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Function to close the navbar when a menu item is clicked
  const closeNavbar = (item) => {
    setIsOpen(false);
    setActiveItem(item);
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to update the scroll position state
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // UseEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // IntersectionObserver to update the active menu item based on the visible section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, options);

    const sectionIds = ['Home', 'About', 'Clubs', 'Events', 'Mentors', 'Contact'];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionsRef.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = sectionsRef.current[id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
          scrollY > 50 ? 'bg-black/75' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JECRC STUDENT COUNCIL
          </span>
          <button
            type="button"
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {['Home', 'About', 'Clubs', 'Events', 'Mentors', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      activeItem === item
                        ? 'text-red-700 md:text-red-700 md:bg-transparent'
                        : 'text-white hover:bg-transparent md:hover:text-red-700 dark:text-white dark:hover:bg-transparent dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => closeNavbar(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
