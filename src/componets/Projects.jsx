import React from "react";

const Projects = () => {
  return (
  <div data-aos="fade-down" className="p-20 flex flex-col items-center justify-center">
    <h1 id="projects" className="text-fuchsia-500 font-semibold text-[38px]">Projects</h1>
    <div className="text-white font-normal grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-24 place-items-center p-12">
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/1.jpg" alt="" />
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/2.jpg" alt="" />
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/3.jpg" alt="" />
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/4.jpg" alt="" />
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/5.jpg" alt="" />
      <img className=" text[20] flex items-center justify-center font-semibold rounded-xl h-28 w-40 text-center border-2 border-white glow" src="/public/image/6.jpg" alt="" />
    </div>
  </div>)
};

export default Projects;
