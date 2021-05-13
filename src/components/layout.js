import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import MobileNav from "./mobileNav"
import Footer from "./footer"

const Layout = ({ children, activePage, footer = true, footerType = "relative" }) => {
  return (
    <>
      <ThemeProvider>
        <MobileNav />
        <Header activePage={activePage} />
        <main className="container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
          {children}
        </main>
        {footer && <Footer footerType={footerType} />}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
