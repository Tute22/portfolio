import React from "react";
import { dataSkills } from "../utils/skills";
import { SkillCards } from "../common/SkillCard";

export const Skills = () => {
  return (
    <section className="flex justify-center mt-24 md:justify-start">
      <div className="bg-[#21282E] rounded-xl w-11/12 md:w-11/12 ">
        <div className="pt-8 p-4 md:p-12 flex flex-col gap-10">
          <h1
            id="skills"
            className="text-center md:text-left font-semibold text-3xl md:text-4xl text-[#55D0B3]"
          >
            Habilidades
          </h1>
          <div className="grid m-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {dataSkills.map((skills) => (
              <SkillCards key={skills.name} skills={skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
