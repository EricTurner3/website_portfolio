import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import MobileNav from "./mobileNav"
import Footer from "./footer"

const Layout = ({ children, activePage, showFooter = true, footerType = "relative", container_width="max-w-screen-xl" }) => {
  return (
    <>
      <ThemeProvider>
        <MobileNav />
        <Header activePage={activePage} />
        <main className={"container m-auto px-5 mt-16 sm:px-12 md:px-20 " + container_width}>
          {children}
        </main>
        {showFooter && <Footer footerType={footerType} />}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
