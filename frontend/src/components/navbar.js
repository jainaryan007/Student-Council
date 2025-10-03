import React, { PureComponent } from 'react';

export class Navbar extends PureComponent {
  // State to track whether the navbar is open or closed
  state = {
    isOpen: false,
    activeItem: 'Home', // Default active item
  };

  // Function to toggle the navbar visibility
  toggleNavbar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  // Function to close the navbar when a menu item is clicked
  closeNavbar = (item) => {
    this.setState({ isOpen: false, activeItem: item });
  };

  render() {
    return (
      <div>
        <nav className="fixed top-0 left-0 w-full z-10 bg-black/75 backdrop-blur-md ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JECRC STUDENT COUNCIL
            </span>
            <button
              type="button"
              onClick={this.toggleNavbar}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={this.state.isOpen}
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

            <div
              className={`${
                this.state.isOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <a
                    href="#Home"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'Home'
                        ? 'text-red-700  md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent  dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('Home')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'About'
                        ? 'text-red-700 bg-red-100 md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent  dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('About')}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#clubs"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'Clubs'
                        ? 'text-red-700 bg-red-100 md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent  dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('Clubs')}
                  >
                    Clubs
                  </a>
                </li>
                <li>
                  <a
                    href="#Events"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'Events'
                        ? 'text-red-700 bg-red-100 md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('Events')}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#Mentors"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'Mentors'
                        ? 'text-red-700 bg-red-100 md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent  dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('Mentors')}
                  >
                    Mentors
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      this.state.activeItem === 'Contact'
                        ? 'text-red-700 bg-red-100 md:text-red-700 md:bg-transparent'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:text-red-700 dark:text-white dark:hover:bg-transparent  dark:hover:text-white md:dark:hover:text-red-500'
                    }`}
                    onClick={() => this.closeNavbar('Contact')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
