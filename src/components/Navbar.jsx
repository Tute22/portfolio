import React from "react";

export const Navbar = () => {
  return (
    <header className="flex justify-center p-6 w-full backdrop-blur-md fixed z-10">
      <nav className="flex gap-14 text-white font-semibold">
        <a
          className="hover:text-[#55D0B3]"
          href="#me"
          onClick={(e) => {
            e.preventDefault();
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
            const aboutSection = document.getElementById("skills");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HABILIDADES
        </a>
        <a
          className="hover:text-[#55D0B3]"
          href="#proyects"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("proyects");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROYECTOS
        </a>
        <a
          className="text-[#55D0B3] hover:text-red-600"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("contact");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACTO
        </a>
      </nav>
    </header>
  );
};
