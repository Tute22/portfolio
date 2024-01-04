import React from "react";
import { Instagram } from "../common/icons/Instagram";
import { GitHub } from "../common/icons/GitHub";
import { LinkedIn } from "../common/icons/LinkedIn";
import fotoPerfil from "../../public/FotoPerfil.png";

export const Me = () => {
  return (
    <section id="me" className="flex justify-center md:justify-end">
      <div className="bg-[#21282E] rounded-xl w-11/12">
        <div className="pt-8 p-12 flex flex-col gap-6">
          <h1 className="flex justify-center font-semibold text-4xl text-[#55D0B3] md:justify-start">
            Sobre mí
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-40">
            <section className="w-full md:w-[55%] text-2xl text-white flex flex-col gap-10">
              <p>
                Mi trayectoria inició como estudiante de Ingeniería en Sistemas
                de Información, hasta que encontré mi verdadera pasión en el
                mundo de la programación. Lo que comenzó como un interés casual
                se convirtió en una dedicación apasionada a medida que descubrí
                el poder de crear soluciones a través del código.
              </p>
              <p>
                Además, mi gran interés por el hardware añade otra dimensión
                emocionante a mi trayectoria. Siempre me entusiasma aprender
                sobre las últimas innovaciones tecnológicas y cómo pueden
                transformar nuestra realidad.
              </p>
              <p>
                Si estás en búsqueda de un profesional apasionado, orientado a
                la innovación y listo para contribuir de manera significativa en
                los proyectos que aborde, no dudes en contactarme.
              </p>
              <div className="flex justify-center mt-10">
                <a
                  href="https://drive.google.com/file/d/1Nv-kTnaWOuykRyKVTiCGKB80_swrurRU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#55D0B3] rounded-3xl text-[#21282E] p-4 font-semibold hover:translate-y-[-1px] hover:shadow-emerald-600 shadow-md active:translate-y-0 active:shadow-none">
                    DESCARGAR CV
                  </button>
                </a>
              </div>
            </section>
            <div className="flex flex-col items-center gap-10 ">
              <img
                className="rounded-3xl w-full md:w-[500px] md:h-auto "
                src={fotoPerfil}
                alt="Perfil"
              />
              <div className="flex gap-8 justify-center animate-bounce md:gap-28">
                <a
                  href="https://www.instagram.com/agussandoval16/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-10 h-10 hover:opacity-70"></Instagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/agustin-andres-sandoval/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="w-10 h-10 hover:opacity-70"></LinkedIn>
                </a>
                <a
                  href="https://github.com/Tute22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className="w-10 h-10 hover:opacity-70"></GitHub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
