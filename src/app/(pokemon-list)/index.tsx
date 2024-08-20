import React, { useCallback } from "react";
import { useRouter } from "expo-router";
import { FlashList } from "@/modules";
import PokemonItem from "@/components/pokemon-item";
import { usePokemons } from "@/hooks/services/usePokemons";
import { Loading } from "./styles";

const PokemonListScreen = () => {
  const { pokemonList, fetchMorePokemons, loading } = usePokemons();
  const router = useRouter();

  const renderFooter = useCallback(
    () => (loading ? <Loading testID="loading" /> : null),
    [loading],
  );

  const keyExtractor = useCallback(
    (item: PokemonService.PokemonListItem, idx: number) =>
      `${idx}-${item.name}`,
    [],
  );

  const onPressItem = (selectedItem: PokemonService.PokemonListItem) => {
    router.push({ pathname: "/(pokemon-details)", params: selectedItem });
  };

  return (
    <>
      <FlashList
        testID="listOfPokemons"
        data={pokemonList}
        renderItem={({ item }) => (
          <PokemonItem item={item} onPressItem={onPressItem} />
        )}
        keyExtractor={keyExtractor}
        estimatedItemSize={70}
        ListFooterComponent={renderFooter}
        onEndReached={fetchMorePokemons}
        onEndReachedThreshold={0.1}
      />
    </>
  );
};

export default PokemonListScreen;
