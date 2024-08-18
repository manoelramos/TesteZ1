import { getOffsetFromUrl } from "@/utils";

export function handlePokemonListResponse(
  data: PokemonService.ListResponse
): PokemonStore.ListHandleResponse {
  const nextOffset = data.next ? getOffsetFromUrl(data.next) : null;

  return {
    nextOffset,
    results: data.results,
  };
}
