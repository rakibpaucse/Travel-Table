import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const testApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],

  endpoints: (builder) => ({

    getAllCities: builder.query({
      query: (pageNo) => {
        console.log(pageNo);
        return `/city/allCities?page=${pageNo}`
      },
      transformResponse : (response:any) => {
        return response.cities
      }
    }),

    getPokemonList: builder.query<{ results: Array<{ name: string }> }, void>({
      query: () => `pokemon/`,
    }),

  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllCitiesQuery,
  useGetPokemonListQuery,
} = testApi; 

// export endpoints for use in SSR
export const { 
  getAllCities, 
  getPokemonList } = testApi.endpoints;