import React from 'react'
import { colorMap } from "./ClimbingConstants"

const circle = (color: string) => {
  return ({
    "height": "25px",
    "width": "25px",
    "borderRadius": "50%",
    // "borderColor": "black",
    // "borderWidth": ".125em",
    // "borderStyle": "solid",
    "boxShadow": "0px 1px 1px 1px #cccccc",
    "backgroundColor": colorMap.get(color) ? colorMap.get(color)?.hex : "blue",
    "display": "inline-block"
  })
}

type CircleParams = {
  color: string
  height?: number
  width?: number
}

export const GymHoldColorCircle: React.FunctionComponent<CircleParams> = (params) => {
  return <span style={circle(params.color)}></span>
}