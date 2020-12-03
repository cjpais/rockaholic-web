import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { GymData, GymID } from "./Types"
import { GymRouteTable } from "./GymRouteTable"
import { GymRouteAddModal } from "./GymRouteAddModal"

const GET_ROUTES_SETTERS = gql`
query GetRouteFromGym($id: bigint) {
  gym_route(where: {gym_id: {_eq: $id}}) {
    color
    date_set
    date_unset
    gym_id
    id
  name
    rope_id
    set_grade
    setter_id
    wall_id
    gym_rope {
      name
      wall_id
    }
    gym_wall {
      name
      type
      id
    }
    setter {
      name
      id
    }
  }
  setter {
    climber_id
    id
    name
  }
  gym_rope(where: {gym_id: {_eq: $id}}, order_by: {name: asc}) {
    gym_id
    id
    last_replaced
    name
    wall_id
  }
  gym_wall(where: {gym_id: {_eq: $id}}) {
    type
    name
    id
    gym_id
  }
}
`


export const Routes = (id: GymID) => {

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const { loading, error, data } = useQuery<GymData>(GET_ROUTES_SETTERS, {
    variables: {id: id.id}
  })

  function openModal() { setIsOpen(true) }

  if (loading) return ( <h1>Routes</h1> )
  if (error) return ( <h1>`Error: ${error.message}`</h1> )

  return (
    <div>
      <div style={{"display": "flex"}}>
        <h1 style={{"marginRight": "auto"}}>Routes</h1>
        <button onClick={openModal}>
          Add Route
        </button>
      </div>
      <GymRouteAddModal 
        gym_wall={ data?.gym_wall } 
        gym_rope={ data?.gym_rope } 
        setter={ data?.setter }
        isOpen={ modalIsOpen } 
        setParentOpen={ setIsOpen }
      />
      <GymRouteTable 
        gym_route={ data?.gym_route }
      />
    </div>
  )
}