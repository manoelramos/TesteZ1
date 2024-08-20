import { getAllPokemons } from "../pokemon";
import { httpClientGet } from "@/clients";

jest.mock("@/clients", () => ({
  httpClientGet: jest.fn(),
}));

const MOCK_RESPONSE = {
  count: 1302,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
  ],
};

describe("fetch all pokemon", () => {
  it("should fetch a list of pokemons", async () => {
    httpClientGet.mockResolvedValueOnce({ data: MOCK_RESPONSE });

    const result = await getAllPokemons({ offset: 0, limit: 20 });

    expect(httpClientGet).toHaveBeenCalledWith({
      url: process.env.EXPO_PUBLIC_POKE_API_URL,
      path: "pokemon",
      params: { offset: 0, limit: 20 },
    });
    expect(result).toEqual(MOCK_RESPONSE);
  });

  it("should throw an error if the request fails", async () => {
    const errorMessage = "Network Error";
    httpClientGet.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getAllPokemons({ offset: 0, limit: 20 })).rejects.toThrow(
      errorMessage,
    );
  });
});
