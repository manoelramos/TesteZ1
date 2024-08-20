declare namespace PokemonDetailsStore {
  type State = {
    details: PokemonDetailsHandleResponse | null;
    loading: boolean;
    loadPokemonDetails: (url: string) => Promise<void>;
  };

  type PokemonDetailsHandleResponse = {
    abilities: string;
    name: string;
    types: string;
    specie: string;
    eggGroups: string;
  };
}
