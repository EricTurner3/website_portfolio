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
        <h1 className="text-3xl font-semibold text-center text-primary">
          {t('experience')}
        </h1>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 container">
        <div className="bg-primary rounded-lg m-5 p-5">
            <ul>
              {data_education[i18n.language].map(work => {
                return (
                  <ExperienceBlock
                    icon      = ''
                    title     = {work.title}
                    start     = {work.start}
                    end       = {work.end}
                    org       = {work.org}
                    location  = {work.location}
                    info      = {work.info}
                  />
                )
              })}
            </ul>
          </div>
          <div className="bg-primary rounded-lg m-5 p-5">
            <ul>
            {data_work[i18n.language].map(work => {
              return (
                <ExperienceBlock
                  icon      = ''
                  title     = {work.title}
                  start     = {work.start}
                  end       = {work.end}
                  org       = {work.org}
                  location  = {work.location}
                  info      = {work.info}
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