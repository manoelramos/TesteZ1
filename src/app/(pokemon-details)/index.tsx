import React from "react";
import { Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { usePokemonDetails } from "@/hooks/services/usePokemonDetails";

const PokemonListScreen = () => {
  const item = useLocalSearchParams<PokemonService.PokemonListItem>();
  const { details, loading } = usePokemonDetails({ url: item.url });
  const router = useRouter();

  const onPressCapture = () => {
    // router.navigate('');
  };

  return (
    <>
      <Text>
        {!!details && !loading ? JSON.stringify(details) : "carregando"}
      </Text>
    </>
  );
};

export default PokemonListScreen;
