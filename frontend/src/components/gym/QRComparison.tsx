import React from "react"
import chroma from "chroma-js"

import { colorMap, simpleColorMap } from "../common/ClimbingConstants"

import mm_black from "../../mm_black.jpg"
import { BoulderQR } from "./BoulderQR"
import { SportQR } from "./SportQR"

const imageSettings = {
  src: mm_black,
  excavate: true,
  height: 100,
  width: 100
}

var QRCodeReact = require('qrcode.react');

const color = chroma("blueviolet").hex()
const colors = chroma.scale(['white', color, 'black'])
                .mode("hsl")
                .colors(9)
const colors_dark = chroma.scale([color, 'black'])
                      .mode("hsl")
                      .colors(5)
const colors_light = chroma.scale([color, 'white'])
                      .colors(5)

const qrStyle = {
  padding: "1em",
  borderRadius: "32px",
  width: "fit-content",
  background: color 
}

const square = (color: string) => {
  return {
    height: "50px",
    width: "50px",
    background: color
  }
}

type ColorProps = {
  colors: string[]
}

const Colors: React.FC<ColorProps> = (props: ColorProps) => {
  console.log(props.colors)

  return (
    <div style={{display: "flex"}}>
      {props.colors.map((color: string) => (
        <div key={color} style={square(color)}></div>
      ))}
    </div>
  )
} 


export const QRComparison = () => {
  return (
    <div>
      <BoulderQR />
      <SportQR />
      <Colors colors={colors} />
      <Colors colors={colors_dark} />
      <Colors colors={colors_light} />
    </div>
  )
}