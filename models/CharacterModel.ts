import type { CharacterLocation } from './LocationModel';
import type { Origin } from './OriginModel'

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: CharacterLocation
  image: string
  episode: string[]
  url: string
  created: string
}
