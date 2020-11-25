import React from 'react'
import Modal from 'react-modal'

/* Select Imports */
import CreatableSelect from 'react-select/creatable' 
import Select from 'react-select' 
import chroma from 'chroma-js'

/* Local Imports */
import { GymData, GymSetter, GymRope, GymWall } from "./Types"
import { colorMap, ydsGrades, boulderUSAGrades } from "../common/ClimbingConstants"

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: "1em",
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: "1em",
    width: "1em",
    borderColor: "#cccccc75",
    borderWidth: "1px",
    borderStyle: "solid",
  },
});

const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: { [x: string]: any }, { data, isDisabled, isFocused, isSelected }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isFocused 
        ? "#cccccc75"
        : "#fff",
      // backgroundColor: isDisabled
      //   ? null
      //   : isFocused
      //   ? color.alpha(0.1).css()
      //   : data.color,
      // color: isDisabled
      //   ? '#ccc'
      //   : chroma.contrast(color, 'white') > 4.5
      //     ? 'white'
      //     : 'black',
      color: isDisabled
        ? '#ccc'
        : '#333',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.7).css()),
      },
      ...dot(data.color)
    };
  },
  input: (styles: any) => ({ ...styles, ...dot() }),
  placeholder: (styles: any) => ({ ...styles, ...dot() }),
  singleValue: (styles: any, { data }: any) => ({ ...styles, ...dot(data.color) }),
};

interface SelectI {
  value: string,
  label: string
}

Modal.setAppElement("#root")

interface GymRouteAddModalData extends GymData {
  setParentOpen: any
  isOpen: boolean
}

export const GymRouteAddModal: React.FC<GymRouteAddModalData> = (data: GymRouteAddModalData) => {
  const [routeType, setRouteType] = React.useState("")
  const [selectedGrade, setGrade] = React.useState<SelectI | null>(null)

  function closeModal() { 
    data.setParentOpen(false)
  }

  const handleChange = (value: any, action: any) => { setGrade(value) }

  function setBoulder() {
    setRouteType("boulder")
    setGrade(null)
  }

  function setSport() {
    setRouteType("sport")
    setGrade(null)
  }

  function getColors() {
    var colorList: any[] = []
    colorMap.forEach((value, key, map) => {
      colorList.push({value: value.name, label: value.name + " (" + value.industryName + ")", color: value.hex})
    })
    return colorList
  }

  function getGrade(): SelectI[] {
    if (routeType === "boulder") {
      return boulderUSAGrades.map((grade: string) => {
        return { value: grade, label: grade}
      })
    } else if (routeType === "sport") {
      return ydsGrades.map((grade: string) => {
        return { value: grade, label: grade}
      })
    } else {
      return []
    }

  }

  return (
    <Modal
      isOpen={data.isOpen}
      onRequestClose={closeModal}
      contentLabel="LOL"
    >
      <div>
        <div style={{"display": "flex"}}>
          <h1 style={{"marginRight": "auto"}}>Add New Route</h1>
          <button onClick={closeModal}>close</button>
        </div>

        <form>
          <div>
            <h3>Route Type</h3>
            <input type="radio" id="boulder" name="route-type" value="Boulder" onChange={setBoulder}/>
            <label>Boulder</label>
            <input type="radio" id="sport" name="route-type" value="sport" onChange={setSport}/>
            <label>Sport</label>
          </div>

          { routeType !== "" && 
            <div>
              <h3>Grade</h3>
              <Select
                  onChange={handleChange}
                  value={selectedGrade}
                  options={getGrade()}
                  placeholder="Select Grade"
              />

              <h3>Color</h3>
              <Select
                  options={getColors()}
                  styles={colourStyles}
                  placeholder="Select Color"
              />

              <h3>Setter</h3>
              <CreatableSelect
                  isMulti
                  options={ data.setter?.map((setter: GymSetter) => {
                    return { value: setter.name, label: setter.name }
                  })}
                  placeholder="Select Setter(s)"
                />

              <h3>Wall</h3>
              <CreatableSelect
                  options={
                    data.gym_wall?.map((wall: GymWall) => {
                      return { value: wall.name, label: wall.name }
                    })
                  }
                  placeholder="Select Wall (if applicable)"
              />

              { routeType === "sport" && 
              <div>

                <h3>Rope</h3>
                <CreatableSelect
                  options={
                    data.gym_rope?.map((rope: GymRope) => {
                      return { value: rope.name, label: rope.name }
                    })
                  } 
                  placeholder="Select Rope (if applicable)"
                />
              </div>
              }
            </div>
          }
        </form>
      </div>
    </Modal>
  )
}