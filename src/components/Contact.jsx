import React from "react";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 mt-16">
      <h1 className="flex font-semibold text-4xl text-[#55D0B3]">Contacto</h1>
      <form
        action="https://formspree.io/f/xgegeznw"
        method="POST"
        className="flex flex-col gap-3 w-full max-w-[800px] px-4 md:px-0"
      >
        <div>
          <label
            htmlFor="nombre"
            className="block text-lg font-medium text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="text-white mt-1 block w-full px-3 py-2 border bg-[#21282E] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#55D0B3] focus:border-[#55D0B3]"
          />
        </div>
        <div>
          <label
            htmlFor="apellido"
            className="block text-lg font-medium text-white"
          >
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            className="text-white mt-1 block w-full px-3 py-2 border bg-[#21282E] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#55D0B3] focus:border-[#55D0B3]"
          />
        </div>
        <div>
          <label
            htmlFor="asunto"
            className="block text-lg font-medium text-white"
          >
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            className="text-white mt-1 block w-full px-3 py-2 border bg-[#21282E] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#55D0B3] focus:border-[#55D0B3]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="text-white mt-1 block w-full px-3 py-2 border bg-[#21282E] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#55D0B3] focus:border-[#55D0B3]"
          />
        </div>
        <div>
          <label
            htmlFor="descripcion"
            className="block text-lg font-medium text-white"
          >
            Descripción
          </label>
          <textarea
            name="descripcion"
            rows="4"
            className="text-white mt-1 block w-full px-3 py-2 border bg-[#21282E] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#55D0B3] focus:border-[#55D0B3]"
          ></textarea>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#55D0B3] rounded-3xl text-[#21282E] font-semibold p-4 text-lg hover:translate-y-[-1px] hover:shadow-emerald-600 shadow-md active:translate-y-0 active:shadow-none"
          >
            ENVIAR MENSAJE
          </button>
        </div>
      </form>
    </section>
  );
};
