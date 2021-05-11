import React from "react"
import { Heading } from "../components/component"
import Layout from "../components/layout"
import ProjectGrid from "../components/projectGrid"
import { useTranslation } from "react-i18next"

const ProjectsPage = () => 
{
  const { t } = useTranslation()

  return (
    <Layout activePage="projects" >
      <Heading>{t('project_header')}</Heading>
      <p className="text-tertiary">{t('project_subheader')}</p>

      <ProjectGrid />
      
    </Layout>
  )
}

export default ProjectsPage
