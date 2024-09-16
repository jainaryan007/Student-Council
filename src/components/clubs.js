import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const clubs = [
  {
    name: "Fotografreaks",
    description:
      "Our photography club that makes us see our campus and students through the lenses.",
  },
  {
    name: "Enigma Dance Crew",
    description: "Our western dance society! They know the moves!",
  },
  {
    name: "Avaan",
    description:
      "The official music club of JECRC. From classical to metal, hip-hop to bollywood, they do it all!",
  },
  {
    name: "FnF",
    description:
      "The Face of Footlights is the dramatics crew of JECRC. For what we know, they’re a bunch of overachievers.",
  },
  {
    name: "Khalas Bhangra Crew",
    description:
      "The Khalas Bhangra Crew is the folk dance crew of JECRC. You want energy? We have Khalas!",
  },
  {
    name: "Atrangi",
    description: "A creative art club with members showing exceptional skills.",
  },
  {
    name: "Adaa",
    description:
      "The fashion club of JECRC. They sure know how to display their Adaa.",
  },
  {
    name: "Suhasini",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
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
    <section className="py-12 text-center">
      <h2
        className="text-3xl font-bold mb-4 text-gray-800"
        data-aos="fade-up"
      >
        Check Our <span className="text-red-500">Clubs</span>
      </h2>

      <p
        className="text-sm mb-8 text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We have a variety of clubs to choose from, join the one that speaks to you!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white text-gray-800"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Delayed animation based on index
          >
            <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
            <p className="text-sm text-gray-600">{club.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClubsSection;
