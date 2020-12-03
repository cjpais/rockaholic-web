import React from "react"
import chroma from "chroma-js"

import { colorMap, simpleColorMap } from "../common/ClimbingConstants"

import mm_black from "../../mm_black.jpg"
import climber from "../../climber.png"

const imageSettings = {
  src: mm_black,
  excavate: true,
  height: 100,
  width: 100
}

var QRCodeReact = require('qrcode.react');

let hi = simpleColorMap.get("Pink")!

const color = chroma("blueviolet").hex()
console.log(chroma.scale(['white', color, 'black']).mode("hsl"))
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

const cd = chroma.scale([color, 'black'])
            .mode("hsl")

function cj(num: number) {
  return (.5 + (.5/(5-num)) )
}
const cjcolors = [cd(cj(0)).hex(), cd(cj(1)).hex(), cd(cj(2)).hex()]

function shade(color: string, i: number, percent: number = .12): string {
  var base = chroma(color)
  let newLightness = base.get("hsl.l") - (percent * i)
  let newSaturation = base.get("hsl.s") - (percent * i)
  let newHue = base.get("hsl.h") - (percent * 15 * i)

  console.log(base.get("hsl.h"), base.get("hsl.s"), base.get("hsl.l"))
  console.log(newHue, newSaturation, newLightness)


  return base
          .set("hsl.l", newLightness)
          .set("hsl.s", newSaturation)
          .set("hsl.h", newHue)
          .hex()
}

console.log(colors)
console.log(colors_dark)
console.log(colors_light)

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

