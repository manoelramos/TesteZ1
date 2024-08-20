import { create } from '@/modules';
import { getPokemonDetails } from '@/services';
import { handlePokemonDetailsResponse } from './handlers';

export const usePokemonDetailsStore = create<PokemonDetailsStore.State>(
  (set) => ({
    details: null,
    loading: false,
    loadPokemonDetails: async (url: string) => {
      try {
        set({ loading: true });
        const response =
          await getPokemonDetails<PokemonService.PokemonDetailsResponse>({
            url,
          });
        const responseSpecie =
          await getPokemonDetails<PokemonService.PokemonDetailsSpecieResponse>({
            url: response.species.url,
          });
        const handledResponse = handlePokemonDetailsResponse({
          details: response,
          specie: responseSpecie,
        });

        set({
          details: handledResponse,
        });
      } catch (error) {
        throw error;
      } finally {
        set({ loading: false });
      }
    },
  }),
);
