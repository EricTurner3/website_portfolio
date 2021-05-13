import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Avatar() {
 return (
   <StaticImage
     src="../images/avatar-transparent.png" 
     alt="My bitmoji waving from a laptop"
     placeholder="blurred"
     layout="fullWidth"
   />
 )
}

export default Avatar