import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink} from "./component"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <NavLink to="/" aria-label="Homepage" title="Homepage">
        ericturner
      </NavLink>
      <span className="hidden sm:flex flex-grow items-center space-x-6">

        <NavLink to="/" title="Home" selected={activePage === "/"}>Home</NavLink>
        <NavLink to="/projects" title="Projects" selected={activePage === "projects"}>Projects</NavLink>
        <a href="https://blog.ericturner.it" target="_blank" rel="noreferrer" className="font-normal text-base hover:text-accent transition duration-150 text-secondary">Tech Blog</a>
        <a href="https://italiano.ericturner.it" target="_blank" rel="noreferrer" className="font-normal text-base hover:text-accent transition duration-150 text-secondary">Italian Blog</a>
        
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>
  </header>
)

export default Header