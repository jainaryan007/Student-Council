import React from "react";
import { FaInstagram, FaChrome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Contact" className="bg-gray-900 text-white py-8 scroll-margin">
      {/* Footer Top */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
            <a href="index.html" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors duration-300">
                JECRC Student Council
              </span>
            </a>
            <p className="mt-4 text-gray-400">
              Established in 2022, we are the student body that makes the wonders happen. We would love to help you out!
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/jecrc.studentcouncil/"
                className="hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl text-yellow-400" />
              </a>
              <a
                href="https://jecrcfoundation.com/"
                className="hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FaChrome className="text-xl text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-2/12 mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold text-yellow-400">Useful Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  Clubs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-3/12 text-center lg:text-left">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Us</h4>
            <p className="mt-4 text-gray-400">Student Development Cell</p>
            <p className="text-gray-400">1st Floor, E-Block, JECRC</p>
            <p className="text-gray-400">Jaipur</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span className="text-yellow-400">+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span className="text-yellow-400">sdo@jecrc.ac.in</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8">
        <div className="container mx-auto px-4 py-4 lg:px-8 text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 text-yellow-400">JECRC Student Council</strong> <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
