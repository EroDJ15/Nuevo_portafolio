import React from "react";

const Projects = () => {
  return (
  <div data-aos="fade-down" className="p-20 flex flex-col items-center justify-center">
    <h1 id="projects" className="text-fuchsia-500 font-semibold text-[38px]">Projects</h1>
    <div className="text-white font-normal grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-24 place-items-center p-12">
      <a href="https://pokedexero.netlify.app"target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow " src="/image/1.jpg" alt="Pokedex, creada con JS, React, Talwaind, React Router Dom" />
      </a>
      <a href="https://rickandmortywikierodj.netlify.app" target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/image/2.jpg" alt="" />
      </a>
      <a href="https://climaapperodj.netlify.app" target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/image/3.jpg" alt="" />
      </a>
      <a href="https://frasesproyectoerodj.netlify.app" target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/image/4.jpg" alt="" />
      </a>
      <a href="https://formularioerodjproyect.netlify.app" target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/image/5.jpg" alt="" />
      </a>
      <a href="https://carritojerovic1.netlify.app" target="_blank">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/image/6.jpg" alt="" />
      </a>
    </div>
  </div>)
};

export default Projects;
