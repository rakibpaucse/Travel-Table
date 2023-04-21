import { apiSlice } from "store/apiSlice";

export const citiesApi = apiSlice.injectEndpoints({
    overrideExisting: true , 
    endpoints: (builder) => ({

        getCities: builder.query({
            query: ({pageNo}) => {
              return `/city/allCities?page=${pageNo}`
            },
            transformResponse : (response:any) => { 
              return response.cities
            }
          }),

        getCitiesByPost: builder.mutation({
            query: ( {filterOptions , pageNo=0} )=> ({
              url: `/city/allCities?page=${pageNo}`,
              method: 'POST',
              body: filterOptions,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }),
            transformResponse : (response:any) => { 
              return response.cities
            }
          }),

        getSingleCity: builder.query({
          query: (cityName) => {
            return `/city/cityByName?city=${cityName}`
          },
          transformResponse : (response:any) => { 
            return response.cityName
          }
        }),

        getCityByName: builder.query({
          query: (cityName) => {
            return `/city/searchCity?city=${cityName}`
          },
           transformResponse : (response:any) => { 
             
             return response.city
           }
        }),

        getComparedCity: builder.query({
          query: (args) => {
            const { from , to } = args
            return `/city/compareCity?from=${from}&to=${to}`
          },
           transformResponse : (response:any) => { 
             
             return response
           }
        })
       
    })
})

export const {  
    useGetCitiesQuery , 
    useGetSingleCityQuery,
    useGetCityByNameQuery,
    useGetComparedCityQuery,
    useGetCitiesByPostMutation
    // useGetMoreCitiesQuery 
} = citiesApi 