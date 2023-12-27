import React from "react";

const Services = () => {
  return( 
  <div id="services" data-aos="fade-right" className="p-20 lg:p-20 items-center justify-center flex-col gap-2">
    <h1 data-aos="fade-down" className="text-[38px] font-semibold -mb-4 lg:mb-5 leading-normal text-fuchsia-500 text-center">Services</h1>
    <div data-aos="fade-up" className=" text-white font-normal grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-6 place-items-center p-6">
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">Web Development</h2> 
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 text-center w-32 border-2 border-white glow">Mobile App Development</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">React</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">Node</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">Express</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">CSS3</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">HTML5</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">JavaScript</h2>
      <h2 className="text[20] flex items-center justify-center font-semibold rounded-xl h-20 w-32 text-center border-2 border-white glow">Python</h2>
    </div>
   
  </div>
  )
}
export default Services;
