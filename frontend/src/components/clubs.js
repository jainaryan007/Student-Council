import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const clubs = [
  {
    name: "Fotografreaks",
    description: "Our photography club that makes us see our campus and students through the lenses.",
    icon: "/img/clubs/fotografreaks.webp",
    aosDelay: 100,
    route: "/fotogra",
  },
  {
    name: "Enigma Dance Crew",
    description: "Dancing to the rhythm of life—Enigma, where passion takes form. A space where creativity flows with every beat and emotion finds its expression through movement.",
    icon: "img/clubs/enigma.webp",
    aosDelay: 200,
    route: "/enigma",
  },
  {
    name: "Avyaan",
    description: "Where voices blend and magic happens—Avyaan, the music club of JECRC. A stage for dreamers, creators, and performers to shine. Every note sparks a new story, turning silence into symphony!",
    icon: "img/clubs/avyaan.webp",
    aosDelay: 300,
    route: "/avyaan",
  },
  {
    name: "Adaa",
    description: "Where fashion isn't just worn, it's lived with confidence and creativity. Elegance in every edge, boldness in every fold—Adaa sets the trend.",
    icon: "img/clubs/adaa.webp",
    aosDelay: 400,
    route: "/adaa",
  },
  {
    name: "FnF",
    description: "FnF, the drama club, allows students to participate in acting and stage performances, bringing stories to life at JECRC. For what we know, they're a bunch of overachievers.",
    icon: "img/clubs/fnf.webp",
    aosDelay: 100,
    route: "/fnf",
  },
  {
    name: "Khalas Bhangra Crew",
    description: "Khalas is the Bhangra club of JECRC which celebrates the Punjabi culture through traditional and energetic dance performances.",
    icon: "img/clubs/khalas.webp",
    aosDelay: 200,
    route: "/khalas",
  },
  {
    name: "Atrangi",
    description: "Atrangi is a cultural club that is a vibrant hub of art and artists, brimming with creativity in every form. From poets to writers and beyond, there is no limit to the imagination that thrives here.",
    icon: "img/clubs/atrangi.webp",
    aosDelay: 300,
    route: "/atrangi",
  },
  {
    name: "Suhasini",
    description: "Suhasni is a social club at JECRC dedicated to empowering girls through education, ensuring their safety, and fostering their dreams for each one to rise and shine with confidence and courage.",
    icon: "img/clubs/suhasini.webp",
    aosDelay: 400,
    route: "/suhasini",
  },
  {
    name: "Aashayein",
    description: "This dynamic social club bridges the gap between blood donors and patients through drives and checkup camps. With selfless volunteers, Aashayein swiftly connects donors to those in need, saving lives in crisis.",
    icon: "img/clubs/aashayein.webp",
    aosDelay: 100,
    route: "/aashayein",
  },
  {
    name: "Soch",
    description: "SOCH KUCH KAR DIKHANE KI”. From 'Safai Abhiyan' to 'Vastr Samman', SOCH makes a difference through environmental cleanups, clothing drives, and social awareness campaigns.",
    icon: "img/clubs/soch.webp",
    aosDelay: 200,
    route: "/soch",
  },
  {
    name: "Xananoids",
    description: "Where innovation meets automation. Crafting robots that redefine possibilities and spark future revolutions, engineered by passionate minds dedicated to pushing the boundaries of technology.",
    icon: "img/clubs/xananoids.webp",
    aosDelay: 300,
    route: "/xananoids",
  },
  {
    name: "Moonriders",
    description: "Where gears turn dreams into speed and innovation takes the wheel. The automotive engineering innovation at JECRC.",
    icon: "img/clubs/moonriders.webp",
    aosDelay: 400,
    route: "/moonriders",
  },
  {
    name: "Zarurat",
    description: "Giving wings to dreams that deserve to soar. Zarurat is a social club that aims to empower every child with the education they aspire to and build a brighter future.",
    icon: "img/clubs/zarurat.webp",
    aosDelay: 100,
    route: "/zarurat",
  },
];

const ClubsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="clubs" className="py-20  bg-white">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12 " data-aos="fade-up">
        <button className="bg-red-100 text-red-500 font-bold py-2 px-4 mx-6 rounded-full">
          CLUB
        </button>
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-red-500">Check Our</span> Clubs
        </h2>
      </div>

      {/* Clubs Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {clubs.map((club, index) => (
          <Link to={club.route} key={index}>
            <div
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center h-80"
              data-aos="fade-up"
              data-aos-delay={club.aosDelay}
            >
              <div className="icon mb-4">
                <img
                  src={club.icon}
                  alt={`${club.name} Logo`}
                  className="w-16 h-16"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{club.name}</h4>
              <p className="text-gray-600">{club.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ClubsSection;
