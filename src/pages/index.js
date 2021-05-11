import React from "react"
import { LaptopBackground } from "../components/component"
import Layout from "../components/layout"
import Avatar from "../components/image"
import Work from "../components/work"

const IndexPage = () => (
  <Layout activePage="/">
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <div className="flex flex-row">
        <div className='flex-col lg:mr-10'>
          <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
            ERIC TURNER
          </h1>
          <p className="text-xl mt-2 mb-2 text-fill-primary sm:text-left md:text-center lg:text-left">
            Integration Developer
          </p>
          <p className="text-secondary text-xs sm:text-left md:text-center lg:text-left">
            As an Integration Developer, I create applications and experiences to connect multiple existing systems together into one hub for ease-of-use and efficiency. I discovered my passion for full-stack development in college and I realized I loved creating experiences from the ground up to increase efficiency and data integrity across the board. I was given an excellent employment opportunity at my former school district to really let my talents and creativity shine.
          </p>
        </div>
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
    <Work />
    
  </Layout>
)

export default IndexPage
