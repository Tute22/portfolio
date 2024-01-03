import React from "react";

export const SkillCards = ({ skills }) => {
  return (
    <>
      <button className="cursor-auto">
        <div className="grid grid-cols-2 justify-center items-center ">
          <div className="m-auto">
            <img src={skills.image} alt="logos" width="64" height="64" />
          </div>
          <div className="text-2xl">
            <p className="text-white">{skills.name}</p>
          </div>
        </div>
      </button>
    </>
  );
};
