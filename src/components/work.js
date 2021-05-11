import React from "react"
import { Chrono } from "react-chrono";
import data_work from "../data/work.js"

export const Work = () => {
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container mx-auto pt-16">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Work {" "}
          <span role="img" aria-label="briefcase">
            💼
          </span>
        </h1>
        <div className="mt-10">
          <Chrono 
            items={data_work} 
            mode="VERTICAL_ALTERNATING" 
            cardHeight="100px"
            theme={{primary:"var(--color-fill-primary)", secondary: "var(--color-fill-secondary)", cardBgColor: "var(--color-bg-primary)", cardForeColor: "var(--color-text-primary)"}}
          />
        </div>
      </div>
    </div>
  )
}

export default Work