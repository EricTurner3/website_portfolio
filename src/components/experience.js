import React from "react"
import { ExperienceBlock } from "./component.js"
import data_work from "../data/work.js"
import data_education from "../data/education.js"
import { useTranslation } from "react-i18next"

export const Experience = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container mx-auto pt-16">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 container">
        <div >
        <h1 className="text-3xl font-semibold text-center text-secondary">
          {t('education')}
        </h1>
            <ul>
              {data_education[i18n.language].map(edu => {
                return (
                  <ExperienceBlock
                    icon      = ''
                    id        = {edu.org_id}
                    org       = {edu.org}
                    location  = {edu.location}
                    subitems  = {edu.items}
                  />
                )
              })}
            </ul>
          </div>
          <div >
          <h1 className="text-3xl font-semibold text-center text-secondary">
          {t('professional_experience')}
          </h1>
            <ul>
            {data_work[i18n.language].map(work => {
              return (
                <ExperienceBlock
                    icon      = ''
                    id        = {work.org_id}
                    org       = {work.org}
                    location  = {work.location}
                    subitems  = {work.items}
                />
              )
            })}
            </ul>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Experience
