declare namespace UsePokemons {
  type PokemonsHook = {
    pokemonList: PokemonService.PokemonListItem[];
    loading: boolean;
    fetchMorePokemons: () => void;
  };
}
