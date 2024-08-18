import { getOffsetFromUrl } from "@/utils";

export function handlePokemonListResponse(
  data: PokemonService.ListResponse,
): PokemonStore.ListHandleResponse {
  const nextOffset = data.next ? getOffsetFromUrl(data.next) : null;

  return {
    nextOffset,
    results: data.results,
  };
}

export function handlePokemonDetailsResponse({
  details,
  specie,
}: {
  details: PokemonService.PokemonDetailsResponse;
  specie: PokemonService.PokemonDetailsSpecieResponse;
}): PokemonDetailsStore.PokemonDetailsHandleResponse {
  return {
    abilities: details.abilities.map((item) => ({
      name: item.ability.name,
    })),
    name: details.name,
    types: details.types.map((item) => ({
      name: item.type.name,
    })),
    eggGroups: specie.egg_groups.map((item) => ({
      name: item.name,
    })),
  };
}
