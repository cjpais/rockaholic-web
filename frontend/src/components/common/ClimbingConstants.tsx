import { GymHoldColor } from "../gym/Types"

export const ydsGrades: string[]= [
  "5.4", "5.5", "5.6", "5.7", "5.8", "5.9",
  "5.10a", "5.10b", "5.10c", "5.10d",
  "5.11a", "5.11b", "5.11c", "5.11d",
  "5.12a", "5.12b", "5.12c", "5.12d",
  "5.13a", "5.13b", "5.13c", "5.13d",
  "5.14a", "5.14b", "5.14c", "5.14d",
  "5.15a", "5.15b", "5.15c", "5.15d",
]

export const boulderUSAGrades: string[]= [
  "VE", "VB", 
  "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", 
  "V10", "V11", "V12", "V12", "V13", "V14", "V15", "V16", "V17"
]

export const colorMap:Map<string, GymHoldColor> = new Map([
  // 50 SHADES OF GREY
  ["White", {name: "White", industryName: "12-01", hex: "#ffffff"}],
  ["Eggshell", {name: "Eggshell", industryName: "15-14", hex: "#dcc7a8"}],
  ["Grey", {name: "Grey", industryName: "18-09", hex: "#969090"}],
  ["Light Grey", {name: "Light Grey", industryName: "18-12", hex: "#c9ced9"}],
  ["Charcoal", {name: "Charcoal", industryName: "18-03", hex: "#4f4647"}],
  ["Black", {name: "Black", industryName: "18-01", hex: "#1a1a1a"}],

  // REDS
  ["Red", {name: "Red", industryName: "11-12", hex: "#e7202b"}],
  ["Bright Red", {name: "Bright Red", industryName: "11-24", hex: "#fd1414"}],
  ["Dark Red", {name: "Dark Red", industryName: "11-01", hex: "#c31923"}],
  ["Brick", {name: "Brick", industryName: "11-09", hex: "#be6048"}],

  // PINK
  ["Pink", {name: "Pink", industryName: "11-26", hex: "#fe38d1"}],
  ["Light Pink", {name: "Light Pink", industryName: "11-20", hex: "#ff82b7"}],
  ["Neon Pink", {name: "Neon Pink", industryName: "11-25", hex: "#f8026d"}],

  // ORANGES
  ["Orange", {name: "Orange", industryName: "14-01", hex: "#ff5a00"}],
  ["Burnt Orange", {name: "Burnt Orange", industryName: "14-04", hex: "#d76218"}],
  ["Melon Orange", {name: "Melon Orange", industryName: "14-06", hex: "#f39f0c"}],
  ["Neon Orange", {name: "Neon Orange", industryName: "14-11", hex: "#ff3d2f"}],

  // YELLOWS
  ["Yellow", {name: "Yellow", industryName: "15-12", hex: "#fceb31"}],
  ["Mustard Yellow", {name: "Mustard Yellow", industryName: "15-01", hex: "#fad50b"}],
  ["Neon Yellow", {name: "Neon Yellow", industryName: "15-09", hex: "#d6ff00"}],

  // BROWN
  ["Brown", {name: "Brown", industryName: "11-17", hex: "#995b50"}],
  ["Dark Brown", {name: "Dark Brown", industryName: "11-11", hex: "#402e2a"}],
  ["Light Brown", {name: "Light Brown", industryName: "11-30", hex: "#735e4f"}],
  ["Dune", {name: "Dune", industryName: "15-06", hex: "#cfa364"}],

  // GREEN
  ["Green", {name: "Green", industryName: "16-16", hex: "#399f28"}],
  ["Bright Green", {name: "Bright Green", industryName: "16-08", hex: "#87b23f"}],
  ["Lime Green", {name: "Lime Green", industryName: "16-09", hex: "#88ae2c"}],
  ["Dark Green", {name: "Dark Green", industryName: "16-13", hex: "#1e8820"}],
  ["Gum Leaf Green", {name: "Gum Leaf Green", industryName: "16-26", hex: "#a4d3b3"}],
  ["Alien Green", {name: "Alien Green", industryName: "16-29", hex: "#05E055"}],
  ["Neon Green", {name: "Neon Green", industryName: "06-06", hex: "#029f12"}],
  ["Bright Neon Green", {name: "Bright Neon Green", industryName: "16-18", hex: "#00c925"}],

  // BLUE
  ["Blue", {name: "Blue", industryName: "13-01", hex: "#0072c6"}],
  ["Light Blue", {name: "Light Blue", industryName: "13-15", hex: "#67a6d1"}],
  ["Dark Blue", {name: "Dark Blue", industryName: "13-14", hex: "#2553b6"}],
  ["Marine Blue", {name: "Marine Blue", industryName: "13-24", hex: "#24b1bc"}],
  ["Neon Blue", {name: "Neon Blue", industryName: "13-18", hex: "#0c58ba"}],

  // PURPLE
  ["Purple", {name: "Purple", industryName: "07-13", hex: "#533d93"}],
  ["Light Purple", {name: "Light Purple", industryName: "17-18", hex: "#814198"}],
  ["Dark Purple", {name: "Dark Purple", industryName: "17-16", hex: "#35165f"}],

])

export const simpleColorMap:Map<string, GymHoldColor> = new Map([
  // 50 SHADES OF GREY
  ["White", {name: "White", industryName: "12-01", hex: "#ffffff"}],
  ["Grey", {name: "Grey", industryName: "18-09", hex: "#969090"}],
  ["Black", {name: "Black", industryName: "18-01", hex: "#1a1a1a"}],

  // REDS
  ["Red", {name: "Red", industryName: "11-12", hex: "#e7202b"}],

  // PINK
  ["Pink", {name: "Pink", industryName: "11-26", hex: "#fe38d1"}],

  // ORANGES
  ["Orange", {name: "Orange", industryName: "14-01", hex: "#ff5a00"}],

  // YELLOWS
  ["Yellow", {name: "Yellow", industryName: "15-12", hex: "#fceb31"}],

  // BROWN
  ["Brown", {name: "Brown", industryName: "11-17", hex: "#995b50"}],
  ["Dune", {name: "Dune", industryName: "15-06", hex: "#cfa364"}],

  // GREEN
  ["Green", {name: "Green", industryName: "16-16", hex: "#399f28"}],
  ["Bright Green", {name: "Bright Green", industryName: "16-08", hex: "#87b23f"}],

  // BLUE
  ["Blue", {name: "Blue", industryName: "13-01", hex: "#0072c6"}],
  ["Light Blue", {name: "Light Blue", industryName: "13-15", hex: "#67a6d1"}],

  // PURPLE
  ["Purple", {name: "Purple", industryName: "07-13", hex: "#533d93"}],

])