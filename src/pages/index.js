import React from "react"
import { LaptopBackground, Button } from "../components/component"
import Layout from "../components/layout"
import Avatar from "../components/image"
import { StaticImage } from "gatsby-plugin-image"
import Experience from "../components/experience"
import { useTranslation } from "react-i18next"
import data_me from "../data/intro.js"
import Seo from "../components/seo"
import { GitHub, Linkedin  } from 'react-feather'

const IndexPage = () => {
  const { i18n } = useTranslation()
  return (
    <Layout activePage="/">
    <Seo />
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6 ">
        <div className="flex flex-row">
          {data_me[i18n.language].map(me => {
            return (
              <div className='flex-col lg:mr-10'>
                <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary text-glow-primary font-semibold sm:text-left md:text-center lg:text-left">
                  {me.name}
                </h1>
                <p className="text-xl mt-2 mb-2 text-fill-primary text-glow-accent sm:text-left md:text-center lg:text-left">
                  {me.jobtitle}
                </p>
                <p className="text-secondary text-xs sm:text-left md:text-center lg:text-left">
                  <StaticImage
                    className="m-2 badge-img"
                    src="../images/security.png" 
                    alt="CompTIA Security+ ce"
                    width="600"
                    layout="fullWidth"
                  />
                  <StaticImage
                    className="m-2 badge-img"
                    src="../images/pentest.png" 
                    alt="CompTIA PenTest+ ce"
                    placeholder="blurred"
                    width="600"
                    layout="fullWidth"
                  />
                  <StaticImage
                    className="m-2 badge-img"
                    src="../images/cysa.png" 
                    alt="CompTIA Cybersecurity Analyst+"
                    width="600"
                    layout="fullWidth"
                  />
                  <StaticImage
                    className="m-2 badge-img"
                    src="../images/chfi.png" 
                    alt="EC-Council Computer Hacking Forensic Investigator"
                    placeholder="blurred"
                    width="600"
                    layout="fullWidth"
                  />
                </p>
                <p className="text-secondary text-xs sm:text-left md:text-center lg:text-left">
                  {me.desc}
                </p> <br />
                <Button link="mailto:me@ericturner.it"><span role="img" aria-label="wave">👋 </span>{me.cta_contact}</Button>
                <Button link='https://linkedin.com/in/ericturner31'><span className="inline-svg-icon"><Linkedin size={18}/></span>{" "}LinkedIn</Button>
                <Button link='https://github.com/EricTurner3'><span className="inline-svg-icon"><GitHub  size={18}/></span>{" "}GitHub</Button>
              </div>
            )
          })}
          
        </div>
        
        <div id="avatar-right" className="relative h-48 md:h-56 lg:h-72">
        <LaptopBackground />
          <div className="absolute w-full h-full top-0 flex items-center justify-center">
            <div className="w-full overflow-hidden">
              <Avatar /> 
            </div>
          </div>
        </div>
      </div>
      <Experience />
      
    </Layout>
  )
}
  

export default IndexPage
