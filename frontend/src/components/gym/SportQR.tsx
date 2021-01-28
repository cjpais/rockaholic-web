import React from 'react'
import chroma from "chroma-js"

import mm_black from "../../mm_black.jpg"

var QRCodeReact = require('qrcode.react');

const imageSettings = {
  src: mm_black,
  excavate: true,
  height: 100,
  width: 100
}


const color = chroma("blueviolet").hex()
const colors = chroma.scale(['white', color, 'black'])
                .mode("hsl")
                //.correctLightness()
                .padding(.1)
                .colors(9)
const colors_dark = chroma.scale([color, 'black'])
                      .mode("hsl")
                      // .gamma(.75)
                      // .padding([0, .2])
                      .colors(5)
const colors_light = chroma.scale([color, 'white'])
                      // .padding([0, .2])
                      .colors(5)

const qrStyle = {
  padding: "1em",
  borderRadius: "32px",
  width: "fit-content",
  background: color 
}

const QR1 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{padding: "1em", borderRadius: "64px", background: colors_dark[2], width: "fit-content"}}>
        <div style={{padding: "1em", borderRadius: "48px", background: colors_dark[1], width: "fit-content"}}>
          <div style={qrStyle}>
            <div style={{borderRadius: "24px", backgroundColor: "white", width: "fit-content"}}>
              <div style={{padding: "1em", paddingBottom: "4em", paddingTop: "1em", borderRadius: "24px", background: "white"}}>
                <QRCodeReact
                  value="https://digitaldirtbag.xyz/route/5"
                  size={256}
                  imageSettings={ imageSettings }
                  level="H"
                />
              </div>
              <div style={{display: "flex", borderRadius: "24px", justifyContent: "center", background: colors_light[1]}}>
                {/* <img src={climber} alt="climber" width={96} height={96}/> */}
                <h1 style={{fontSize: "5em", margin: 0}}>V1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SportQR = () => {
  return ( 
    <div>
      <h1 style={{fontSize: "6em", margin: 0}}>SPORT</h1>
      <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <div style={{display: "flex"}}>
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>1</h1>
          <QR1 />
        </div>
      </div>
    </div>
  )
}