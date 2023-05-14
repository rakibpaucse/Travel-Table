import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from 'next-redux-wrapper'

const baseQuery = fetchBaseQuery({
    // baseUrl : "http://localhost:8081/",
    baseUrl : "https://travel-table.onrender.com/",
})

export const apiSlice = createApi({
    reducerPath: 'mainApi',
    baseQuery: async(args , api , extraOptions) => {

        let result = await baseQuery(args, api, extraOptions);
        
        if (result?.error?.status === 401) {
            localStorage.clear();
        }
        return result;
    },
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
      },
    tagTypes: ['countryList', 'cityList'],
    endpoints: (builder) => ({}),
});