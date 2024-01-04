import React, { useState } from "react";
import { ProyectCard } from "../common/ProyectCard";
import { Modal } from "./Modal";
import firstplug from "../../public/first.png";
import fastDelivery from "../../public/fast.png";
import rinconMatero from "../../public/rincon.png";
import tmdb from "../../public/tmdb2.png";
import { useDispatch } from "react-redux";
import { setDisplay } from "../store/navbarSlice";

export const Proyects = () => {
  const [modalInfo, setModalInfo] = useState(null);
  const dispatch = useDispatch();

  const handleCardClick = (info) => {
    setModalInfo(info);
    dispatch(setDisplay(false));
  };

  const closeModal = () => {
    setModalInfo(null);
    dispatch(setDisplay(true));
  };

  return (
    <section id="proyects" className="flex justify-center mt-24">
      <div className="bg-[#21282E] rounded-xl w-11/12 p-8 ">
        <div className="flex flex-col gap-6 pb-10">
          <h1 className="font-semibold text-center text-4xl text-[#55D0B3] ">
            Proyectos
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-40 mt-8">
            <ProyectCard
              img={firstplug}
              tittle={"First-Plug"}
              subtittle={"En desarrollo"}
              onClick={() =>
                handleCardClick({
                  img: firstplug,
                  tittle: "First-Plug",
                  details:
                    "Desarrollo de plataforma web donde el foco principal es la gestión, adquisición y control de inventario, simplificando el onboarding y equipamiento para trabajadores remotos.",
                  URLClient:
                    "https://github.com/sebikap-gm2/First-Plug-Platform-Client",
                  URLApi:
                    "https://github.com/sebikap-gm2/First-Plug-Platform-Api",
                })
              }
            />
            <ProyectCard
              img={fastDelivery}
              tittle={"Fast Delivery"}
              subtittle={"En desarrollo"}
              onClick={() =>
                handleCardClick({
                  img: fastDelivery,
                  tittle: "Fast Delivery",
                  details:
                    "Aplicación web (mobile first) para reparto de productos/paquetería con geolocalización y seguimiento en tiempo real. Posee perfiles de usuario, administrador y repartidor.",
                  URLClient: "https://github.com/Tute22/Chacurbanos-front",
                  URLApi: "https://github.com/Tute22/Chacurbanos-back",
                })
              }
            />
            <ProyectCard
              img={rinconMatero}
              tittle={"Rincon Matero"}
              onClick={() =>
                handleCardClick({
                  img: rinconMatero,
                  tittle: "Rincon Matero",
                  details:
                    "Eccomerce de venta de productos para el mate. Posee registro de usuarios y login, perfil de usuario, carrito de compras, checkout, pagos con Mercado Pago, panel de administrador.",
                  URLClient: "https://github.com/nahuelRo/rincon-matero-front",
                  URLApi: "https://github.com/nahuelRo/rincon-matero-back",
                })
              }
            />
            <ProyectCard
              img={tmdb}
              tittle={"TMDB"}
              onClick={() =>
                handleCardClick({
                  img: tmdb,
                  tittle: "TMDB",
                  details:
                    "Aplicacion web para buscar peliculas y series, consumiendo la API de TMDB. Posee registro de usuarios y login.",
                  URLClient: "https://github.com/Tute22/26-checkpoint-TMDB",
                  URLApi:
                    "https://developer.themoviedb.org/docs/getting-started",
                })
              }
            />
          </div>
        </div>
      </div>

      {modalInfo && <Modal info={modalInfo} onClose={closeModal} />}
    </section>
  );
};
