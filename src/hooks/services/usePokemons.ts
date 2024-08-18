import { useEffect } from "react";
import { usePokemonStore } from "@/stores/pokemons/usePokemonStore";

export function usePokemons(): UsePokemons.PokemonsHook {
  const { pokemonList, loadPokemonList, offset, loading } = usePokemonStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  function fetchPokemons() {
    if (loading || offset === null) return;

    loadPokemonList(offset);
  }

  return {
    pokemonList,
    loading,
    fetchMorePokemons: fetchPokemons,
  };
}
