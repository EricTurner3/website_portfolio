import React from "react"
import { Heading } from "../components/component"
import Layout from "../components/layout"
import ProjectGrid from "../components/projectGrid"

const ProjectsPage = () => (
  <Layout activePage="projects" >
    <Heading>Project Showcase</Heading>
    <p className="text-tertiary">Some of my more notable projects!</p>

    <ProjectGrid />
    
  </Layout>
)

export default ProjectsPage
