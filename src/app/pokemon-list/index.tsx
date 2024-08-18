import React, { useCallback, useEffect } from "react";
import { usePokemonStore } from "@/stores/pokemons/usePokemonStore";
import { FlashList } from "@/modules";
import PokemonItem from "@/components/pokemon-item";
import { ActivityIndicator } from "react-native";

const PokemonListScreen = () => {
  const { pokemonList, loadPokemonList, offset, loading } = usePokemonStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  function fetchPokemons() {
    if (loading || offset === null) return;

    loadPokemonList(offset);
  }

  const renderFooter = useCallback(() => {
    return loading ? <ActivityIndicator size="large" /> : null;
  }, [loading]);

  const keyExtractor = useCallback(
    (item: PokemonService.PokemonListItem, idx: number) =>
      `${idx}-${item.name}`,
    [],
  );

  return (
    <FlashList
      data={pokemonList}
      renderItem={({ item }) => <PokemonItem item={item} />}
      keyExtractor={keyExtractor}
      estimatedItemSize={70}
      ListFooterComponent={renderFooter}
      onEndReached={fetchPokemons}
      onEndReachedThreshold={0.1}
    />
  );
};

export default PokemonListScreen;
