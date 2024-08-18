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

  type PokemonDetailsParams = {
    url: string;
  };

  type PokemonDetailsResponse = {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    name: string;
    species: {
      name: string;
      url: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  };

  type PokemonDetailsSpecieResponse = {
    egg_groups: {
      name: string;
      url: string;
    }[];
  };
}
