// Team.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation with a duration of 1000ms
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-96">
        <img
          src="img/sc_back.jpg" // Add path to your image
          alt="Team Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl lg:text-5xl font-bold" data-aos="fade-up">
            JECRC Student Council
          </h1>
          <p
            className="mt-4 text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            This is our Student Council team. The brains and brawns of our
            events.
          </p>
          <nav
            className="text-red-500 mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ul className="flex justify-center space-x-4">
              <li className="hover:text-blue-600">
                <a href="/">Home</a>
              </li>
              <li>/</li>
              <li className="text-white">Team</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Centered Button */}
          <div className="flex justify-center mb-12">
            <span
              className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
              data-aos="fade-up"
            >
              TECHNICAL
            </span>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Technical <span className="text-red-500">Vertical</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Technical.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Add delay for staggered animation
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
            <span
              className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
              data-aos="fade-up"
            >
              GRAPHICS
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Graphics <span className="text-red-500">Vertical</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Graphics.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Add delay for staggered animation
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
            <span
              className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
              data-aos="fade-up"
            >
              CULTURAL
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Cultural <span className="text-red-500">Vertical</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Cultural.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Add delay for staggered animation
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
            <span
              className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
              data-aos="fade-up"
            >
              OPERATIONS
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Operations <span className="text-red-500">Vertical</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Operations.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Add delay for staggered animation
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
            <span
              className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
              data-aos="fade-up"
            >
              MEDIA
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Media <span className="text-red-500">Vertical</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Media.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Add delay for staggered animation
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample Team Data
const Technical = [
  {
    name: "Vidit Tamboli",
    role: "Head, Technical Vertical",
    image: "img/heads dept/tech_head.jpg", // Replace with actual image
  },
  {
    name: "Archit Jain",
    role: "Deputy Head, Technical Vertical",
    image: "img/heads dept/tech_dy1.jpg",
  },
];
const Graphics = [
  {
    name: "Shubham Saharan",
    role: "Head, Graphics Vertical",
    image: "img/heads dept/graphics_head2.jpg", // Replace with actual image
  },
  {
    name: "Dhruv Sharma",
    role: "Head, Graphics Vertical",
    image: "img/heads dept/graphics_head1.jpg",
  },
  {
    name: "Ragini Joshi",
    role: "Deputy Head, Graphics Vertical",
    image: "img/heads dept/graphics_dy1.jpg",
  },
];
const Cultural = [
  {
    name: "Suyash Chaklan",
    role: "Head, Cultural Vertical",
    image: "img/heads dept/cultural_head1.jpg", // Replace with actual image
  },
  {
    name: "Dev Saxena",
    role: "Head, Cultural Vertical",
    image: "img/heads dept/cultural_head2.jpg",
  },
  {
    name: "Armaan Sinwar",
    role: "Head, Cultural Vertical",
    image: "img/heads dept/cultural_head3.jpg",
  },
  {
    name: "Khushal Nirwan",
    role: "Deputy Head, Cultural Vertical",
    image: "img/heads dept/cultural_dy1.jpg",
  },
];
const Operations = [
  {
    name: "Mukul Sharma",
    role: "Head, Operations Vertical",
    image: "img/heads dept/oper_head.jpg", // Replace with actual image
  },
  {
    name: "Nikhil Kumar",
    role: "Head, Operations Vertical",
    image: "img/heads dept/oper_head2.jpg",
  },
  {
    name: "Yuvraj Singh Rathore",
    role: "Deputy Head, Operations Vertical",
    image: "img/heads dept/oper_dy.jpg",
  },
  {
    name: "Jaivardhan Singh Shekhawat",
    role: "Deputy Head, Operations Vertical",
    image: "img/heads dept/oper_dy2.jpg",
  },
  {
    name: "Kartik Dey",
    role: "Deputy Head, Operations Vertical",
    image: "img/heads dept/oper_dy3.jpg",
  },
];
const Media = [
  {
    name: "Nehal Jain",
    role: "Head, Media Vertical",
    image: "img/heads dept/media_head1.jpg", // Replace with actual image
  },
  {
    name: "Raghav Ojha",
    role: "Head, Media Vertical",
    image: "img/heads dept/media_head2.jpg",
  },
  {
    name: "Yojna Dadani",
    role: "Head, Media Vertical",
    image: "img/heads dept/media_head3.jpg",
  },
  {
    name: "Ananya Sharma",
    role: "Deputy Head, Media Vertical",
    image: "img/heads dept/media_dy1.jpg",
  },
  {
    name: "Gyanchand Ramchandani",
    role: "Deputy Head, Media Vertical",
    image: "img/heads dept/media_dy2.jpg",
  },
];

export default Team;
