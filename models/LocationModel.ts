export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[],
  url: string
  created: string
}

export type CharacterLocation = Pick<Location, 'name' | 'url'>
