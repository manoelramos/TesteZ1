declare namespace PokemonStore {
  type State = {
    pokemonList: PokemonService.PokemonListItem[];
    offset: number | null;
    loading: boolean;
    loadPokemonList: (offset: number) => Promise<void>;
    capturedPokemons: string[];
    capturePokemon: (pokemonName: string) => void;
  };

  type ListHandleResponse = {
    nextOffset: number | null;
    results: PokemonService.PokemonListItem[];
  };
}
