import React from "react"
import { gql, useQuery } from "@apollo/client"

import { GymID, GymRope } from "./Types"

const GET_ROPES=gql`
query Walls($gym_id: bigint!) {
  gym_rope(where: {gym_id: {_eq: $gym_id}}, order_by: {name: asc}) {
    gym_id
    id
    last_replaced
    name
    wall_id
  }
}
`

export const Ropes: React.FunctionComponent<GymID> = (gym_id) => {
  const { loading, error, data } = useQuery(GET_ROPES, {
    variables: {gym_id: gym_id.id}
  })

  if (loading) return ( <h1>Ropes</h1> )
  if (error) return ( <h1>`Error: ${error.message}`</h1> )
  return (
    <div>
      <h1>Ropes</h1>
      { data.gym_rope.map((rope: GymRope) => (
        <div key={rope.id}>
          <h2>Rope: {rope.name}</h2>
          <div className="GymDetails">
            <h5>Last Replaced: {rope.last_replaced}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}