import React, { useMemo } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { usePokemonDetails } from "@/hooks/services/usePokemonDetails";
import {
  BtCapture,
  Wrapper,
  InfoWrapper,
  ButtonWrapper,
  Title,
  Description,
  TitleWrapper,
  Loading,
  LoadingWrapper,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonStore } from "@/stores/pokemons/usePokemonStore";

const PokemonDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const item = useLocalSearchParams<PokemonService.PokemonListItem>();
  const { capturePokemon, capturedPokemons } = usePokemonStore();
  const { details, loading } = usePokemonDetails({ url: item.url });
  const router = useRouter();

  const pokemonCaptured = useMemo(() => {
    return (
      capturedPokemons.findIndex(
        (pokemon) => JSON.parse(pokemon)?.name === item.name,
      ) !== -1
    );
  }, [capturedPokemons]);

  const onPressCapture = () => {
    capturePokemon(JSON.stringify(item));
  };

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <InfoWrapper>
        <TitleWrapper>
          <Title>Nome:</Title>
          <Description>{item.name}</Description>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Habilidades:</Title>
          <Description>{details?.abilities}</Description>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Espécies:</Title>
          <Description>{details?.specie}</Description>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Egg Groups:</Title>
          <Description>{details?.eggGroups}</Description>
        </TitleWrapper>
        <TitleWrapper>
          <Title>Tipos:</Title>
          <Description>{details?.abilities}</Description>
        </TitleWrapper>
      </InfoWrapper>
      <ButtonWrapper marginBottom={insets.bottom}>
        <BtCapture
          text={pokemonCaptured ? "Capturado" : "Capturar"}
          disabled={pokemonCaptured}
          onPressItem={onPressCapture}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PokemonDetailsScreen;
