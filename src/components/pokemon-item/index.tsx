import React from 'react';
import { IconArrow, Title, Wrapper } from './styles';

type Props = {
  item: PokemonService.PokemonListItem;
  onPressItem(item: PokemonService.PokemonListItem): void;
};

const PokemonItem = React.memo(({ item, onPressItem }: Props) => {
  function handleOnPress() {
    onPressItem(item);
  }

  return (
    <Wrapper onPress={handleOnPress}>
      <Title>{item.name}</Title>
      <IconArrow name="arrow-right" size={24} color="black" />
    </Wrapper>
  );
});

export default PokemonItem;
