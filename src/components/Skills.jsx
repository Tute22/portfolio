import React from "react";
import { dataSkills } from "../utils/skills";
import { SkillCards } from "../common/SkillCard";

export const Skills = () => {
  return (
    <section className="flex justify-start mt-24">
      <div className="bg-[#21282E] rounded-r-xl w-11/12">
        <div className="pt-8 p-12 flex flex-col gap-10">
          <h1
            id="skills"
            className="flex font-semibold text-4xl text-[#55D0B3]"
          >
            Habilidades
          </h1>
          <div className="grid m-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {dataSkills.map((skills) => (
              <SkillCards key={skills.name} skills={skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
