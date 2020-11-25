import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Gym } from './Types'


const GET_GYMS=gql`
query Gyms {
  gym {
    name
    location
    owner_id
    phone
    reservation_link
    web_url
    email
    address
    id
  }
}
`

export function Gyms() {
  const { loading, error, data } = useQuery(GET_GYMS)

  if (loading) return ( <h1>Gyms</h1> )
  if (error) return ( <h1>`Error: ${error.message}`</h1> )
  return (
    <div>
      <h1>Gyms</h1>
      { data.gym.map((gym: Gym) => (
        <div key={gym.id}>
          <h2 >{gym.name}</h2>
          <div className="GymDetails">
            <h5>Email: {gym.email}</h5>
            <h5>Phone: {gym.phone}</h5>
            <h5>Address: {gym.address}</h5>
            <h5>Location: {gym.location}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}