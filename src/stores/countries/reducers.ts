import { Reducer } from 'redux'
import { CountriesState, CountriesActionTypes } from './types'

// Type-safe initialState!
export const initialState: CountriesState = {
   items: [],
   details: [],
   loading: false
}

const reducer: Reducer<CountriesState> = (state = initialState, action) => {
   switch (action.type) {
      case CountriesActionTypes.SET_COUNTRIES: {
         return { ...state, items: action.payload }
      }
      case CountriesActionTypes.SET_COUNTRY_DETAIL: {
         return { ...state, details: action.payload }
      }
      case CountriesActionTypes.SET_LOADING: {
         return { ...state, loading: action.payload }
      }
      default: {
         return state
      }
   }
}

export { reducer as countriesReducer }