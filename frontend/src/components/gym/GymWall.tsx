import React from "react"
import { gql, useQuery } from '@apollo/client';

import { GymID, GymWall } from "./Types"

const GET_WALLS=gql`
query Walls($gym_id: bigint!) {
  gym_wall(where: {gym_id: {_eq: $gym_id}}) {
    type
    name
    id
    gym_id
  }
}
`

export const Walls: React.FunctionComponent<GymID> = (gymID) => {
  const { loading, error, data } = useQuery(GET_WALLS, {
    variables: {gym_id: gymID}
  })

  if (loading) return ( <h1>Walls</h1> )
  if (error) return ( <h1>`Error: ${error.message}`</h1> )
  return (
    <div>
      <h1>Walls</h1>
      { data.gym_wall.map((wall: GymWall) => (
        <div key={wall.id}>
          <h2>{wall.name}</h2>
        </div>
      ))}
    </div>
  )
}
