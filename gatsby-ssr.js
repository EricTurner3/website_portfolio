import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script key="fontawesome" type="text/javascript" src="https://kit.fontawesome.com/746513db68.js" crossOrigin="anonymous"></script>,
     <script key="jQuery" type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous"></script>,
  ]);
}
