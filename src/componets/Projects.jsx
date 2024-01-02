import React from "react";

const Project = ({ title, link, image, alt, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      <div className="project-item">
        <img src={image} alt={alt} loading="lazy" className="project-image" />
        <div className="project-details">
          <span className="project-title">{title}</span>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const proyectos = [
    {
      title: "POKEDEX",
      link: "https://pokedexero.netlify.app",
      image: "/image/1.jpg",
      alt: "Pokedex, creada con JS, React, Tailwind, React Router Dom",
      description:
        "Pokédex Web App is a React app that uses the Pokémon API (PokeAPI) to allow users to browse a list of Pokémon and get specific details by clicking on each one.",
      stack: "JS - REACT - TAILWINDCSS",
    },
    {
      title: "RICK & MORTY DIMENSIONS",
      link: "https://react-e-commerce-ecommerce.netlify.app",
      image: "/image/2.jpg",
      alt: "RICK & MORTY DIMENSIONS, creada con JS, React, Tailwind, React Router Dom",
      description:
        "Built with React, the Rick and Morty API is used to display information about Rick and Morty characters, as well as a list of characters.",
      stack: "JS - REACT - TAILWINDCSS",
    },

    {
      title: " WEATHER APP",
      link: "https://climaapperodj.netlify.app",
      image: "/image/3.jpg",
      alt: " WEATHER APP credada con JS - HTML - CSS3",
      description:
        "Built with React, the Rick and Morty API is used to display information about Rick and Morty characters, as well as a list of characters.",
      stack: "JS - HTML - CSS3",
    },
    {
      title: "PHRASES APP",
      link: "https://frasesespacialeserodj.netlify.app",
      image: "/image/4.jpg",
      alt: "phrases app APP creada con JS - HTML -REACT - CSS3",
      description:
        "Immerse yourself in the enchanting world of words with our 'Phrases App', crafted. Explore a journey of inspiration and creativity while indulging in captivating design! 🚀.",
      stack: "JS - HTML - CSS3",
    },
    {
      title: "FORMS APP",
      link: "https://formularioerodjproyect.netlify.app",
      image: "/image/5.jpg",
      alt: "Forms app creada con JS - HTML -REACT - REACT REDUX",
      description:
        "DynamicClients App: I developed this application using JS, HTML, React, and Redux to efficiently manage clients. It allows creating, editing, and managing customized client information. It showcases my ability to develop interactive and scalable solutions in modern web development.",
      stack: "JS - HTML - CSS3",
    },
    {
      title: "E-Commerce",
      link: "https://carritojerovic1.netlify.app",
      image: "/image/6.jpg",
      alt: "ecommerce APP creada con JS - HTML - CSS3",
      description:"I designed this e-commerce site to provide a visually appealing and user-friendly shopping experience. Utilizing JS for dynamic features enhances functionality, while the overall aesthetic is achieved through HTML and CSS3. This project showcases my skills in creating visually appealing and functional web solutions.",
      stack: "JS - HTML - CSS3",
    },
    {
      title: "APP MOVIES",
      link: "https://bejewelled-pegasus-a063d8.netlify.app/",
      image: "/image/7.jpg",
      alt: "ecommerce APP creada con JS - HTML - CSS3",
      description:"I designed this movie-app Utilizing JS for dynamic features enhances functionality, while the overall aesthetic is achieved through HTML and CSS3. This project showcases my skills in creating visually appealing and functional web solutions.",
      stack: "JS - HTML - CSS3",
    }

    // Agrega más proyectos aquí
  ];

  return (
    <div
      data-aos="fade-down"
      className="p-8 flex flex-col items-center justify-center"
    >
      <h1
        id="projects"
        className="text-fuchsia-500 font-semibold text-[38px] p-20"
      >
        Projects
      </h1>
      <div className="text-white font-normal grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-14 place-items-center p-4">
        {proyectos.map((proyecto, index) => (
          <a
            key={index}
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:p-2 p-3"
          >
            <div className="flex flex-col items-center justify-center relative p-4 lg:p-2 md:p-10">
              <img
                className="rounded-lg p-0 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform"
                src={proyecto.image}
                alt={proyecto.alt}
              />
              <div className="relative -bottom-2 w-auto rounded-lg bg-black bg-opacity-25 text-white text-center p-2 border-1 mt-3 border-white glow">
                <span className="font-bold text-center text-sm px-3 text-fuchsia-500">
                  {proyecto.title}
                </span>
                <p className="font-serif text-xs px-2 p-1 text-center">
                  {proyecto.stack}
                </p>
                <p className="text-xs p-4 text-justify">
                  {proyecto.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
