import React from "react"
import { gql, useQuery } from "@apollo/client"

import { GymSetter } from "./Types"

export const GET_SETTERS=gql`
query Setters {
  setter {
    climber_id
    id
    name
  }
}
`

export const Setters = () => {
  const { loading, error, data } = useQuery(GET_SETTERS)

  if (loading) return ( <h1>Setters</h1> )
  if (error) return ( <h1>`Error: ${error.message}`</h1> )
  return (
    <div>
      <h1>Setters</h1>
      { data.setter.map((setter: GymSetter) => (
        <div key={setter.id}>
          <h2>{setter.name}</h2>
        </div>
      ))}
    </div>
  )
}