import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar2";
import Footer from "./footer";
import teamData from './teamdata.json'; 

const Team = () => {
  const [teamMembers, setTeamMembers] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTeamMembers(teamData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="relative w-full h-96">
          <img
            src="img/headspic1.jpg" 
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
              This is our Student Council team. The brains and brawns of our events.
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

        {Object.keys(teamMembers).map((vertical, idx) => (
          <section key={idx} className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-center mb-12">
                <span
                  className="bg-red-100 text-red-500 font-bold text-center py-2 px-3 rounded-full"
                  data-aos="fade-up"
                >
                  {vertical.toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
                {vertical} <span className="text-red-500">Vertical</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {teamMembers[vertical].map((member, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`} 
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                    style={{ width: '22rem' }} // Custom width between w-80 and w-96
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
        ))}

      </div>
      <Footer />
    </>
  );
};

export default Team;
