
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from './types'

/** 
 * With RTK Query, you usually define your entire API definition in one place.
 * This is most likely different from what you see with other libraries such as
 * swr or react-query, and there are several reasons for that. Our perspective
 * is that it's much easier to keep track of how requests, cache invalidation
 * and general app configuration behave when they're all in one central location
 * in comparison to having X number of custom hooks in different files
 * throughout your application.
 */

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByLimit: builder.query<Pokemon, number>({
      query: (limit) => `pokemon?limit=${limit}&offset=0`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery  } = pokemonApi
console.log('pokemonApi', pokemonApi)
export const { useGetPokemonByNameQuery, useGetPokemonByLimitQuery  } = pokemonApi