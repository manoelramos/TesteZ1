import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { FlashList } from '@/modules';
import PokemonItem from '@/components/pokemon-item';
import { usePokemonStore } from '@/stores/pokemons/usePokemonStore';
import { InputWrapper, InputText } from './styles';
import NotFound from '@/components/not-found';

const CapturedPokemonsScreen = () => {
  const [filter, setFilter] = useState('');
  const { capturedPokemons } = usePokemonStore();
  const router = useRouter();

  const parsedCapturedPokemons = useMemo(() => {
    return capturedPokemons.map((item) => JSON.parse(item));
  }, [capturedPokemons]);

  const filteredList = useMemo(() => {
    if (filter && filter.length > 0) {
      return parsedCapturedPokemons.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return parsedCapturedPokemons;
  }, [filter, capturedPokemons]);

  const keyExtractor = useCallback(
    (item: PokemonService.PokemonListItem, idx: number) =>
      `${idx}-${item.name}`,
    [],
  );

  const onPressItem = (selectedItem: PokemonService.PokemonListItem) => {
    router.push({ pathname: '/(pokemon-details)', params: selectedItem });
  };

  return (
    <>
      <InputWrapper>
        <InputText
          value={filter}
          onChangeText={setFilter}
          placeholder="Digite para filtrar"
        />
      </InputWrapper>
      <FlashList
        testID="listOfPokemons"
        data={filteredList}
        renderItem={({ item }) => (
          <PokemonItem item={item} onPressItem={onPressItem} />
        )}
        keyExtractor={keyExtractor}
        estimatedItemSize={70}
        ListEmptyComponent={NotFound}
      />
    </>
  );
};

export default CapturedPokemonsScreen;
