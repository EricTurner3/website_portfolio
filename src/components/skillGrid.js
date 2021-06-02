import React from "react"
import data_skills from "../data/skills"
import { SkillPill } from "./component"
import { useTranslation } from "react-i18next"

const SkillGrid = _ => {
  const { i18n } = useTranslation()
  return (
    <section className="mb-5 ml-5 mr-5">
      <ul className="mt-3 -mx-5 grid md:grid-cols-3 gap-4 md:gap-4">
        {Object.keys(data_skills).map(id => {
          var skill = data_skills[id];
          //console.log(skill);
          return (
            <li
              id={id}
              key={skill.name}
              className="py-5 px-6 relative group md:bg-secondary hover:bg-secondary rounded-lg"
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary ">
                      <i className={skill.icon + " text-" + skill.color}></i> {" "}
                      {skill.name}
                  </h3>
                  <h4 className="font-base text-tertiary pr-3">
                    {skill.desc[i18n.language]}
                  </h4>
                  
                </div>
                <span className="mt-1 text-sm sm:text-base text-tertiary">
                  <SkillPill level={skill.level} lang={i18n.language}/>
                </span>
              </div>
              <div className="mt-5">
                  <h4 className="font-bold text-accent pr-3">In Practice</h4>
                    {skill.subskills.map(subskill => {
                      return (
                        <ul className="border-dotted border-b-2 border-opacity-25">
                          <li className="py-2 ">
                            <h5 className="font-bold flex justify-between">{subskill.name} <span className="text-sm "><SkillPill level={subskill.level} lang={i18n.language} pt={" "}/></span></h5>
                            <p className="text-sm ml-5">{subskill.desc[i18n.language]}</p>
                          </li>
                        </ul>
                      )
                    })}
                  </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default SkillGrid
