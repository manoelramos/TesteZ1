declare namespace UsePokemonsDetails {
  type Params = {
    url: string;
  };

  type PokemonDetailsHook = {
    details: PokemonDetailsStore.PokemonDetailsHandleResponse | null;
    loading: boolean;
  };
}
