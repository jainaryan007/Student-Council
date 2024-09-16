import React from 'react';
import 'aos/dist/aos.css';

const mentors = [
  {
    name: "Mr. Arpit Agarwal",
    title: "Director, JECRC",
    image: "img/team/arpitsir.jpg",
  },
  {
    name: "Mr. Dheemant Agarwal",
    title: "Director - Digital Strategy, JECRC University",
    image: "img/team/dheemantsir.png",
  },
  {
    name: "Mr. Pranshu Sharma",
    title: "Head, Student Affairs, SDO, JECRC",
    image: "img/team/pranshusir.jpg",
  },
  {
    name: "Ms. Mohak Khanduja",
    title: "Designing Head & Student Development Officer, JECRC",
    image: "img/team/mohakmam.jpg",
  },
];

const Mentors = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-8">
        <span className="text-pink-500">Meet</span> our Mentors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
        {mentors.map((mentor, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            key={index}
            data-aos="fade-up"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-64 object-cover border-b-4 border-pink-500"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{mentor.name}</h3>
              <p className="text-gray-500">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;