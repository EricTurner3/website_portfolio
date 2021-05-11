import React from "react"
import projects from "../data/projects"
import { ProjectLink, ProjectPill } from "./component"

const ProjectGrid = _ => {
  return (
    <section className="mb-5 ml-5 mr-5">
      <ul className="mt-3 -mx-5 grid md:grid-cols-2 gap-6 md:gap-6">
        {projects.map(project => {
          return (
            <li
              key={project.title}
              className="py-5 px-6 relative group md:bg-secondary hover:bg-secondary rounded-lg"
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary ">
                      {project.title}
                  </h3>
                  <span className="flex items-center justify-start space-x-4 ">
                    {project.types.map(type => {
                      return (
                        <ProjectPill
                          label={type.label}
                        />
                      )
                    })}
                  </span>
                  <h4 className="font-base text-tertiary pr-3">
                    {project.description}
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
