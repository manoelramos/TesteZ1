declare namespace PokemonStore {
  type State = {
    pokemonList: PokemonService.PokemonListItem[];
    offset: number | null;
    loading: boolean;
    loadPokemonList: (offset: number) => Promise<void>;
  };

  type ListHandleResponse = {
    nextOffset: number | null;
    results: PokemonService.PokemonListItem[];
  };
}
