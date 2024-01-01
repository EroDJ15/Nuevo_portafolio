import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="home"
      data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-8 lg-tex-center flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center sm:flex-row p-6"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items text-white">
        <h1 className="text-[44px] font-semibold mb-4 leading-normal text-left">
          Welcome to <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p className="lg:text-left text-justify font-serif text-xl p-4 leading-normal mb-2">
          Thank you for visiting my website! I'm Jerovic Pino, a dedicated web
          developer on a mission to create impactful online experiences. Explore
          and feel free to reach out for any inquiries or collaboration
          opportunities. Let's make the web a better place together!
        </p>
        <div data-aos="fade-right" className="flex mt-3 gap-2">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/EroDJ15"
                className="hover:text-fuchsia-500 rounded-full glow p-1 -ml-1 inline-flex items-center cursor-pointer"
                target="_blank" // Abre el enlace en una nueva ventana o pestaña del navegador
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/erodjdevelopment"
                className="hover:text-fuchsia-500 rounded-full glow p-1 -ml-1 inline-flex items-center cursor-pointer"
                target="_blank" // Abre el enlace en una nueva ventana o pestaña del navegador
              >
                <BiLogoLinkedin className="text-[28px]" />
              </a>
              <a
                href="https://wa.me/3028439502"
                className="hover:text-fuchsia-500 rounded-full glow p-1 -ml-1 inline-flex items-center cursor-pointer"
                target="_blank" // Abre el enlace en una nueva ventana o pestaña del navegador
              >
                <BsWhatsapp className="text-[28px]" />
              </a>
              <a
                href="https://jeroviclpv@gmail.com"
                className="hover:text-fuchsia-500 rounded-full glow p-1 -ml-1 inline-flex items-center cursor-pointer"
                target="blank"
              >
                <BiLogoGmail className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/image/EroDJ -1 (9).png"
        className="rounded-full border-2 p-1 border-primary img_glow w-44 h-44 lg:w-64 lg:h-auto"
        alt=""
      />
    </div>
  );
};

export default Banner;
