import { useState, useEffect } from "react";
import {
  useGetPokemonByNameQuery,
  useGetPokemonByLimitQuery,
} from "./services/pokemon";
import "./App.css";

function App() {
  // Using a query hook automatically fetches data and returns query values
  const pikachu = useGetPokemonByNameQuery("pikachu");
  const pokemonList = useGetPokemonByLimitQuery(15);
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {pikachu.error || pokemonList.error ? (
        <>Oh no, there was an error</>
      ) : pikachu.isLoading || pokemonList.isLoading ? (
        <>Loading...</>
      ) : pikachu.data ? (
        <ul>
          {pokemonList.data &&
            pokemonList.data.results.map((pokemon: any) => {
              return <li key={pokemon.name}>{pokemon.name}</li>;
            })}
          <h3>{pikachu.data.species.name}</h3>
          <img
            src={pikachu.data.sprites.front_shiny}
            alt={pikachu.data.species.name}
          />
        </ul>
      ) : null}
    </div>
  );
}

export default App;
