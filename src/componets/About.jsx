import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-right"
      id="about"
      className="px-10 lg:px-60 p-20 lg:mt-20"
      style={{ position: "relative", top: "-80px", left: "5px" }}
    >
      <div>
        <h1 className="text-[38px] px-2  text-white font-semibold mb-6 leading-normal pt-4 lg:text-center justify-items-center lg:items-center">
          <span className="text-fuchsia-500">About</span> Me
        </h1>
      </div>
      <div
        data-aos="fade-down"
        className="flex flex-col sm:flex-row items-center text-white text-center gap-6 lg:gap-32"
      >
        <img
          src="/image/19362653-768x432.jpg"
          className="rounded-full border-4 p-1 border-primary img_glow left-1 lg:relative justify-self-center w-36 h-36 lg:w-52 lg:h-52 -top-7" // Agregada la clase mt-4 para ajustar la posición vertical
          alt=""
        />
        <div data-aos="fade-left">
          <h2 className="space-x-2 text-lg font-serif mb-20 leading-normal lg:py-1 flex-row lg:items-start text-white lg:px-2 px-6 py-6 text-left gap-5 flex lg:flex-row justify-between lg:gap-28 items-center">
            {" "}
            Hi there! I'm Jerovic Pino, a passionate web developer specializing
            in REACT, JS CSS, TAILWIND, HTML,PYTHON. My focus is on clean design
            and creating intuitive, efficient web solutions. With experience in
            diverse projects, I'm committed to innovation and continuous
            improvement. Beyond the screen, I love exploring new technologies
            and contributing to open-source projects. Ready to bring your next
            digital idea to life!.
          </h2>
          <div className="flex space-x-0">
            <button className="transition ease-in-out duration-300  relative -top-14 overflow-hidden glow uppercase text-lg hover:bg-fuchsia-800 rounded-lg py-3 px-6 text-white border-2 font-semibold justify-center left-2">
              H/V
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
