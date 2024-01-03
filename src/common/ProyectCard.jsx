import React from "react";

export const ProyectCard = ({ img, tittle, subtittle, onClick }) => {
  return (
    <div className="h-[350px] w-[400px] rounded-xl flex flex-col gap-4">
      <img
        className="rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
        src={img}
        alt={tittle}
        onClick={onClick}
      />
      <div className="bg-[#151b1f] p-4 rounded-xl flex flex-col text-[#55D0B3] gap-2">
        <h1 className="text-3xl font-semibold flex justify-center">{tittle}</h1>
        {subtittle && (
          <div className="flex justify-center items-center gap-2 text-lg">
            <span className="mt-1 w-2 h-2 rounded-full bg-green-600"></span>
            <span>{subtittle}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProyectCard;
