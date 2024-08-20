import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import { usePokemons } from "@/hooks/services/usePokemons";
import PokemonListScreen from "../(initial-tabs)/(pokemon-list)";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/services/usePokemons");

jest.mock("@/components/pokemon-item", () => {
  const { Text, TouchableOpacity } = require("react-native");
  return ({ item, onPressItem }) => (
    <TouchableOpacity onPress={() => onPressItem(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
});

const MOCK_ROUTER = { push: jest.fn() };
const MOCK_POKEMON_LIST = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
];

describe("PokemonListScreen", () => {
  beforeEach(() => {
    useRouter.mockReturnValue(MOCK_ROUTER);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the list of pokemons once data is loaded", async () => {
    usePokemons.mockReturnValue({
      pokemonList: MOCK_POKEMON_LIST,
      fetchMorePokemons: jest.fn(),
      loading: false,
    });

    const { getByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(getByText("bulbasaur")).toBeTruthy();
    });

    MOCK_POKEMON_LIST.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeTruthy();
    });
  });

  it("should navigate to pokemon details on item press", async () => {
    usePokemons.mockReturnValue({
      pokemonList: MOCK_POKEMON_LIST,
      fetchMorePokemons: jest.fn(),
      loading: false,
    });

    const { getByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(getByText("bulbasaur")).toBeTruthy();
    });

    fireEvent.press(getByText("bulbasaur"));

    expect(MOCK_ROUTER.push).toHaveBeenCalledWith({
      pathname: "/(pokemon-details)",
      params: MOCK_POKEMON_LIST[0],
    });
  });

  it("should call fetchMorePokemons when the end of the list is reached", async () => {
    const fetchMorePokemonsMock = jest.fn();
    usePokemons.mockReturnValueOnce({
      pokemonList: MOCK_POKEMON_LIST,
      fetchMorePokemons: fetchMorePokemonsMock,
      loading: false,
    });

    const { getByTestId } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(getByTestId("listOfPokemons")).toBeTruthy();
    });

    fireEvent.scroll(getByTestId("listOfPokemons"), {
      nativeEvent: {
        contentOffset: {
          y: 1000,
        },
        contentSize: {
          height: 1000,
        },
        layoutMeasurement: {
          height: 900,
        },
      },
    });

    expect(fetchMorePokemonsMock).toHaveBeenCalled();
  });
});
