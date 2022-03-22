import React from "react"
import { Heading, ProjectPill } from "../components/component"
import Layout from "../components/layout"
import ProjectGrid from "../components/projectGrid"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import data_skills from "../data/skills"

const ProjectsPage = () => 
{
  const { t } = useTranslation()


  return (
    <Layout activePage="projects"  container_width="max-w-screen-2xl">
    <Seo />
      <Heading>{t('project_header')}</Heading>
      <p className="text-tertiary">{t('project_subheader')}</p>
      {/* Filter Block */}
      <div className="rounded-lg bg-secondary p-3 mt-3">
      <ProjectPill
              label="All"
              data="*"
              pillColor="bg-pink-200"
              extraClass="m-2 filter-category selected"
            />
        {Object.keys(data_skills).filter(skill => data_skills[skill].filterable === true).map(filteredName => {
            return(
              <ProjectPill
              label={data_skills[filteredName].name}
              data={filteredName}
              pillColor={"bg-" + data_skills[filteredName].color}
              extraClass="m-2 filter-category"
            />
          )
        })}
      </div>

      <ProjectGrid />
      
    </Layout>
  )
}

export default ProjectsPage
