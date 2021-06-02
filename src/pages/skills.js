import React from "react"
import { Heading } from "../components/component"
import Layout from "../components/layout"
import SkillGrid from "../components/skillGrid"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"

const SkillsPage = () => 
{
  const { t } = useTranslation()

  return (
    <Layout activePage="skills" container_width="max-w-screen-2xl" >
    <Seo />
      <Heading>{t('skills')}</Heading>

      <SkillGrid />
      
    </Layout>
  )
}

export default SkillsPage
