import { httpClientGet } from "@/clients";

type PokemonListResponse = PokemonService.ListResponse;
type PokemonListParams = PokemonService.PokemonListParams;

export const getAllPokemons = async ({
  offset,
  limit = 20,
}: PokemonListParams): Promise<PokemonListResponse> => {
  try {
    const { data } = await httpClientGet<PokemonListResponse>({
      url: process.env.EXPO_PUBLIC_POKE_API_URL!,
      path: "pokemon",
      params: {
        offset,
        limit,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
