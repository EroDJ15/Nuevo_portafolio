import React from "react";
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import About from "./componets/About";
import Services from "./componets/Services";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";



function App() {
  return (
    <>
      <main className="bg-slate-900 min-h-screen">
        
        <Banner />
        <About />
        <Services/>
        <Projects/>
        <Contact/>
       <Footer/>
<div>
       <footer className='flex flex-col items-center -mt-8 p-4 bg-primary dark:text-cyan-50 '>
        <p className="text-white text-xs font-semibold text-center">
          &copy; 2023 Todos los derechos reservados
        </p>
        <a
          href="https://github.com/EroDJ15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs font-semibold flex items-center mt-1 p-6"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
            className="w-4 h-4 mr-2 dark:text-cyan-50"
          />
          Created by: Jerovic Pino
        </a>
      </footer>
      </div>
      </main>
      <Navbar />
    </>
  );
}

export default App;
