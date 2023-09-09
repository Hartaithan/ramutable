import type { Info } from './InfoModel'
import type { Origin } from './OriginModel'

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface CharactersResponse {
  info: Info
  results: Character[]
}
