import React from "react"

// TODO maybe move to Tabulator.js
import { html } from "gridjs"
import { Grid, _, } from 'gridjs-react';
import { RowSelection } from "gridjs-selection";

import { GymData, GymRoute } from "./Types"
import { GymHoldColorCircle } from "../common/HoldColorCircle"

export const GymRouteTable: React.FC<GymData> = (routes: GymData) => {

  const columns = [
    {
      id: "selector",
      name: "Select",
      plugin: {
        component: RowSelection,
        props: {
          id: (row: any) => row.cell(1).data
        }
      }
    },
    { 
      name: "Name",
      id: "name",
      formatter: (cell: string) => html(`<b>${cell}</b>`),
    }, 
    { 
      name: "Color",
      id: "color",
      formatter: (cell: string) => _(<GymHoldColorCircle color={cell}/>)
    },
    {
      name: "Grade",
      id: "set_grade",
      formatter: (cell: string) => _(`${cell}`)
    },
    {
      name: "Wall",
      id: "gym_wall.name",
      data: (route: GymRoute) => {
        return route.gym_wall ? route.gym_wall.name : "No Wall"
      },
      formatter: (cell: string) => _(`${cell}`)
    },
    {
      name: "Rope",
      id: "gym_rope.name",
      data: (route: GymRoute) => { 
        return route.gym_rope ? route.gym_rope?.name : "No Rope"
      },
      formatter: (cell: string) => _(`${cell}`)
    },
    {
      name: "Setter",
      id: "setter.name",
      data: (route: GymRoute) => { 
        return route.setter? route.setter?.name : "No Setter"
      },
      formatter: (cell: string) => _(`${cell}`)
    },
    {
      name: "Date Set",
      id: "date_set",
      formatter: (cell: string) => _(`${cell}`)
    }
  ]

  return (
    <Grid
      columns={columns}
      data={routes.gym_route}
      search={false}
      sort={true}
      pagination={{
        enabled: false
      }}
    />
  )
}