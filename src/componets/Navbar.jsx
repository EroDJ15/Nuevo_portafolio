import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGripVertical } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const HandleClick = useCallback(() => setClick(!click), [click]);

  const content = useMemo(() => {
    return (
      <>
        <div className="text-white font-serif lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
          <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              <Link onClick={HandleClick} spy={true} smooth={true} to="home">
                home
              </Link>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              <Link onClick={HandleClick} spy={true} smooth={true} to="about">
                About
              </Link>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              <Link onClick={HandleClick} activeClass="active" spy={true} smooth={true} to="services">
                Services
              </Link>
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              <Link onClick={HandleClick} spy={true} smooth={true} to="projects">
                Projects
              </Link>
            </li>
            
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              <Link onClick={HandleClick} spy={true} smooth={true} to="contact">
                Contact
              </Link>
            </li>
           
          </ul>
        </div>
      </>
    );
  }, [click]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-slate-900' : ''}`}>
      <div className="h-10vh justify-between z-50 text-white lg:py-2 px-20 py-2">
        <div className="text-3xl font-bold flex-1 -ml-6">
          <div data-aos="fade-right">
            <img
              src="/image/logo1.png"
              className="left-auto lg:relative w-14 h-14 lg:w-25 lg:h-25 mt-4"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-10 text[18px] -mt-7">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 cursor-pointer">
                <Link spy={true} smooth={true} to="home">
                  Home
                </Link>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 cursor-pointer">
                <Link spy={true} smooth={true} to="about">
                  About
                </Link>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 cursor-pointer">
                <Link activeClass="active"  spy={true} smooth={true} to="services">
                  Services
                </Link>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 cursor-pointer">
                <Link spy={true} smooth={true} to="projects">
                  Projects
                </Link>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 cursor-pointer">
                <Link spy={true} smooth={true} to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>{click && content}</div>
      <button
        className="sm:hidden transition text-white absolute top-8 right-10"
        onClick={HandleClick}
      >
        {click ? <FaTimes /> : <FaGripVertical />}
      </button>
    </nav>
  );
}

export default Navbar;