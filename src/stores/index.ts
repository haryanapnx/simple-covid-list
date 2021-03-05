import { combineReducers } from 'redux';
import { countriesReducer, CountriesState } from './countries'

export interface ApplicationState {
  countries: CountriesState
}
export default combineReducers({
  countries: countriesReducer,
});
