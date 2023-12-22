import React from "react";

const Footer = () => {
  <footer className='flex flex-col items-center mt-auto py-4 bg-primary dark:text-cyan-50 '>
        <p className="dark:text-cyan-50 text-white text-xs font-semibold text-center">
          &copy; 2023 Todos los derechos reservados
        </p>
        <a
          href="https://github.com/EroDJ15"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-cyan-50 text-xs font-semibold flex items-center mt-0"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
            className="w-4 h-4 mr-1 dark:text-cyan-50"
          />
          Created by: Jerovic Pino
        </a>
      </footer>
};

export default Footer;
