import { create } from "@/modules";
import { getAllPokemons } from "@/services";
import { handlePokemonListResponse } from "./handlers";

export const usePokemonStore = create<PokemonStore.State>((set) => ({
  pokemonList: [],
  loading: false,
  offset: 0,
  loadPokemonList: async (offset: number) => {
    try {
      set({ loading: true });
      const response = await getAllPokemons({ offset });
      const handledResponse = handlePokemonListResponse(response);

      set((state) => ({
        pokemonList: [...state.pokemonList, ...handledResponse.results],
        offset: handledResponse.nextOffset,
      }));
    } catch (error) {
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
