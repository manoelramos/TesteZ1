declare namespace PokemonService {
  type ListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
  };

  type PokemonListItem = {
    name: string;
    url: string;
  };

  type PokemonListParams = {
    offset: number;
    limit?: number;
  };
}
