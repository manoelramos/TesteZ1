import { create, persist, devtools, createJSONStorage } from '@/modules';
import { getAllPokemons } from '@/services';
import { StorageConstants } from '@/storage/constants';
import { zustandStorage } from '@/storage';
import { handlePokemonListResponse } from './handlers';

export const usePokemonStore = create<PokemonStore.State>()(
  devtools(
    persist(
      (set) => ({
        pokemonList: [],
        loading: false,
        offset: 0,
        capturedPokemons: [],
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
        capturePokemon: (pokemon: string) =>
          set((state) => ({
            capturedPokemons: [...state.capturedPokemons, pokemon],
          })),
      }),
      {
        name: StorageConstants.CAPTURED_POKEMONS,
        storage: createJSONStorage(() => zustandStorage),
        partialize: (state) => ({ capturedPokemons: state.capturedPokemons }),
      },
    ),
  ),
);
