import React from "react";

const Projects = () => {
  return (
  <div data-aos="fade-down" className="p-10 flex flex-col items-center justify-center">
    <h1 id="projects" className="text-fuchsia-500 font-semibold text-[38px] p-20 ">Projects</h1>
    <div className="text-white font-normal grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-16 place-items-center p-2">

    <a href="https://pokedexero.netlify.app" target="_blank">
  <div className="flex flex-col items-center justify-center relative">
    <img
      className="rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform"
      src="/image/1.jpg"
      alt="Pokedex, creada con JS, React, Talwaind, React Router Dom"
    />
    <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
    <span className="font-bold text-center text-xs px-3 text-fuchsia-500">POKEDEX</span>
      <p className="font-serif text-xs px-3">JS - REACT - TAILWINDCSS</p>
    </div>
  </div>
</a>
      <a href="https://rickandmortywikierodj.netlify.app" target="_blank">
      <img className="flex items-center justify-center font-semibold rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform" src="/image/2.jpg" alt="" />
      <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
      <span className="font-bold text-center text-xs px-3 text-fuchsia-500">RICK & MORTY DIMENSIONS</span>
      <p className="font-serif text-xs px-3">JS - REACT - TAILWINDCSS</p>
    </div>
      </a>
      <a href="https://climaapperodj.netlify.app" target="_blank">
      <img  className=" flex items-center justify-center font-semibold rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform" src="/image/3.jpg" alt="" />
      <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
      <span className="font-bold text-center text-xs px-3 text-fuchsia-500">WEATHER APP</span>
      <p className="font-serif text-xs px-3">JS - HTML - CSS3</p>
    </div>
      </a>
      <a href="https://frasesproyectoerodj.netlify.app" target="_blank">
      <img  className="flex items-center justify-center font-semibold rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform" src="/image/4.jpg" alt="" />
      <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
      <span className="font-bold text-center text-xs px-3 text-fuchsia-500">APP OF PHRASES</span>
      <p className="font-serif text-xs px-3">JS - REACT - CSS3</p>
    </div>
      </a>
      <a href="https://formularioerodjproyect.netlify.app" target="_blank">
      <img  className="flex items-center justify-center font-semibold rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform" src="/image/5.jpg" alt="" />
      <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
      <span className="font-bold text-center text-xs px-3 text-fuchsia-500">APP OF FORM</span>
      <p className="font-serif text-xs px-3">JS - REACT - REACT FORM</p>
    </div>
      </a>
      <a href="https://carritojerovic1.netlify.app" target="_blank">
      <img className=" flex items-center justify-center font-semibold rounded-lg p-1 text-center border-2 border-white glow w-[250px] h-[150px] transform hover:scale-110 transition-transform" src="/image/6.jpg" alt="" />
      <div className="relative -bottom-1 w-auto rounded-lg bg-black bg-opacity-30 text-white text-center p-2 border-1 mt-2 border-white glow">
      <span className="font-bold text-center text-xs px-3 text-fuchsia-500">E - COMERCE</span>
      <p className="font-serif text-xs px-3">JS - HTML - CSS3</p>
    </div>
      </a>
      
    </div>
  </div>)
};

export default Projects;