const QR2 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{padding: "1em", borderRadius: "64px", background: "rgb(70 5 130)", width: "fit-content"}}>
        <div style={{padding: "1em", borderRadius: "48px", background: "#660cb9", width: "fit-content"}}>
          <div style={qrStyle}>
            <div style={{borderRadius: "24px", backgroundColor: "#af5cfd", width: "fit-content"}}>
              <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
                <QRCodeReact
                  value="https://digitaldirtbag.xyz/route/5"
                  size={256}
                  imageSettings={ imageSettings }
                  level="H"
                  //fgColor="#33ff22"
                />
              </div>
              <div style={{display: "flex", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center"}}>
                {/* <img src={climber} alt="climber" width={96} height={96}/> */}
                <h1 style={{fontSize: "5em", margin: 0}}>V7</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const QR3 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={qrStyle}>
        <div style={{borderRadius: "24px", backgroundColor: "#af5cfd", width: "fit-content"}}>
          <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
            <QRCodeReact
              value="https://digitaldirtbag.xyz/route/5"
              size={256}
              imageSettings={ imageSettings }
              level="H"
              //fgColor="#33ff22"
            />
          </div>
          <div style={{display: "flex", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center"}}>
            {/* <img src={climber} alt="climber" width={96} height={96}/> */}
            <h1 style={{fontSize: "5em", margin: 0}}>V7</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

const QR4 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
        <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
          <QRCodeReact
            value="https://digitaldirtbag.xyz/route/5"
            size={256}
            imageSettings={ imageSettings }
            level="H"
            //fgColor="#33ff22"
          />
        </div>
          <div style={{textAlign: "center"}}>
            <h1 style={{fontSize: "5em", margin: "0px"}}>V1</h1>
          </div>
      </div>
    </div>
  )
}

const QR5 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{padding: "1em", borderRadius: "64px", background: colors_dark[2], width: "fit-content"}}>
        <div style={{padding: "1em", borderRadius: "48px", background: colors_dark[1], width: "fit-content"}}>
          <div style={qrStyle}>
            <div style={{borderRadius: "24px", backgroundColor: "white", width: "fit-content"}}>
              <div style={{padding: "1em", paddingBottom: "1em", paddingTop: "1.25em", borderRadius: "24px", background: "white"}}>
                <QRCodeReact
                  value="https://digitaldirtbag.xyz/route/5"
                  size={256}
                  imageSettings={ imageSettings }
                  level="H"
                />
              </div>
              <div style={{display: "flex", borderRadius: "24px", borderTopLeftRadius: 0, borderTopRightRadius: 0, justifyContent: "center", background: colors_light[1]}}>
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

const QR6 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{padding: "1.25em 0em", borderRadius: "32px", background: "rgb(70 5 130)", width: "fit-content"}}>
        <div style={{padding: "1.25em 0em", borderRadius: "32px", background: "#660cb9", width: "fit-content"}}>
          <div style={{borderRadius: "32px", width: "fit-content", padding: "1.25em", background: color}}>
            <div style={{borderRadius: "24px", backgroundColor: "white", width: "fit-content"}}>
              <div style={{borderRadius: "24px", background: "#af5cfd", paddingTop: "0em", paddingBottom: "0em", justifyContent: "center" }}>
                <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
                  <QRCodeReact
                    value="https://digitaldirtbag.xyz/route/5"
                    size={256}
                    imageSettings={ imageSettings }
                    level="H"
                  />
                </div>
                <div style={{textAlign: "center"}}>
                  <h1 style={{fontSize: "5em", margin: "0px"}}>V1</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const QR7 = () => {
  return (
    <div style={{margin: ".5em"}}>
        {/* <div style={{borderRadius: "24px", backgroundColor: "#af5cfd", width: "fit-content"}}> */}
        <div style={{padding: "1em", borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
          <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
            <QRCodeReact
              value="https://digitaldirtbag.xyz/route/5"
              size={256}
              imageSettings={ imageSettings }
              level="H"
              //fgColor="#33ff22"
            />
          </div>
            <div style={{textAlign: "center", paddingTop: "1em"}}>
              <h1 style={{fontSize: "5em", margin: "0px"}}>V1</h1>
            </div>
        </div>
    </div>
  )
}

const QR8 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{borderRadius: "24px", backgroundColor: colors_dark[2], width: "fit-content", paddingBottom: "1.5em"}}>
        <div style={{borderRadius: "24px", backgroundColor: colors_dark[1], width: "fit-content", paddingBottom: "1.5em"}}>
          <div style={{borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
            <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
              <QRCodeReact
                value="https://digitaldirtbag.xyz/route/5"
                size={256}
                imageSettings={ imageSettings }
                level="H"
                //fgColor="#33ff22"
              />
            </div>
            <div style={{textAlign: "center"}}>
              <h1 style={{fontSize: "5em", margin: "0px"}}>V1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const QR9 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{paddingBottom: "1.25em", borderRadius: "32px", background: colors_dark[2], width: "fit-content"}}>
        <div style={{paddingBottom: "1.25em", borderRadius: "32px", background: colors_dark[1], width: "fit-content"}}>
          <div style={{borderRadius: "32px", width: "fit-content", padding: "1.25em", background: color}}>
            <div style={{borderRadius: "24px", backgroundColor: "white", width: "fit-content"}}>
              <div style={{padding: "1em", paddingBottom: "1em", paddingTop: "1.25em", borderRadius: "24px", background: "white"}}>
                <QRCodeReact
                  value="https://digitaldirtbag.xyz/route/5"
                  size={256}
                  imageSettings={ imageSettings }
                  level="H"
                />
              </div>
              <div style={{display: "flex", borderRadius: "24px", borderTopLeftRadius: 0, borderTopRightRadius: 0, justifyContent: "center", background: colors_light[1]}}>
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

const QR10 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{padding: "0em 0em 1.25em 0em", borderRadius: "32px", background: "rgb(70 5 130)", width: "fit-content"}}>
        <div style={{padding: "0em 0em 1.25em 0em", borderRadius: "32px", background: "#660cb9", width: "fit-content"}}>
          <div style={{borderRadius: "32px", width: "fit-content", padding: "1.25em", background: color}}>
            <div style={{borderRadius: "24px", background: "#af5cfd", paddingTop: "0em", paddingBottom: "0em", justifyContent: "center" }}>
              <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
                <QRCodeReact
                  value="https://digitaldirtbag.xyz/route/5"
                  size={256}
                  imageSettings={ imageSettings }
                  level="H"
                />
              </div>
              <div style={{textAlign: "center"}}>
                <h1 style={{fontSize: "5em", margin: "0px"}}>V1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const QR11 = () => {
  return (
    <div style={{margin: ".5em"}}>
        {/* <div style={{borderRadius: "24px", backgroundColor: "#af5cfd", width: "fit-content"}}> */}
        <div style={{padding: "1em", borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
          <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
            <QRCodeReact
              value="https://digitaldirtbag.xyz/route/5"
              size={256}
              imageSettings={ imageSettings }
              level="H"
              //fgColor="#33ff22"
            />
          </div>
          <div style={{display: "flex", backgroundColor: colors_light[1], borderRadius: "18px", marginTop: "1.5em", marginBottom: ".5em", justifyContent: "center"}}>
              <h1 style={{fontSize: "5em", margin: 0}}>V7</h1>
          </div>
        </div>
    </div>
  )
}

const QR12 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={{borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
        <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
          <QRCodeReact
            value="https://digitaldirtbag.xyz/route/5"
            size={256}
            imageSettings={ imageSettings }
            level="H"
            //fgColor="#33ff22"
          />
        </div>
        <div style={{textAlign: "center"}}>
          <h1 style={{fontSize: "5em", margin: "0px", color: colors_light[2]}}>V1</h1>
        </div>
      </div>
    </div>
  )
}

const QR15 = () => {
  return (
    <div style={{margin: ".5em"}}>
        {/* <div style={{borderRadius: "24px", backgroundColor: "#af5cfd", width: "fit-content"}}> */}
        <div style={{padding: "1em", borderRadius: "24px", backgroundColor: "blueviolet", width: "fit-content"}}>
          <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
            <QRCodeReact
              value="https://digitaldirtbag.xyz/route/5"
              size={256}
              imageSettings={ imageSettings }
              level="H"
              //fgColor="#33ff22"
            />
          </div>
            <div style={{textAlign: "center", paddingTop: "1em"}}>
              <h1 style={{fontSize: "5em", margin: "0px", color: "white"}}>V1</h1>
            </div>
        </div>
    </div>
  )
}

const QR19 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={qrStyle}>
        <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
          <QRCodeReact
            value="https://digitaldirtbag.xyz/route/5"
            size={256}
            imageSettings={ imageSettings }
            level="H"
            //fgColor="#33ff22"
          />
        </div>
        <div style={{display: "flex", marginTop: "-1.25em", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center", background: "white"}}>
          {/* <img src={climber} alt="climber" width={96} height={96}/> */}
          {/* <h1 style={{fontSize: "5em", margin: 0, color: colors_light[1]}}>V7</h1> */}
          <h1 style={{fontSize: "5em", margin: 0}}>V7</h1>
        </div>
      </div>
    </div>
  )
}

const QR23 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={qrStyle}>
        <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
          <QRCodeReact
            value="https://digitaldirtbag.xyz/route/5"
            size={256}
            imageSettings={ imageSettings }
            level="H"
            //fgColor="#33ff22"
          />
        </div>
        <div style={{display: "flex", marginTop: "-1.25em", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center", background: "white"}}>
          {/* <img src={climber} alt="climber" width={96} height={96}/> */}
          <h1 style={{fontSize: "5em", margin: 0, color: colors_dark[1]}}>V7</h1>
        </div>
      </div>
    </div>
  )
}

const QR27 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={qrStyle}>
        <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
          <QRCodeReact
            value="https://digitaldirtbag.xyz/route/5"
            size={256}
            imageSettings={ imageSettings }
            level="H"
            //fgColor="#33ff22"
          />
        </div>
        <div style={{display: "flex", marginTop: "-1.25em", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center", background: "white"}}>
          {/* <img src={climber} alt="climber" width={96} height={96}/> */}
          <h1 style={{fontSize: "5em", margin: 0, color: colors_light[1]}}>V7</h1>
        </div>
      </div>
    </div>
  )
}

const QR29 = () => {
  return (
    <div style={{margin: ".5em"}}>
      <div style={qrStyle}>
        <div style={{borderRadius: "24px", backgroundColor: colors_light[2], width: "fit-content"}}>
          <div style={{padding: "1em", borderRadius: "24px", background: "white"}}>
            <QRCodeReact
              value="https://digitaldirtbag.xyz/route/5"
              size={256}
              imageSettings={ imageSettings }
              level="H"
              //fgColor="#33ff22"
            />
          </div>
          <div style={{display: "flex", borderRadius: "24px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", paddingTop: "1.5em", paddingBottom: "1.5em", justifyContent: "center"}}>
            {/* <img src={climber} alt="climber" width={96} height={96}/> */}
            <h1 style={{fontSize: "5em", margin: 0, color: colors_dark[2]}}>V7</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export const QRComparison = () => {
  return (
    <div>
      <h1 style={{fontSize: "6em", margin: 0}}>BOULDER</h1>
      <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto"}}>
        <QR1 />
        <QR2 />
        <QR7 />
        <QR4 />
        <QR19 />

        <QR5 />
        <QR6 />
        <QR15 />
        <QR8 />
        <QR23 />

        <QR9 />
        <QR10 />
        <QR3 />
        <QR12 />
        <QR27 />

        <div></div>
        <div></div>
        <QR11 />
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <QR29 />
        <div></div>
        <div></div>
      </div>
      <h1>SPORT</h1>
      <Colors colors={colors} />
      <Colors colors={colors_dark} />
      <Colors colors={colors_light} />
      <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto"}}>
      </div>
    </div>
  )
}