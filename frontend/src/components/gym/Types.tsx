export type GymID = { id: number }

export interface GymData {
  gym_route?: GymRoute[]
  setter?: GymSetter[]
  gym_rope?: GymRope[]
  gym_wall?: GymWall[]
}

export type Gym = {
  id: number
  name: string
  owner_id: number
  location: string
  address: string
  email: string
  phone: string
  web_url: string
  reservation_link: string
  gym_walls: [GymWall]
}

export type GymWall = {
  id: number
  gym_id: number
  name: string
  type: string
  gym: Gym
  gym_ropes: [GymRope]
  gym_routes: [GymRoute]
}

export type GymRope = {
  id: number
  name: string
  gym_id: number
  wall_id: number
  last_replaced: Date
  gym: Gym
  gym_wall: GymWall
  gym_routes: [GymRoute]
}

export type GymSetter = {
  id: number
  name: string
  climber_id: number
}

export type GymRoute = {
  id: number
  gym_id: number
  wall_id: number
  rope_id: number
  setter_id: number
  date_set: Date
  date_unset: Date
  color: string
  set_grade: string
  name: string
  gym: Gym
  gym_rope: GymRope
  gym_wall: GymWall
  setter: GymSetter
}

export type GymHoldColor = {
  name: string
  industryName: string
  hex: string
}