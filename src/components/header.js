import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink} from "./component"
import { useTranslation } from "react-i18next"

const Header = ({ activePage }) => {
  const { t, i18n } = useTranslation()
  return (
    <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
      <nav
        className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
        aria-label="Main Navigation"
      >
        <NavLink to="/" aria-label="Homepage" title="Homepage">
          ericturner
        </NavLink>
        <span className="hidden sm:flex flex-grow items-center space-x-6">

          <NavLink to="/" title="Home" selected={activePage === "/"}>{t("home")}</NavLink>
          <NavLink to="/projects" title="Projects" selected={activePage === "projects"}>{t("projects")}</NavLink>
          <NavLink to="/skills" title="Skills" selected={activePage === "skills"}>{t("skills")}</NavLink>
          <a href="https://blog.ericturner.it" className="font-normal text-base hover:text-accent transition duration-150 text-secondary">{t("blog_tech")}</a>
          {/*<a href="https://italiano.ericturner.it" className="font-normal text-base hover:text-accent transition duration-150 text-secondary">{t("blog_it")}</a>*/}
          
        </span>
        <a href={ 'https://ericturner.it/' + (i18n.language === 'en' ? 'it/' : '/') + (activePage === '/' ? '' : activePage)} title={t("switch")}>{i18n.language} </a>
        <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
      </nav>
    </header>
  )
}
  

export default Header
