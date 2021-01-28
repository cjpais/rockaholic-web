import React from "react"
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

export const BoulderQR = () => {
  return (
    <div>
      <h1 style={{fontSize: "6em", margin: 0}}>BOULDER</h1>
      <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto"}}>
        <div style={{display: "flex"}}>
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>1</h1>
          <QR1 />
        </div>
        <div style={{display: "flex"}}>
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>2</h1>
          <QR2 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>3</h1>
          <QR7 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>4</h1>
          <QR4 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>5</h1>
          <QR19 />
        </div>

        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>6</h1>
          <QR5 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>7</h1>
          <QR6 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>8</h1>
          <QR15 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>9</h1>
          <QR8 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>10</h1>
          <QR23 />
        </div>

        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>11</h1>
          <QR9 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>12</h1>
          <QR10 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>13</h1>
          <QR3 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>14</h1>
          <QR12 />
        </div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>15</h1>
          <QR27 />
        </div>

        <div></div>
        <div></div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>16</h1>
          <QR11 />
        </div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div style={{display: "flex"}}> 
          <h1 style={{fontSize: "4em", paddingRight: ".5em", margin: 0}}>17</h1>
          <QR29 />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}