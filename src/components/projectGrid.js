import React from "react"
import data_projects from "../data/projects"
import data_skills from "../data/skills"
import { ProjectLink, ProjectPill } from "./component"
import { useTranslation } from "react-i18next"

const ProjectGrid = _ => {
  const { i18n } = useTranslation()
  return (
    <section className="mb-5 ml-5 mr-5">
      {/* Actual Grid of Projects */}
      <ul className="mt-3 -mx-5 grid md:grid-cols-2 gap-6 md:gap-6">
        {data_projects.map(project => {
          return (
            <li
              key={project.title}
              className="project-card py-5 px-6 relative group bg-secondary rounded-lg"
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-lg font-semibold text-primary text-glow-primary">
                      {project.title}
                  </h3>
                  <span className={project.type === 'Certification' ? ' text-xs font-semibold text-yellow-400' : 'text-xs font-semibold text-red-400'}>{project.type}</span>
                  <span className="flex items-center justify-start space-x-4 ">
                    {project.skills.map(one_skill => {
                      return (
                        <ProjectPill
                          label={data_skills[one_skill].name}
                          data={one_skill}
                          pillColor={"bg-" + data_skills[one_skill].color}
                          extraClass="project-category"
                        />
                      )
                    })}
                  </span>
                  <h4 className="font-base text-tertiary pr-3">
                    {project.description[i18n.language]}
                  </h4>
                  <div className="flex items-center justify-start space-x-4 absolute bottom-0 mb-5">
                    {project.links.map(link => {
                      return (
                        <ProjectLink
                          key={link.url}
                          label={link.label}
                          url={link.url}
                        />
                      )
                    })}
                  </div>
                </div>
                <span className="mt-1 text-sm sm:text-base text-tertiary">
                  {project.year}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectGrid
