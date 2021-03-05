import { CountriesActionTypes } from './types'
import { callApi } from '../../utils/api';

const setLoading = (payload: boolean) => ({
   type: CountriesActionTypes.SET_LOADING,
   payload
})

const setCountries = (payload: any) => ({
   type: CountriesActionTypes.SET_COUNTRIES,
   payload
})
const setCountryDetail = (payload: any) => ({
   type: CountriesActionTypes.SET_COUNTRY_DETAIL,
   payload
})

export const getCountries = () => async (dispatch: Function) => {
   dispatch(setLoading(true))
   const path: string = CountriesActionTypes.URL;
   const result = await callApi({ method: "get", path })

   if (result) dispatch(setCountries(result));
   dispatch(setLoading(false))
}

export const getCountriesDetail = (slug: string, status: string) => async (dispatch: Function) => {
   dispatch(setLoading(true))
   const path: string = `/country/${slug}/status/${status}`;
   const result = await callApi({ method: "get", path })

   if (result) dispatch(setCountryDetail(result.sort().reverse().slice(0,10)));
   dispatch(setLoading(false))
}