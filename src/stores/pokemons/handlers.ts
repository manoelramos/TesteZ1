import { getOffsetFromUrl } from '@/utils';

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
    abilities: details.abilities.map((item) => item.ability.name).join(', '),
    specie: details.species.name,
    name: details.name,
    types: details.types.map((item) => item.type.name).join(', '),
    eggGroups: specie.egg_groups.map((item) => item.name).join(', '),
  };
}
