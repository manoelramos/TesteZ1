import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemons } from "../services/usePokemons";
import { usePokemonStore } from "@/stores/pokemons/usePokemonStore";

jest.mock("@/stores/pokemons/usePokemonStore");

describe("usePokemons hook", () => {
  it("should fetch pokemons on mount", () => {
    const loadPokemonListMock = jest.fn();
    const mockStore = {
      pokemonList: [],
      loadPokemonList: loadPokemonListMock,
      offset: 0,
      loading: false,
    };

    usePokemonStore.mockReturnValue(mockStore);

    renderHook(() => usePokemons());

    expect(loadPokemonListMock).toHaveBeenCalledWith(0);
  });

  it("should not fetch pokemons if loading is true", () => {
    const loadPokemonListMock = jest.fn();
    const mockStore = {
      pokemonList: [],
      loadPokemonList: loadPokemonListMock,
      offset: 0,
      loading: true,
    };

    usePokemonStore.mockReturnValue(mockStore);

    renderHook(() => usePokemons());

    expect(loadPokemonListMock).not.toHaveBeenCalled();
  });

  it("should return the correct data from the hook", () => {
    const loadPokemonListMock = jest.fn();
    const mockStore = {
      pokemonList: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
      loadPokemonList: loadPokemonListMock,
      offset: 0,
      loading: false,
    };

    usePokemonStore.mockReturnValue(mockStore);

    const { result } = renderHook(() => usePokemons());

    expect(result.current.pokemonList).toEqual(mockStore.pokemonList);
    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.fetchMorePokemons();
    });

    expect(loadPokemonListMock).toHaveBeenCalledWith(0);
  });
});
