import { useEffect } from "react";
import { usePokemonDetailsStore } from "@/stores/pokemons/usePokemonDetailsStore";

export function usePokemonDetails({
  url,
}: UsePokemonsDetails.Params): UsePokemonsDetails.PokemonDetailsHook {
  const { loading, details, loadPokemonDetails } = usePokemonDetailsStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  function fetchPokemons() {
    loadPokemonDetails(url);
  }

  return {
    details,
    loading,
  };
}
