declare namespace PokemonDetailsStore {
  type State = {
    details: PokemonDetailsHandleResponse | null;
    loading: boolean;
    loadPokemonDetails: (url: string) => Promise<void>;
  };

  type PokemonDetailsHandleResponse = {
    abilities: {
      name: string;
    }[];
    name: string;
    types: {
      name: string;
    }[];
    eggGroups: {
      name: string;
    }[];
  };
}
