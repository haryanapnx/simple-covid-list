export type Items = []
export type Details = []
export type Loading = false

export enum CountriesActionTypes {
   SET_COUNTRIES = '@@countries/SET_COUNTRIES',
   SET_COUNTRY_DETAIL = '@@countries/SET_COUNTRY_DETAIL',
   SET_LOADING = '@@countries/SET_LOADING',
   URL = '/countries'
}

export interface CountriesState {
   readonly items: Items
   readonly details: Details
   readonly loading: Loading
}
