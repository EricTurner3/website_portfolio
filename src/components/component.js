import React from "react"

import { LocalizedLink } from "gatsby-theme-i18n"


export const NavLink = ({ to, children, title = "Link", selected = false }) => {
  const textColor = selected ? "text-accent" : "text-secondary"
  const style = `font-normal text-base hover:text-accent transition duration-150 ${textColor}`
  return (
    <LocalizedLink to={to} title={title}>
      <span className={style}>{children}</span>
    </LocalizedLink>
  )
}

export const ExperienceBlock = ({ icon, org, location, subitems }) => {
  return(
    <li className="bg-primary rounded-lg m-5 p-5">
        <div className="mb-5">
          <div className="lg:flex lg:justify-between">
            <p className="text-primary font-bold text-lg">{org}</p>
            <p className="text-tertiary text-md">{location}</p>
          </div>
          <hr style={{borderColor: 'var(--color-text-tertiary)'}} />
          <div className="pl-3">
            {subitems.map(item => {
              return(
                  <li>
                    <div className="mb-5">
                      <div className="lg:flex lg:justify-between">
                        <p className="text-secondary font-bold text-md">{item.title}</p>
                        <p className = "text-tertiary text-sm">{item.start} - {item.end}</p>
                      </div>
                      <div className="ml-5">
                        
                        <ul className="mt-2 text-tertiary pl-3" style={{listStyle: 'circle'}}>
                          {item.info.map(i => {
                            return (
                              <li>{i}</li>
                            )
                          })} 
                        </ul>
                      </div>
                      </div>
                  </li>
              )
              })
            }
          </div>
          
          </div>
    </li>
  )
}

export const ExtLink = ({ children, link, newTab }) => {
  if (newTab) {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  } else {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export const ProjectLink = ({ label, url }) => {
  return (
    <span className="font-medium text-tertiary hover:text-accent">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block w-4 h-4 mb-1"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </span>
  )
}

export const ProjectPill = ({ label, pillColor }) => {

  return (
    <span className={"text-xs text-primary rounded-full py-1 px-3 mb-2 mt-1 " + pillColor}>
        {label}
    </span>
  )
}
// level 1-3 ; lang = en or it ; pt (padding top)
export const SkillPill = ({ level, lang, pt = "py-1" }) => {
  var pillColor;
  var level_txt;

  if (lang === 'en') {
      if (level === 1){level_txt = 'Beginner'; pillColor = 'bg-green-400';} 
      else if (level === 2){level_txt = 'Intermediate'; pillColor = 'bg-yellow-500';} 
      else if (level === 3){level_txt = 'Advanced'; pillColor = 'bg-red-500';} 
  }
  else if (lang === 'it'){
      if (level === 1){level_txt = 'Principiante'; pillColor = 'bg-green-400';} 
      else if (level === 2){level_txt = 'Intermedio'; pillColor = 'bg-yellow-500';} 
      else if (level === 3){level_txt = 'Avanzato'; pillColor = 'bg-red-500';} 
  }

  return (
    <span className={"text-xs text-primary rounded-full px-3 mb-2 mt-1 " + pillColor+ " " + pt}>
        {level_txt}
    </span>
  )
}

export const Heading = ({ children }) => {
  return (
    <h2 className="relative mt-12 mb-3 text-2xl font-bold text-accent">
      {children}
    </h2>
  )
}

export const SubHeading = ({ children }) => {
  return (
    <h2 className="relative mt-6 mb-2 text-lg font-semibold text-primary">
      {children}
    </h2>
  )
}

export const Paragraph = ({ children }) => {
  return (
    <p className=" max-w-screen-md mb-4 font-normal text-base leading-relaxed md:leading-normal text-tertiary">
      {children}
    </p>
  )
}


export const Button = ({ children, link, width }) => {
  let padding = "px-4 py-2"

  if (width === "wide") {
    padding = "px-8 py-2"
  } else if (width === "wider") {
    padding = "px-16 py-2"
  } else if (width === "widest") {
    padding = "px-20 py-2"
  }

  const className = `${padding} mb-1 rounded accent-gradient text-on-accent`

  return (
    <button
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </button>
  )
}

export const Callout = ({ children }) => {
  return (
    <aside className="bg-secondary border-l-2 border-accent pl-5 pr-3 py-2 rounded-r text-base">
      {children}
    </aside>
  )
}

export const LaptopBackground = _ => {
  return (
    <div aria-hidden="true">
    {/* This is the gradient for the fluid object */}
      <svg aria-hidden="true" focusable="false" className="w-0 h-0">
        <linearGradient id="fluid-gradient">
           <stop offset="0" stop-color="var(--color-stop-1)" />
            <stop offset="0.09090909090909091" stop-color="var(--color-stop-2)" />
            <stop offset="0.18181818181818182" stop-color="var(--color-stop-3)" />
            <stop offset="0.2727272727272727" stop-color="var(--color-stop-4)" />
            <stop offset="0.36363636363636365" stop-color="var(--color-stop-5)" />
            <stop offset="0.4545454545454546" stop-color="var(--color-stop-6)" />
            <stop offset="0.5454545454545454" stop-color="var(--color-stop-7)" />
            <stop offset="0.6363636363636364" stop-color="var(--color-stop-8)" />
            <stop offset="0.7272727272727273" stop-color="var(--color-stop-9)" />
            <stop offset="0.8181818181818182" stop-color="var(--color-stop-10)" />
            <stop offset="0.9090909090909092" stop-color="var(--color-stop-11)" />
            <stop offset="1" stop-color="var(--color-stop-12)" />
        </linearGradient>
      </svg>
      <div className="relative fluid  h-48 md:h-56 lg:h-72" style={{"clipPath": "inset(23.19% 12.36% 29.76% 12.03%)"}}>
        <svg 
          className="fluid-rotate-faster h-full text-fill-primary fluid-gradient"
          viewBox="15 15 175 170"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M52.9,-70.3C68.2,-61.7,80.1,-45.8,85.3,-28.1C90.6,-10.4,89.2,9.1,82.4,25.8C75.6,42.5,63.3,56.4,48.7,65.4C34.1,74.4,17,78.5,-0.9,79.7C-18.8,81,-37.7,79.4,-52.2,70.4C-66.7,61.3,-76.9,44.8,-80.5,27.6C-84.1,10.4,-81.2,-7.5,-75.5,-24.4C-69.8,-41.3,-61.5,-57.2,-48.4,-66.5C-35.4,-75.8,-17.7,-78.6,0.5,-79.4C18.8,-80.1,37.6,-78.8,52.9,-70.3Z" transform="translate(100 100)" />
        </svg>

      </div>
    </div>
  )
}


