import type { Info } from './InfoModel';

export interface ListResponse<T> {
  info: Info
  results: T[]
}
