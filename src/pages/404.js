import React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout activePage="/404" footerType="fixed">
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold text-center">
        404 Page Not Found! {" "}
          <span role="img" aria-label="sad pensive face">
            😔
          </span>
      </h1>
    </div>
  </Layout>
)

export default NotFoundPage