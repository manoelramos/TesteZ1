import { fireEvent, render } from "@testing-library/react-native";

import PokemonItem from "../pokemon-item";

const MOCK_POKEMON_ITEM = {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1",
};

describe("<PokemonItem />", () => {
  test("should render correctly with the provided text", () => {
    const { getByText } = render(
      <PokemonItem onPressItem={() => {}} item={MOCK_POKEMON_ITEM} />,
    );

    const textLabel = getByText("bulbasaur");

    expect(textLabel).toBeTruthy();
  });

  test("should call onPressItem when the button is tapped", () => {
    const onPressItemMock = jest.fn();
    const { getByText } = render(
      <PokemonItem onPressItem={onPressItemMock} item={MOCK_POKEMON_ITEM} />,
    );

    fireEvent.press(getByText("bulbasaur"));

    expect(onPressItemMock).toHaveBeenCalledTimes(1);
  });
});
