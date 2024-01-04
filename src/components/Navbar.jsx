import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { display } = useSelector((state) => state.navbarReducer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        display ? "flex" : "invisible"
      } flex-col sm:flex-row justify-center items-end w-full  p-6 backdrop-blur-md fixed z-10`}
    >
      <button className="sm:hidden text-white text-3xl" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </button>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row gap-4 sm:gap-14 text-white font-semibold w-full sm:w-auto`}
      >
        <a
          className="hover:text-[#55D0B3]"
          href="#me"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const aboutSection = document.getElementById("me");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          SOBRE MÍ
        </a>
        <a
          className="hover:text-[#55D0B3]"
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const skillsSection = document.getElementById("skills");
            skillsSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HABILIDADES
        </a>
        <a
          className="hover:text-[#55D0B3]"
          href="#proyects"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const projectsSection = document.getElementById("proyects");
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROYECTOS
        </a>
        <a
          className="text-[#55D0B3] hover:text-red-600"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACTO
        </a>
      </nav>
    </header>
  );
};
